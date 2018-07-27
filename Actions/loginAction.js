export  function login(userID)
{
  return {
    type:"login",
    payload:true,
    userID
  }
}
export  function logout()
{
  return {
    type:"logout",
    payload:false,
  }
}
