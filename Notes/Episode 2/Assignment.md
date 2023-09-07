# 1. What is `NPM`?
npm is a software package manager.
It is the world's largest Software registry. The registry contains over 800,000 code packages.

# 2. What is Parcel/Webpack? Why do we need it?
Parcel and webpack are the bundlers used mostly for JavaScript or TypeScript code that helps you to minify, clean and make your code compact so that it becomes easier to send a request or recieve the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Parcel doesn't need any of the external configuration file to be specified after its installation to work.
Parcel is a bundler that can bundle JS files into one single js file which makes website load faster as compared to webpack. 
Parcel optimizes the whole app for production automatically. This includes tree-shaking and minifying your JavaScript, CSS and HTNL, resizing and optimizing images, content hashing, automatic code splitting, and many more.

# 3. What is .parcel-cache?
cache folder (.parcel-cache) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.