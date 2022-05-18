# Introduction
An easy to use router for vanilla JavaScript SPAs.

# Installing

`npm i xo-router`

# Using

```js
window.router = new Router({
  routes: {
    "/": "home",
    "/settings": "settings"
  }
})
  .listen()
  .on("route", (e) => {
    // e.detail.route
  });
```
