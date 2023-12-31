import React from 'react'
import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';



export default function PostsList() {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('')

function bodyChangeHandler(event) {
  setEnteredBody(event.target.value);
}
function authorChangeHandler (event) {
  setEnteredAuthor(event.target.value)
}
  
  return (
    <>
    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
    <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Rohan" body="Reactjs is awesome!" />
    </ul>
    </>
  )
}
