import React from 'react';
import AllBlogPosts from './AllBlogPosts';
import SignUpForm from './SignUpForm';
import BlogForm from './BlogForm';
import {Route,Switch } from "react-router-dom";
import {Row,Col } from 'react-bootstrap';
import {styles} from './styles';

const Main=(props)=> {
    return (
        <Row style={styles.Main}>
            <Col>
            <main>
                <Switch>
                      <Route exact path='/'
                          render={() => <AllBlogPosts/>}/>
                       <Route path='/blog-post'
                          render={(props) => <BlogForm {...props} title='' text='' for_='add' btnName='Add'/>}/>
                       <Route path='/sign-up'
                          render={() => <SignUpForm/>}/>
                  </Switch>
            </main>
          </Col>
       </Row>
    );
};

export default Main;