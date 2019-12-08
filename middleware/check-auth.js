export default function (context) {
  console.log("[Middleware] Check Auth");
  context.store.dispatch("user/initAuth", context.req);
}
