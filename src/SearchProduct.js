//import React from 'react';
import Header from './Header';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
//import { Button } from 'bootstrap';
//import { Link } from 'react-router-dom';

function SearchProduct() 
{

    const [data, setData] = useState([]);

    async function search(key)
    {
     
      let result = await fetch("http://127.0.0.1:8000/api/search/" + key);//when you are getting an api the result is usually a promise so youneed to await
      result = await result.json(); //if something returns a promise you await
      console.warn(result)
      setData(result)
    }
  return (
  <div>
  <Header />
     <div className="col-sm-6 offset-sm-3">
      <h1>Search Product</h1>
      <input type="text" onChange={(e)=>search(e.target.value)}className="form-control" placeholder="Search Product"/>
      <Table >
      <tbody>
      <tr>
         <td>Id</td>
         <td>Name</td>
         <td>Price</td>
         <td>Description</td>
         <td>Image</td>
      </tr>
      {
          data.map((item)=>
           <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td> <img style={{width:100}}src={"http://localhost:8000/" +item.file_path}/></td>
            </tr>
          )
      }
      </tbody>
    </Table>     
     </div>
  </div>
  )
 }


export default SearchProduct;
