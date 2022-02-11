import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
//import reactDom from "react-dom";
import { Link, useHistory } from "react-router-dom";

function Header() {

  let user = JSON.parse(localStorage.getItem('user-info'))
  const history = useHistory();

  function LogOut()
  {
    localStorage.clear();
    history.push('/register')
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-commerce Portal </Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper"> 
        {
            localStorage.getItem("user-info") ? 
                <>
                  <Link to="/">Product List</Link>
                  <Link to="/add">Add Product</Link>
                  <Link to="/update">Update Products</Link>
                  <Link to="/search">Search Products</Link>
                </>
                :
                <>
                 <Link to="/login"> Login </Link>
                 <Link to="/register">Register</Link>
                </>
         }

        </Nav>
             {localStorage.getItem("user-info") ? 
        <Nav className="me-auto"> 
            <NavDropdown title={user.name}>
          <NavDropdown.Item  onClick={LogOut}>Logout</NavDropdown.Item>
         </NavDropdown>
        </Nav>
        :null}
      </Navbar>
    </div>
  );
}
export default Header;
