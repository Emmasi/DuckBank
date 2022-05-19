newAdminlogin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputnewName = document.querySelector("#newName").value;
  const inputnewPass = document.querySelector("#newPassword").value;

  await fetch("/api/newAdmin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inputnewName,
      password: inputnewPass,
    }),
  });
  newAdminlogin.reset();
});
