<script>
console.log("🔐 Auth system loaded");

window.getUser = function () {
  return JSON.parse(localStorage.getItem("user"));
};

window.requireAuth = function () {
  const user = getUser();
  if (!user) {
    window.location = "index.html";
    return null;
  }
  return user;
};

window.logoutUser = function () {
  localStorage.removeItem("user");
  window.location = "index.html";
};
</script>
