import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PostItem from "./PostItem";
import { StoreContext } from "../../utils/store";

export default function Home() {
  const { listPost, removePost } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    const url = `/edit-post/${id}`;
    navigate(url);
  };

  const handleAdd = () => {
    navigate("/add-post");
  };

  const handleOnClick = (id) => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="home">
      <h1 className="title home-title">Home</h1>
      {listPost.length > 0 && (
        <div style={{ display: "flex", padding: "10px" }}>
          <h3 style={{ width: "30%" }}>Tiêu đề</h3>
          <h3 style={{ width: "50%" }}>Nội dung</h3>
          <h3>Thao tác</h3>
        </div>
      )}
      <div className="content home-content">
        {listPost.length > 0 ? (
          listPost.map((item, index) => {
            return (
              <PostItem
                post={item}
                key={index}
                handleRemove={removePost}
                handleEdit={handleEdit}
                handleOnClick={handleOnClick}
              />
            );
          })
        ) : (
          <p className="no-data">Hiện tại không có bài post nào !!!</p>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn btn-add" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
