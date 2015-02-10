# React-Bootstrap
A very simple example of how to include Bootstrap in your React application, if you are using node/browserify for your build process (and you probably should if not), and how to test the components you build with them using Jest.

The key to make it work is to declare jQuery in the window object, and just after that require bootstrap (require('bootstrap') will load all of Bootstrap's jQuery plugins onto the jQuery object. The bootstrap module itself does not export anything):

```javascript
window.jQuery = require('jquery');
var bootstrap = require('bootstrap');
```

After that you can build your application with browserify or test it with jester.
