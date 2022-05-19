
//Ändra belopp

const editaAmount = async (e) => { 
    const inputAdd = document.querySelector(`#add-${e.target.dataset.custid}`)
    const inputReduce = document.querySelector(`#reduce-${e.target.dataset.custid}`)
    const editPostItem = entries.find(({ _id }) => _id === e.target.dataset.custid);
    const amountToChange = parseInt(inputAdd.value) - parseInt(inputReduce.value);
    const currentAmount = editPostItem.amount;
    const finalAmount= currentAmount + amountToChange;

    if(finalAmount<0){ 
        alert('Du kan inte ta ut mer pengar än du har på kontot.')
        return;
    }

    const Url = (`/api/customers/${editPostItem._id}`); 
    await fetch(Url, {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: finalAmount,
      })
    });
    bankcustomerApi()
}