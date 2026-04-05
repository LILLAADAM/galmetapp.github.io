<script>
console.log("🔐 Auth system loaded");

// ✅ SAFE GET USER
window.getUser = function () {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    console.error("User parse error", e);
    return null;
  }
};

// ✅ REQUIRE AUTH (NO CRASH + AUTO FIX UID)
window.requireAuth = function () {
  const user = window.getUser();

  if (!user) {
    console.log("❌ Not logged in");
    window.location.href = "index.html";
    return null;
  }

  // ✅ AUTO FIX UID (IMPORTANT)
  if (!user.uid && user.userId) {
    user.uid = user.userId.toString();
    localStorage.setItem("user", JSON.stringify(user));
  }

  if (!user.uid) {
    console.log("❌ Invalid user ID");
    window.location.href = "index.html";
    return null;
  }

  console.log("✅ Auth OK:", user.uid);

  return user;
};

// ✅ LOGOUT
window.logoutUser = function () {
  localStorage.removeItem("user");
  window.location.href = "index.html";
};
</script>
