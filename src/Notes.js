

const AddPost = (props) => {
    return <form id='add-post' onSubmit={(event) => {
      event.preventDefault();
      props.handleNewPost({username: event.target[0].value, text: event.target[1].value, datePosted: new Date()});
      document.getElementById('add-post').reset()
    }} style={{display: 'flex', flexDirection: 'column'}}>
      <label htmlFor='user'>User</label>
      <input id='user'></input>
      <label htmlFor='text'>Text</label>
      <input id='text'></input>
      <button type='submit'>Submit</button>
    </form>
  }
<AddPost handleNewPost={(post) => setPosts([...posts, post])}/>
{posts.map((post) => 
  <Post
    username={post.username}
    content={post.text}
    datePosted={post.datePosted}
  />
  )
}