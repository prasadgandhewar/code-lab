1. Virtual DOM Vs 
    “What’s the difference between Virtual DOM and Fiber?”
🟢 Answer:
    “Virtual DOM represents what the UI should look like, while Fiber is the reconciliation engine that schedules, prioritizes, and breaks rendering work into interruptible units. Fiber enables concurrent rendering, which wasn’t possible with the old synchronous reconciler.”

    Virtual DOM itself is not fast — avoiding unnecessary DOM updates is what’s fast.
    Problem with Old Reconciler
    Before Fiber:
    Reconciliation was synchronous
    One long blocking operation
    Could not:
    Pause
    Interrupt

    Fiber is NOT a new Virtual DOM

    👉 Virtual DOM = “what to render”
    👉 Fiber = “how to render (schedule work)”

    Fiber is React’s new reconciliation engine (since React 16) that:
        Breaks rendering work into units of work
        Can pause, resume, or abort work
        Assigns priority levels to updates

Prioritize input updates
    Update Type	Priority
    User input (typing)	High
    Clicking buttons	High
    Data fetching UI	Medium
    Large lists render	Low

2. concurrency feature in 18 & above
| Feature             | Purpose                             |
| ------------------- | ----------------------------------- |
| `createRoot`        | Enable concurrent features          |
| Automatic batching  | Reduce renders automatically        |
| `startTransition`   | Mark non-urgent updates             |
| `useTransition`     | Control transitions & loading state |
| `useDeferredValue`  | Defer expensive recalculations      |
| Suspense            | Handle loading & streaming          |
| Streaming SSR       | Faster HTML delivery                |
| Selective hydration | Prioritized interactivity           |
| StrictMode (dev)    | Detect unsafe lifecycle usage       |


3. “How does React’s reconciliation algorithm work?”

    Respond:
    “React reconciles by diffing the previous and next Virtual DOM trees using heuristics like element type comparison and keys. Keys give stable identity for list items, allowing React to preserve state and minimize DOM mutations. Fiber enhances this by making reconciliation interruptible and prioritized.”

4. COmmit phase lifecycle

    Before DOM mutation
    ↓
    DOM mutation
    ↓
    Layout effects
    ↓
    Browser paint
    ↓
    Passive effects
5. Render Vs Commit
    | Aspect           | Render Phase   | Commit Phase  |
| ---------------- | -------------- | ------------- |
| Purpose          | Calculate diff | Apply changes |
| Interruptible    | ✅ Yes          | ❌ No          |
| Can re-run       | ✅ Yes          | ❌ No          |
| DOM access       | ❌ No           | ✅ Yes         |
| Side effects     | ❌ Forbidden    | ✅ Allowed     |
| Concurrent       | ✅              | ❌             |
| Performance cost | CPU            | CPU + DOM     |
| Hook              | Phase                 |
| ----------------- | --------------------- |
| `useState`        | Render                |
| `useMemo`         | Render                |
| `useCallback`     | Render                |
| `useLayoutEffect` | Commit (before paint) |
| `useEffect`       | Commit (after paint)  |
“Render is a pure, interruptible phase where React calls components and calculates what needs to change by diffing the Virtual DOM. Commit is a non-interruptible phase where React mutates the DOM, attaches refs, and runs layout and passive effects.”

6. What triggers re-render 
    A React component re-renders when its state changes, its props change, or the context it consumes changes. In addition, its parent re-rendering can cause it to re-render unless prevented by memoization.
    
    React uses Object.is comparison:
    If new state is same reference/value, React may bail out
    setState(prev => prev); --> No re-render

    Hooks That Trigger Re-render
    ✅ Trigger Re-render
    Hook	Triggers?
    useState	✅
    useReducer	✅
    useContext	✅ (on value change)
    ❌ Does NOT Trigger Re-render
    Hook	Re-render?
    useRef	❌
    useMemo	❌
    useCallback	❌

7. useState vs useReducer
    “For simple UI state like a toggle or input, I use useState because it’s direct. When state grows to multiple related values with several transitions—like loading, success, and error states—I switch to useReducer so updates are predictable, easier to test, and simpler to reason about.”

8. useEffect execution order, cleanup, dependencies
    useEffect runs after the commit phase (after DOM paint). Cleanup runs before the next effect execution and on unmount. Dependencies control when the effect re-runs via referential equality.

    Execution Order — Mount → Update → Unmount
    🟢 On Initial Mount

    Component renders

    DOM updates (commit)

    Browser paints

    useEffect runs ✅

    🔵 On Re-render (Update)

    Component re-renders

    Cleanup from previous effect runs

    DOM updates

    Browser paints

    New effect runs ✅

    This order is critical.

    On Unmount

    🔴 On Unmount

    Cleanup runs

    Component removed

