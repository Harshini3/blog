import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/iStock_000039291924_Medium.jpg" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">This Blog is all about the fitness,diet,mental heath related topics posted during this tough time of pandemic</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar