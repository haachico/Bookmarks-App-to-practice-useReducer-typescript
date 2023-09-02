import "./styles.css";
import Header from "./components/Header";
import BookmarkForm from "./components/Bookmarkform";
import BookmarkList from "./components/BookmarkList";
import { useBookmarksContext } from "./useContext/BookmarkContext";

export default function App() {
  const { state } = useBookmarksContext();
  return (
    <div className="App">
      <div
        className={`main ${
          state.theme === "light" ? "light--mode" : "dark--mode"
        }`}
      >
        <Header title={"Bookmarks"} />
        <BookmarkForm />
        <BookmarkList bookmarks={state.bookmarks} />
      </div>
    </div>
  );
}
