postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputName = document.querySelector("#name").value;
  const inputCash = document.querySelector("#amount").value;
  const useUrl =
    formMode === FORM_MODES.CREATE
      ? "/api/create"
      : `/api/create/${editPostItem._id}`;

  await fetch(useUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inputName,
      amount: inputCash,
    }),
  });
  postForm.reset();
  bankcustomerApi();
});
