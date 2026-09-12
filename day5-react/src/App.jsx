function App(){
  const products=[
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mouse",price:800},
    {id:3,name:"Keyboard",price:1200},
    {id:4,name:"Headphones",price:2000}
  ];
  return(
    <div>
      <h1>My Electronic Products</h1>
      {products.map((product)=>
      (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price:{product.price}Rs</p>

          {product.price >= 2000 ?
          (
            <p>Type:Expensive</p>
          ):(
            <p>Type:Affordable</p>
            
          )}
          </div>
      ))}
    </div>
  );
}
export default App;