import { useState } from "react";
function App(){
  const[quantity,setQuantity]=useState(1);
  return(
    <div>
      <h1>My Shopping Cart</h1>
      <h2>Product :- Notebook</h2>
      <p>Quantity:{quantity}</p>
      <button onClick={()=>setQuantity(quantity+1)}>
      Add one
      </button>
      <br></br>
      <button onClick={()=>setQuantity(quantity-1)}>
      Remove One
      </button>
    </div>

  );
}
export default App;