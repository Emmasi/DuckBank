const showList = () => {
  backgrundimg.classList.add("hide");
  newCustomer.classList.add("hide");
  loggainContainer.classList.add("hide");
  if (allCustomersContainer.classList.contains("hide")) {
    allCustomersContainer.classList.remove("hide");
  } else {
    allCustomersContainer.classList.add("hide");
    backgrundimg.classList.remove("hide");
  }
};
const showAddForm = () => {
  backgrundimg.classList.add("hide");
  allCustomersContainer.classList.add("hide");
  loggainContainer.classList.add("hide");
  if (newCustomer.classList.contains("hide")) {
    newCustomer.classList.remove("hide");
  } else {
    newCustomer.classList.add("hide");
    backgrundimg.classList.remove("hide");
  }
};
const showcreateAdmin = () => {
  backgrundimg.classList.add("hide");
  if (newAdminlogin.classList.contains("hide")) {
    newAdminlogin.classList.remove("hide");
  } else {
    newAdminlogin.classList.add("hide");
  }
};
const loggainForm = () => {
  backgrundimg.classList.add("hide");
  newCustomer.classList.add("hide");
  allCustomersContainer.classList.add("hide");
  if (loggainContainer.classList.contains("hide")) {
    loggainContainer.classList.remove("hide");
  } else {
    loggainContainer.classList.add("hide");
    backgrundimg.classList.remove("hide");
  }
};

noneStyleBtn.addEventListener("click", loggainForm);
customerlistBtn.addEventListener("click", showList);
addNewCustomerBtn.addEventListener("click", showAddForm);
createAdminBtn.addEventListener("click", showcreateAdmin);
