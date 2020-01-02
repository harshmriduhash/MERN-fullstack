import React, { Component } from "react";
import Input from './Input';
import { Form,Button } from 'react-bootstrap';
import {styles} from './styles';
import {createUser} from '../actions'

class SignUpForm extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      error:''
    };
  }

 setValues=(name,value)=>{
    this.setState({[name]:value});
     
 }

 onSubmit = (e) => {
     e.preventDefault();
     const { name, email } = this.state;
     createUser(name, email)
     .then(res => window.location = '/')
     .catch(err =>this.setState({error:err.response.data.error}));
   }

  render() {

    return (
        <Form onSubmit={this.onSubmit} style={styles.Form}>   
            <Input 
                   as='input'
                   name='name'
                   type='text'
                   value=''
                   placeholder='Enter a name'
                   setValues={this.setValues.bind(this)}/>

            <Input
                   as='input'
                   name='email'
                   type='text'
                   value=''
                   placeholder='Enter an email'
                   setValues={this.setValues.bind(this)}
                 />
                 
             <Form.Text  style={styles.ErrorMsg} >
               {this.state.error}
            </Form.Text>
             
            <Button 
                   style={styles.Button}
                   variant='dark'
                   type='submit'>Sign Up</Button>
       </Form>

    );
  }

};

export default SignUpForm;
