
import Header from './Header';
import React, { useState }from 'react'
import { useHistory } from 'react-router-dom'

function AddProduct() {

  const history = useHistory();
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  async function Addproduct() {
    let item = {name,file,price,description}//converted to object
    console.warn(item);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);

    let result = await fetch("http://127.0.0.1:8000/api/addProduct", {
          method:'POST',
          body:formData      
      });
         alert('Data has been saved successfully')
         history.push('/')
        // result = await result.json()
        // localStorage.setItem("user-info", JSON.stringify(result))
        // history.push("/add")
  }

  return (
    <div>
      <Header />
      <h1>Add Product</h1>
      <div className="col-sm-6 offset-sm-3">
      <br />
      <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" placeholder='name'/><br />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} className="form-control" placeholder='file'/><br />
      <input type="text" onChange={(e)=>setPrice(e.target.value)} className="form-control" placeholder='price'/><br />
      <input type="text" onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder='description'/><br />
      <button onClick={Addproduct} className='btn btn-primary'>Add Product</button>
      </div>
    </div>
  )
}
export default AddProduct;