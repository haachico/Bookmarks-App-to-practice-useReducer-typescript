import { useContext } from "react";
import { createContext, ReactNode, useReducer } from "react";

//defining the state type
export type AppState = {
  bookmarks: {
    id: string;
    title: string;
    url: string;
  }[];
  theme: string;
};

//Actions type
type AddBookmarkAction = {
  type: "ADD_BOOKMARK";
  payload: {
    id: string;
    title: string;
    url: string;
  };
};

type RemoveBookmarkAction = {
  type: "REMOVE_BOOKMARK";
  payload: string;
};

type ToggleThemeType = {
  type: "TOGGLE_THEME";
};

type BookmarkAction =
  | AddBookmarkAction
  | RemoveBookmarkAction
  | ToggleThemeType;

//In context type, if used with useReducer only, always state and dispatch will come
type BookmarkContextType = {
  state: AppState;
  dispatch: (action: BookmarkAction) => void;
};

export const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

const initialState: AppState = {
  bookmarks: [],
  theme: "light"
};

const BookmarkReducer = (state: AppState, action: BookmarkAction): AppState => {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };

    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        )
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    default:
      return state;
  }
};

export const useBookmarksContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw Error(
      "useBookmarksContext must be used within BookmarkContextProvider"
    );
  }
  return context;
};

export const BookmarkContextProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(BookmarkReducer, initialState);

  return (
    <div>
      <BookmarkContext.Provider value={{ state, dispatch }}>
        {children}
      </BookmarkContext.Provider>
    </div>
  );
};
