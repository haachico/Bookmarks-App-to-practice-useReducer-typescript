import React from "react";
import { useBookmarksContext } from "../useContext/BookmarkContext";

type BookmarkListType = {
  bookmarks: {
    id: string;
    title: string;
    url: string;
  }[];
};

const BookmarkList: React.FC<BookmarkListType> = ({ bookmarks }) => {
  const { state, dispatch } = useBookmarksContext();
  return (
    <div>
      {bookmarks.length > 0 ? (
        <div className="list">
          {bookmarks.map((
            { id, title, url } // Fix the syntax here
          ) => (
            <div className="bookmark" key={id}>
              <h4
                style={{ color: state.theme === "light" ? "black" : "black" }}
              >
                {title}
              </h4>
              <p>
                <a href={url} target="_blank" rel="noreferrer">
                  {url}
                </a>
              </p>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_BOOKMARK", payload: id })
                }
               className="remove--btn">
                x
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h4>No bookmarks added yet.</h4>
      )}
    </div>
  );
};

export default BookmarkList;
