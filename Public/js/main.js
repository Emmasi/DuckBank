const bankcustomerApi = async () => { 
    const res = await fetch('/api/customers');
    const data = await res.json();
    listCostomers(data)
    entries=data
}
bankcustomerApi()