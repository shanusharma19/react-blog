import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';
import { useHistory} from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const history = useHistory();

  const handleDeletePost = postId => {
    firestore
      .collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch(err => {
        console.log(err);
      });
      
    history.push("/"); 
  };

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <span className="action-icons">
      <button className="create-post-btn" onClick={() => handleDeletePost(postId)}>Delete</button> 
      </span>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
