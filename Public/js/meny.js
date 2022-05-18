
const showList = () =>{
    backgrundimg.classList.add('hidde')
    newCustomer.classList.add('hidde')
    loggainContainer.classList.add('hidde')
    if(allCustomersContainer.classList.contains('hidde')){
        allCustomersContainer.classList.remove('hidde')
    }else{
        allCustomersContainer.classList.add('hidde')
        backgrundimg.classList.remove('hidde')
    }
}
const showAddForm = () =>{
    console.log("hej")
    backgrundimg.classList.add('hidde')
    allCustomersContainer.classList.add('hidde')
    loggainContainer.classList.add('hidde')
    if(newCustomer.classList.contains('hidde')){
        newCustomer.classList.remove('hidde')
    }else{
        newCustomer.classList.add('hidde')
        backgrundimg.classList.remove('hidde')
    }
}
const showcreateAdmin =()=>{
    if(newAdminlogin.classList.contains('hidde')){
        newAdminlogin.classList.remove('hidde')
    }
}
const loggainForm =() =>{
    backgrundimg.classList.add('hidde')
    newCustomer.classList.add('hidde')
    allCustomersContainer.classList.add('hidde')
    if(loggainContainer.classList.contains('hidde')){
        loggainContainer.classList.remove('hidde')
    }else{
        loggainContainer.classList.add('hidde')
        backgrundimg.classList.remove('hidde')
    }
}

noneStyleBtn.addEventListener('click',loggainForm)
customerlistBtn.addEventListener('click',showList)
addNewCustomerBtn.addEventListener('click',showAddForm)
createAdminBtn.addEventListener('click',showcreateAdmin)