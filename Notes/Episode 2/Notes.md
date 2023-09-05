```javascript
npm is not node package manager.
package.json is configuration for npm.

npm install -D parcel (-D is for dev dependency).
In this episode we are using parcel woth react.

"parcel": "^2.9.3"
^ -> (caret) If we have caret in our package.json file then, it will upgrade minor version itself.

~ ->(tilde) If we have tilde in our package.json file then, it will upgrade major version itself.

It is safe to use ^(caret).

package-lock.json --> Keeps the track of exact version of every dependency installed in the system.

Transitive Dependency -> Dependencies are having their further dependencies.
Ex :- we have added parcel as dependency further more parcel is also having some dependency of it's own and those dependent project can have again their own dependency.

<script src="./ReactApp.js"> // this line will not work because normal Browser scripts cannot have imports or exports
So, for importing react code we have to write it like this <script type="module" src="your-module.js"></script>


```
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds