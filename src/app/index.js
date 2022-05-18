import { Router } from "../router";

window.router = new Router({
  type: "history",
  routes: {
    "/": "home",
    "/about": "about",
    "/products": "products"
  }
})
  .listen()
  .on("route", (e) => {
    console.log("Route active:", e.detail.route, "URL: ", e.detail.url);

    document.getElementById("route").innerHTML = e.detail.route;
  });
