import React from "react";
import { Container,Button } from 'react-bootstrap';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/fontawesome-free-solid'


const  BlogPostMethods =(props) => {
   return (
        <Container>
                <Button 
                     variant='light'
                     onClick={props.onClickEdit}>
                    <FontAwesomeIcon icon={ faEdit } />
                </Button>
                <Button 
                    onClick={props.onClickDelete}
                    style={{marginLeft:'15px'}} variant='light'><FontAwesomeIcon icon={ faTrash } />
                </Button>
        </Container>
   );
};

export default BlogPostMethods;

