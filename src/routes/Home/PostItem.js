export default function PostItem(props) {
  const { post, handleRemove, handleEdit, handleOnClick } = props;

  return (
    <div className="post-item" onClick={() => handleOnClick(post?.id)}>
      <p>{post?.title}</p>
      <p>{post?.content}</p>
      <div className="item-action">
        <button
          className="btn btn-edit"
          onClick={(e) => {
            e.stopPropagation();
            handleEdit(post?.id);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-remove"
          onClick={(e) => {
            e.stopPropagation();
            handleRemove(post?.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
