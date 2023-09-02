import React from "react";
import { useBookmarksContext } from "..//useContext/BookmarkContext";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { dispatch } = useBookmarksContext();

  return (
    <div className="header">
      <h1> Bookmarks</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Togggle theme
      </button>
    </div>
  );
};

export default Header;
