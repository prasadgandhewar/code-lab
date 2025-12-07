. Core React — Deep Understanding (Non-Negotiable)
✅ Rendering & Reconciliation

Virtual DOM vs Fiber

Reconciliation algorithm (keys, diffing)

Render vs commit phase

What triggers a re-render

Batching updates (React 18 automatic batching)

👉 Be able to explain:
“Why did this component re-render and how do I stop it?”

✅ Hooks (Beyond Basics)

useState vs useReducer (when and why)

useEffect execution order, cleanup, dependencies

useLayoutEffect vs useEffect

useMemo vs useCallback (actual use cases, not buzzwords)

useRef mutable vs DOM ref

Custom hooks design patterns

👉 Expect “bug-fix” or “why this doesn’t work” questions.

2. Advanced State Management
✅ Local vs Global State Strategy

Lifting state vs context vs external store

When not to use Context

Derived state anti-patterns

✅ Redux / Modern Alternatives

Redux Toolkit (RTK) – must know

createSlice, createAsyncThunk

RTK Query caching & invalidation

Zustand / Jotai vs Redux (trade-offs)

👉 Interviewers want decision-making, not tool worship.

3. Performance Optimization (Very Important ❗)
✅ Rendering Performance

React.memo

useMemo pitfalls

useCallback dependency traps

Avoiding prop drilling optimally

✅ List & UI Performance

Windowing / virtualization (react-window)

Large forms optimization

Controlled vs uncontrolled inputs

✅ Browser Performance

Code splitting (lazy, Suspense)

Dynamic imports

Memoization boundaries

👉 Be ready to debug a slow app verbally.

4. React 18 & Concurrent Features
✅ Must-Know Topics

Concurrent rendering

startTransition

useTransition

useDeferredValue

Strict Mode double rendering (why it happens)

👉 Senior interviews love React 18 questions.

5. Architecture & Design Patterns (Key Differentiator)
✅ Component Design

Smart vs Dumb components

Container / Presentation pattern

Compound components

Controlled vs uncontrolled components

Headless components

✅ Folder & Code Structure

Feature-first vs layer-first structure

Scalable folder architecture

Avoiding monolith components

👉 Expect: “How would you design this app?”

6. Data Fetching & Side Effects
✅ APIs & Networking

Fetch vs Axios trade-offs

Error handling strategies

Retry / cancel / debounce

Request deduplication

✅ React Query / TanStack Query

Cache lifecycle

Stale-while-revalidate

Query invalidation

Optimistic updates

7. Testing Strategy (Senior-Level Expectation)
✅ Testing Pyramid

Unit vs Integration vs E2E

What NOT to unit test

✅ Tools

React Testing Library (RTL)

Jest / Vitest

MSW for API mocking

Snapshot testing (why to avoid often)

👉 Interviewers care more about testing philosophy than syntax.

8. Forms & Validation
✅ Advanced Forms

Controlled vs uncontrolled forms

React Hook Form vs Formik

Validation strategies

Performance pitfalls in large forms

9. Security & Best Practices
✅ Security

XSS in React (dangerouslySetInnerHTML)

CSRF handling

Token storage strategies (cookies vs localStorage)

Preventing injection via JSX

10. SSR, SSG & Frameworks
✅ Next.js / SSR

CSR vs SSR vs SSG vs ISR

Hydration issues

App Router vs Pages Router

Server Components (React 19 direction)

👉 Modern seniors are expected to know this.

11. Micro-Frontends & Scaling
✅ Architecture Topics

Module Federation

Monorepos (Nx, Turborepo)

Shared component libraries

Versioning & deployment strategies

12. TypeScript with React (Highly Important)
✅ TS Mastery

Typing props & children

React.FC – why not always

Generics in components & hooks

Discriminated unions

Typing external APIs

13. Real-World Debugging Questions

Be prepared for:

Infinite re-render bugs

Dependency array mistakes

Memory leaks

Race conditions in effects

Stale closures

👉 These are common senior interview traps.

14. Leadership & System Thinking (Final Filter)
✅ Soft + Technical

Code reviews best practices

How you mentor juniors

Handling tech debt

Trade-off decisions

Migrating legacy code