import React, { Component } from "react";
import PropTypes from 'prop-types';
import {Form } from 'react-bootstrap';

class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      name:'',
      value:''
    };
    this.props=props;
  }
    
  componentDidMount() {
    if(this.props.value.length>0) {
        this.setState({name:this.props.name,value: this.props.value },
                      ()=>this.props.setValues(this.state.name,this.state.value));
        }     
  }
    
  onChange = (e) => {
      this.setState({name:e.target.name,value: e.target.value },
                    ()=>this.props.setValues(this.state.name,this.state.value));
  }
  
  render() { 
     return (
        <Form.Group>
            <Form.Label
                    htmlFor={this.props.name}>
                    {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
            </Form.Label>
            <Form.Control 
                    as={this.props.as}
                    id={this.props.name}
                    name={this.props.name}
                    rows={this.props.rows}
                    required type={this.props.type}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.value}
                    onChange={this.onChange}/>
       </Form.Group>     
  )};

};

Input.propTypes={
    name:PropTypes.string,
    type:PropTypes.string,
    as:PropTypes.string,
    rows:PropTypes.string,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    onChange:PropTypes.func,    
}

export default Input;
