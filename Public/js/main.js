const bankcustomerApi = async () => { 
    const res = await fetch('/api/customers');
    const data = await res.json();
    listCostomers(data)
    entries=data
}
bankcustomerApi()

const getProfileApi = async (id) => {
    const res = await fetch(`/api/accounts/${id}`);
    const data = await res.json();
    customerAccount(data);
    console.log(data)
    logginlink(data)
  }
getProfileApi(customerId);
logginlink()