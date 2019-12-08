export default function (context) {
  console.log("[Middleware] Authentication");
  if (!context.store.getters["user/isAuthenticated"]) {
    context.redirect("/admin/login");
  }
}
