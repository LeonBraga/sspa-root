import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

console.log('Meu Location: ', location.pathname);
debugger;
registerApplication({
  name: "mgeweb",
  app: () => System.import("mgeweb"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});