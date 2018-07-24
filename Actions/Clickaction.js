export  function onclick()
{
  console.log("here");
  return {
    type:"onclick",
    payload:true,
  }
}
export  function offclick()
{
  return {
    type:"offclick",
    payload:false,
  }
}
