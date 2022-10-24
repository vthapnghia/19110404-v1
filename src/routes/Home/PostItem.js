export default function PostItem(props) {
  const { post, handleRemove, handleEdit, onClick} = props;

  return (
    <div className="post-item" onClick={() => onClick(post?.id)}>
      <p>{post?.title}</p>
      <p>{post?.content}</p>
      <div className="item-action">
        <button className="btn btn-edit" onClick={() => handleEdit(post?.id)}>Edit</button>
        <button className="btn btn-remove" onClick={() => handleRemove(post?.id)}>Remove</button>
      </div>
    </div>
  );
}
