import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from "react-bootstrap/FormControl";

export class MyNavbar extends React.Component {
    constructor(props){
        super(props);
    }
    setQuery = (event) => {
        const cambiaQuery = this.props.cambiaQuery;
        const newQuery = event.target.value; 
        console.log("newquery ", newQuery)
        cambiaQuery(newQuery);
    }
    render() {
        const query = this.props.query;
        const state = this.state;
        
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">EPIBOOK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text"                placeholder="Cerca" className="mr-sm-2" 
                    value={query} onChange={this.setQuery}
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}