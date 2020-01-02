import axios from 'axios';

export const createUser=(name,email)=> axios.post('http://127.0.0.1:3001/sign-up',{name:name,email:email});

export const getAllPosts=()=> axios.get('http://127.0.0.1:3001');

export const addPost=(title,text)=> axios.post('http://127.0.0.1:3001/blog-post',{title:title,text:text});   

export const deletePost=id=> {
    return  axios
      .delete('http://127.0.0.1:3001/delele-blog-post', {
          data:
            {id:id}
      });
};

export const updatePost=(id,title,text)=> {
     return axios
          .post('http://127.0.0.1:3001/update-blog-post',{
              id:id,
              updated:{
                  title:title,text:text
              }
     })
};

