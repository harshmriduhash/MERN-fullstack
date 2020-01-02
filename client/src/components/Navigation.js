import React from 'react';
import {styles} from './styles';
import {Row,Col,Navbar,Nav,NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation=(props)=> {
    return (
    <Row style={styles.NavRow}>
        <Col>
            <Navbar>
                  <Navbar.Brand href='/'>My blog</Navbar.Brand>
                  <Navbar.Toggle/>    
                  <Navbar.Collapse style={styles.Nav}>
                    <Nav>
                       <LinkContainer to="/"  style={styles.LinkContainer}>
                          <NavItem active='true' >All Posts</NavItem>    
                       </LinkContainer> 
                       <LinkContainer to="/blog-post"  style={styles.LinkContainer}>
                        <NavItem >Add Blog Post</NavItem>
                       </LinkContainer>  
                       <LinkContainer to="/sign-up" exact style={styles.LinkContainer} >
                        <NavItem>Sign Up</NavItem>
                      </LinkContainer>
                    </Nav>
                  </Navbar.Collapse>
            </Navbar>
        </Col>
    </Row>
    );
};

export default Navigation;