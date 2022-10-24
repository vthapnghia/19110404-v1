import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";

export default function Post(props) {
  const param = useParams();
  const { listPost, listComment, addComment } = useContext(StoreContext);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [textComment, setTextComment] = useState([]);
  useEffect(() => {
    if (param.id) {
      const item = listPost.find((element) => {
        return element.id === param.id;
      });
      if (item) {
        setPost(item);
      }
    }
  }, [param, listPost]);

  useEffect(() => {
    if (param.id) {
      setComments(
        listComment.filter((element) => {
          return element.postID === param.id;
        })
      );
    }
  }, [param, listComment]);

  const handleComment = () => {
    addComment(param.id, textComment);
    setTextComment("");
  };
  return (
    <div className="post">
      <h1 className="title post-title">Bài viết</h1>
      <div className="content post-content">
        <h3>{post?.title}</h3>
        <p style={{padding: '10px 32px'}}>{post?.content}</p>
      </div>
      <div className="new-comment">
        <div className="group group-textarea">
          <textarea
            className="input-textarea"
            placeholder=" "
            required
            onChange={(e) => setTextComment(e.target.value)}
            value={textComment}
            style={{ height: "60px" }}
          />
          <label>Bình luận</label>
        </div>
        <button className="btn btn-comment" onClick={handleComment}>
          Bình luận
        </button>
      </div>
      <div className="post-comment">
        {comments.map((element, index) => {
          return <>
            <p key={index} styl={{display: 'block', padding: '10px'}}>{element.content}</p>
          </>;
        })}
      </div>
    </div>
  );
}
