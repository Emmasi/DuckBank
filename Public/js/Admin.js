   // <a href="/profile.html?account=${customer._id}"></a> 
loginForm.addEventListener('submit', async (e) => { 
  e.preventDefault();
  const loginname= document.querySelector("#loginname").value
  const loginpass = document.querySelector("#loginpass").value

  const res = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      loginName: loginname,
      loginPass: loginpass,
    })
  });
  const data = await res.json();
});
const getUser = async () => { 
  const res = await fetch('/user');
  const user = await res.json();

  console.log(user);
}

getUser();

const customerAccount = (customer) => {
  headingProfile.innerHTML=`Välkommen ${customer.name}`
  profileContainer.innerHTML = `<p>${customer.name} <br> Kontonummer ${customer._id.slice(0, 10)} <br> Saldo ${customer.amount} kr</p>`;
}