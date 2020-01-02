import React, { Component } from "react";
import Input from './Input';
import {addPost,updatePost} from '../actions'
import {Form,Button } from 'react-bootstrap';
import {styles} from './styles';
import PropTypes from 'prop-types';


class BlogForm extends Component {

  constructor(props) {
    super();
    this.state = {
      title: '',
      text: '',
      error:''
    };
    this.props=props;
  }

  setValues=(name,value)=>{
     this.setState({[name]:value});
  }

  onSubmit = (e) => {
      e.preventDefault();
      const { title, text } = this.state;
      if(this.props.for_==='add') {
           addPost(title,text)
          .then(res => window.location = '/')
          .catch(err => this.setState({error: err.response.data.error}));
      }
      else if(this.props.for_==='edit') {
          updatePost(this.props.id,title,text)
          .then(res => window.location = '/')
          .catch(err => this.setState({error: err.response.data.error}));
      }
    }

  render() {
    let formStyle=styles.Form;
    if(this.props.for_==='edit') formStyle =styles.EditForm;
    return (  
        <Form onSubmit={this.onSubmit} style={formStyle}>
            <Input
                  as='input'
                  name='title'
                  type='text'
                  value={this.props.title}
                  placeholder='Enter a title'
                  setValues={this.setValues.bind(this)}/>

            <Input
                 as='textarea'
                 rows='6'
                 name='text'
                 type='text'
                 value={this.props.text}
                 placeholder='Enter text'
                 setValues={this.setValues.bind(this)}/>
                 
            <Form.Text style={styles.ErrorMsg}>
               {this.state.error}
            </Form.Text>  
                 
            <Button 
                 style={styles.Button}
                 variant='dark'
                 type='submit'>{this.props.btnName}</Button>
       </Form>
    );
  }
};

BlogForm.propTypes={
    id:PropTypes.string,
    for_:PropTypes.string,
    title:PropTypes.string,
    text:PropTypes.string,
    btnName:PropTypes.string
}

export default BlogForm;
