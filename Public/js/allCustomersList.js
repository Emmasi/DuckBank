// Tabort
const deleteTrash = async (e) => { 
    e.preventDefault()
    await fetch(`/api/customers/${e.currentTarget.dataset.custid}`, {
      method: 'DELETE'
    });
    bankcustomerApi()
  } 

//kundlista
const listCostomers = (customers) => { 
  allCustomersList.innerHTML = '';
    customers.forEach((customer)=>{
        const li = document.createElement('li')
        li.innerHTML=`
        <div class="customerInfo">
        <div class="customerName">
        <h3>${customer.name}</h3> 
        <a href="/api/customers/" class ="delete" data-custid="${customer._id}"><i class="fa fa-trash" id="fa-trash"aria-hidden="true"></i></a>
        </div>
        <div class="customerName">
        <h4>Kontonummer: ${customer._id.slice(0, 10)}</h4>
        <p>Belopp: ${customer.amount}:-</p>
        </div>
        <div>
          <div>
            <input type="number" id="add-${customer._id}" name="add" class="editInput" value="0">
            <label for="add" class="editLabel" >Insättning</label>
          </div>
          <div>
            <input type="number" id="reduce-${customer._id}" name="reduce" class="editInput" value="0">
            <label for="reduce" class="editLabel" >Uttag</label>
          </div>
          <button class="editBtn Btn" data-custid="${customer._id}">Change amount</button>
        </div>
        </div>`
        allCustomersList.appendChild(li)
    })

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach(btn => btn.addEventListener('click', deleteTrash));
    const editBtns = document.querySelectorAll('.editBtn');
    editBtns.forEach(btn => btn.addEventListener('click', editaAmount))
  }