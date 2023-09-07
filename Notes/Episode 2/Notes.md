- npm is not node package manager.
- package.json is configuration for npm.
- npm install -D parcel (-D is for dev dependency).
- "parcel": "^2.9.3"
- ^ -> (caret) If we have caret in our package.json file then, it will upgrade minor version itself.
- ~ ->(tilde) If we have tilde in our package.json file then, it will upgrade major version itself.
- It is safe to use ^(caret).

- package-lock.json --> Keeps the track of exact version of every dependency installed in the system.
- Transitive Dependency -> Dependencies are having their further dependencies.
Ex :- we have added parcel as dependency further more parcel is also having some dependency of it's own and those dependent project can have again their own dependency.


- How to import react in your html code.
```javascript
<script src="./ReactApp.js"> // this line will not work because normal Browser scripts cannot have imports or exports
// So, for importing react code we have to write it like this 
<script type="module" src="your-module.js"></script>

```
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing - Consistent hashing is a technique used in distributed computing and data storage systems to efficiently distribute and balance the load of data across multiple nodes or servers while maintaining stability when nodes are added or removed from the system.
- Code Splitting
- Differential Bundling - to support older browsers and mobile browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different build for development and prod 
- {npx parcel index.html} for dev environment
- {npx parcel build index.html} for prod environment and we have to remove main (entry point) of our app from package.json
- When ever we write parcel index.html or parcel build index.html parcel automatically compress all the code and store inside dist folder.

