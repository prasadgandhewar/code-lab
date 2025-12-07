1. How to create and publish npm package
    - create new project with index.js file
    - add components as per need and import them in index.js file
    - mention index.js as entry point in package.json
    - mention main, module, types and files entries in package json 
    - add vite or rollup config to add input file, ourput file and format and dependencies.
    - Build the application --> vite build
    - npm login 
    - npm publish 
    - for republish --> npm version patch && npm run build && npm publish 

2. How to implement micro-frontend architecture
    - We can do it using 
        1. module federation
        2. single-spa framework
        3. web component based
        4. iFrame based
    - STeps to implement using Module Federation 
    -  <section></section>

3. How to implement redux

4. Design patterns in react

5. Hooks in one liner

6. How to create story book 

7. How to implement RTL

8. How to implement Router

9. How to implement Tanstack query 

10. How to implement Portal

11. How to implement Encryption

12. How to implement Hashing + salt

13. How SSO works

14. Performance improvement techniques

15. Implementing security in frontend

16. Type of attacks 

17.Microservices architecture - Design patterns

18. How to implment ECS 

19. How to create cloudfront + S3

20. Hosting static website

21. Lambda + APi gateway setup 

22. Different type of caching 

23. How to implement pub-sub model

24. How to implement graphQL

25. How to create decorators

26. How to implement closure

27. Context vs redux
    1. Performance good in redux since context api re-render the consumers.
    2. Debugging better in redux.
    3. Support Middleware like redux-saga, thunk
    4. Centralized - redux.

29. Common leak patterns in JS:

    Global references — unintentionally storing large objects on window or module global.
    Closures holding large objects — e.g., a long-lived closure keeps a large array alive.
    Detached DOM nodes — DOM elements removed from document but still referenced in JS.
    Timers and intervals — setInterval or timers not cleared.
    Event listeners — not removed when element/component unmounts (especially on nodes removed).
    Caches without eviction — Map/array caches that grow unbounded (use WeakMap/WeakRef if needed).

    Prevention:

    Unsubscribe listeners and clear intervals in useEffect cleanup or componentWillUnmount.
    Use WeakMap/WeakSet for caches keyed by objects.
    Limit cache size; implement eviction (LRU).
    Avoid storing DOM nodes in long-lived JS structures.

30. How to create cookie on node server
    res.cookie('name', value)
    res.setHeader('Set-Cookie', "name=value") 

31. HOw to read cookie on node server
    const cookie = req.get('Cookie')    

32. How to set expiry for cookies
    set maxAge or expires property

33. What is secure and httpOnly cookie attribues
    secure - it will access over https 
    httpOnly - FE can not access that cookie.
    res.cookie('name', value, { httpOnly: true, secure: true, expires: date, maxAge: 5000, sameSite: 'strict'})

34. How to use session cookie
    use express-session package
    this will create new session cookie per browser/tab/session
    for writing - req.session.isLoggedIn = true
    for reading - req.session.isLoggedIn

35. How to create style design system

36