function validate()
{
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  if(username == 'admin' && password =='letmein')
  {
    alert('Welcome')
    return false

  }
  else
  {
    alert('Access Denied!!!!')
  }
}