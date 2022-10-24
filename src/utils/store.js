import React, { useState } from "react";

export const StoreContext = React.createContext(null);

const posts = [
  { id: "adadda", title: "Thảo luận về key prop trong map()", content: "Đây là nội dung" },
];

const comments = [
  { id: "ssdsf", postID: "adadda", content: "Đây là bình luận" },
];
export default function StoreProvider({ children }) {
  const [listPost, setListPost] = useState(posts);
  const [listComment, setListCommnent] = useState(comments);

  const addPost = (item) => {
    setListPost([...listPost, item]);
  };

  const removePost = (id) => {
    setListPost(listPost.filter((element) => element.id !== id));
  };

  const addComment = (postID, content) => {
    const id = (Math.random() + 1).toString(36).substring(7);
    setListCommnent([...listComment, { id, postID, content }]);
  };

  const editPost = (item) => {
    const list = [...listPost];
    let updateList = list.map((element) => {
      if (element.id === item.id) {
        element.title = item.title;
        element.content = item.content;
      }
      return element;
    });
    setListPost(updateList);
  };

  const value = {
    listPost,
    addPost,
    editPost,
    removePost,
    listComment,
    addComment,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
