import React from "react";
import BlogPost from './BlogPost';
import {getAllPosts} from '../actions'


class AllBlogPosts  extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
            errors:null
        };
    }
    
    componentDidMount(){
      getAllPosts()
      .then(res => this.setState({posts:res.data.posts}))
      .catch(err => this.setState({errors:err.data.error}));
     }

    render() {
      const posts=this.state.posts.slice(0);
      if(this.state.posts.length===0) {
           let message='There\'s no posts';
           return (<section>{message}</section>);
        }
      else if(this.state.errors) {
         let message='Something unexpected happend.';
         return (
             <section>{message}</section>);    
      }
      else return (
          <section>
              {posts.map((post,index)=>{
               return (
                   <BlogPost
                        id={posts[posts.length-1-index]._id}
                        key= {posts[posts.length-1-index]._id} 
                        title={posts[posts.length-1-index].title} 
                        text={posts[posts.length-1-index].text}/>
                )})}
          </section>
      );}
    
};

export default AllBlogPosts;