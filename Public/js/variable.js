const urlParams = new URLSearchParams(location.search);
const customerId = urlParams.get('account');
const profileContainer = document.querySelector('#profileContainer');
const headingProfile = document.querySelector("#headingProfile")

//container
const allCustomersList = document.querySelector("#allCustomersList")
const postForm = document.querySelector("#postForm")
const newCustomer= document.querySelector("#newCustomer")
const allCustomersContainer = document.querySelector("#allCustomersContainer")
const backgrundimg = document.querySelector("#backgrundimg")
const loggainContainer = document.querySelector("#loggainContainer")
const newAdminlogin = document.querySelector("#newAdminlogin")

const FORM_MODES = {
    CREATE: 'create',
    EDIT: 'edit'
}
  let formMode = FORM_MODES.CREATE;
  let editPostItem = null;
  let entries = [];

//Knapp
const customerlistBtn =document.querySelector("#customerlistBtn")
const addNewCustomerBtn = document.querySelector("#addNewCustomerBtn")
const noneStyleBtn = document.querySelector("#noneStyleBtn")
const createAdminBtn =document.querySelector("#createAdminBtn")

//loggin
const loginName = document.querySelector('#loginname');
const loginPass = document.querySelector('#loginpass');
const loginForm = document.querySelector('#login');
