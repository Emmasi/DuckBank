const check = async ()=>{
  const res = await fetch('/api/loggedin');
  const data = await res.json();
  console.log(data);

  if(data.user){
    loggainContainer.classList.add('hide')
    startContainer.classList.remove('hide')
    backgrundimg.classList.remove('hide')
  }else{
    console.log('Not logged in');
  }
}
check()
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
}
getUser();
