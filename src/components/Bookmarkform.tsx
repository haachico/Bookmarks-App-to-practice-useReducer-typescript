import React, { useState } from "react";
import { useBookmarksContext } from "../useContext/BookmarkContext";
import { v4 as uuid } from "uuid";

type BookmarkType = {
  title: string;
  url: string;
};

const BookmarkForm = () => {
  const [bookmark, setBookmark] = useState<BookmarkType>({
    title: "",
    url: ""
  });
  const { dispatch } = useBookmarksContext();

  const handleChange = (e: any): void => {
    const { name, value } = e.target;

    setBookmark((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleAddBookmark = (url: string, title: string): void => {
    if (!url || !title) return;

    const newBookmark = {
      id: uuid(),
      title: title,
      url: url
    };

    dispatch({ type: "ADD_BOOKMARK", payload: newBookmark });

    setBookmark({
      title: "",
      url: ""
    });
  };

  return (
    <div>
      <div className="form">
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          value={bookmark.title}
          onChange={handleChange}
        />
        <label htmlFor="url"> URL: </label>
        <input
          id="url"
          name="url"
          value={bookmark.url}
          onChange={handleChange}
        />
        <button onClick={() => handleAddBookmark(bookmark.title, bookmark.url)}>
          Add
        </button>
      </div>
    </div>
  );
};

export default BookmarkForm;