9. useLayoutEffect vs useEffect
    | Aspect                | `useEffect`                 | `useLayoutEffect`              |
| --------------------- | --------------------------- | ------------------------------ |
| When it runs          | **After paint** (async)     | **Before paint** (sync)        |
| Blocks browser paint  | ❌ No                        | ✅ Yes                          |
| Performance impact    | Minimal                     | Can cause jank                 |
| Typical use           | Side effects, data fetching | DOM measurements, layout fixes |
| Server-side rendering | ✅ Safe                      | ⚠️ Warning (no-op on server)   |

10. useMemo vs useCallback (actual use cases, not buzzwords)
    On every render:

    Values are recalculated
    Functions are recreated (new reference)
    React compares references, not intent.
    
    useMemo — when NOT to use
    ❌ Small calculations
    ❌ Primitive values (number, string)
    ❌ “Just in case” optimization
    ❌ Everything looks fast already

    Memoization itself has a cost.

    Practical rules you can follow at work
    ✅ Use useMemo when:
    Heavy computation
    Creating objects/arrays used in deps or memo children

    ✅ Use useCallback when:
    Passing callbacks to React.memo children
    Function is a dependency of useEffect
    Event listeners / subscriptions

11. useRef mutable vs DOM ref
    DOM refs are used for imperative access to elements created by React, while mutable refs act as persistent containers for any value that needs to survive renders without triggering re-renders. Both leverage the same stable ref object returned by useRef.

12. Custom hooks design patterns
    1️⃣ Hooks = Logic, not views
    ✅ No JSX
    ✅ No rendering decisions
    ✅ Return data + actions

    Pattern 1: State + Behavior (most common)

    Encapsulates state + transition logic.

    function useToggle(initial = false) {
        const [value, setValue] = useState(initial);

        const on = useCallback(() => setValue(true), []);
        const off = useCallback(() => setValue(false), []);
        const toggle = useCallback(() => setValue(v => !v), []);

        return { value, on, off, toggle };
    }

    Pattern 2: Data-fetching hooks (with cancellation & refetch)

    Senior-level version handles:

    Abort

    Manual refetch

    Stable identity

    function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const controllerRef = useRef<AbortController | null>(null);

    const fetchData = useCallback(async () => {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        setLoading(true);
        setError(null);

        try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Failed");
        setData(await res.json());
        } catch (e: any) {
        if (e.name !== "AbortError") setError(e);
        } finally {
        setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
        return () => controllerRef.current?.abort();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
    }


    Interview bonus:
    👉 “For large apps, I’d delegate this to React Query instead of rolling my own.”

13. createSlice & createAsyncThunk
    2️⃣ createAsyncThunk
    createAsyncThunk is a standardized async action generator.

    It automatically creates 3 lifecycle actions:

    Stage	Action
    Start	pending
    Success	fulfilled
    Failure	rejected
    Basic Example
    import { createAsyncThunk } from '@reduxjs/toolkit';

    export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
        async (_, thunkAPI) => {
            const res = await fetch('/api/users');
            return res.json();
        }
    );


    This creates:

    fetchUsers.pending

    fetchUsers.fulfilled

    fetchUsers.rejected

    How Thunk Works (Under the Hood)
    dispatch(fetchUsers());


    RTK dispatches internally:

    users/fetchUsers/pending

    runs async function

    on success → fulfilled(payload)

    on error → rejected(error)

    Handling Errors Properly (Senior-level)
    ❌ Common junior mistake
    throw new Error('Failed');


    Produces:

    generic error

    payload is undefined

    ✅ Correct Way: rejectWithValue
        export const fetchUsers = createAsyncThunk(
        'users/fetch',
        async (_, { rejectWithValue }) => {
            try {
            const res = await fetch('/api/users');
            if (!res.ok) throw new Error('API failed');
            return await res.json();
            } catch (err) {
            return rejectWithValue(err.message);
            }
        }
        );


    In reducer:

        .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.payload; // ✅ custom error
        });

    Using thunkAPI (Interview favorite)
        async (arg, thunkAPI) => {
            const { dispatch, getState, signal } = thunkAPI;

            const token = getState().auth.token;

            const res = await fetch('/api/data', {
                headers: { Authorization: `Bearer ${token}` },
                signal
            });

            return res.json();
        }

    Available helpers:
    Name	Purpose
    dispatch	Dispatch other actions
    getState	Access current state
    rejectWithValue	Custom error
    signal	Abort request
    requestId	Tracking request
    extra	Injected dependencies

14. Large forms optimization
    - Split into smaller form or field and use useMemo/callback
    - use ref for form with more than 50 fields. (hybrid approach state + ref)
    - 

15. Code splitting (lazy, Suspense)
    const settingPage = React.lazy(() => import('/setting'))

16. Feature-first vs layer-first structure
    Feature-first is better for scaling

    