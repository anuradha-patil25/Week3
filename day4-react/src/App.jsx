import { useState } from "react";
function App(){
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
  const[msg,setMsg]=useState("");
  
  function login(event){
    event.preventDefault();
    if (name===""|| pass==="")
    {
      setMsg("Please enter username and password.");
    }
    else
      {
       setMsg("Welcome,"+name+"!");
      }
  }
  return(
    <div>
      <h1>Simple Login Form</h1>
      <form onSubmit={login}>
        <label>Username:</label>
        <br/>
        <input
        type="text"
        value={name}
        onChange={(event)=>setName(event.target.value)}
        />
        <br></br>
        <label>Password:</label>
        <br></br>
        <input
        type="password"
        value={pass}
        onChange={(event)=>setPass(event.target.value)}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
export default App;