import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../utils/store";

export default function Action(props) {
  const { listPost, addPost, editPost } = useContext(StoreContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const param = useParams();

  const handleAdd = () => {
    const id = (Math.random() + 1).toString(36).substring(7);
    addPost({ id, title, content });
    navigate("/");
  };

  const handleEdit = () => {
    editPost({ id: param.id, title, content });
    navigate("/");
  };

  useEffect(() => {
    if (param.id) {
      const post = listPost.find((element) => {
        return element.id === param.id;
      });
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    }
  }, [param, listPost]);

  return (
    <div className="action">
      <h1 className="title action-title">
        {param.id ? "Chỉnh sửa bài viết" : "Thêm bài viết"}
      </h1>
      <div className="content action-content">
        <div className="group group-text">
          <input
            type="text"
            className="input-text"
            placeholder=" "
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label>Tiêu đề</label>
        </div>
        <div className="group group-textarea">
          <textarea
            className="input-textarea"
            placeholder=" "
            required
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <label>Nội dung</label>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {param.id ? (
          <button className="btn btn-add" onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <button className="btn btn-add" onClick={handleAdd}>
            Add
          </button>
        )}
      </div>
    </div>
  );
}
