import { useState, useContext, createContext } from "react";

const SearchRecipeContext = createContext();

function SearchRecipeProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [currRecipeId, setCurrRecipeId] = useState();
  const [query, setQuery] = useState("");
  const [ingred1, setIngred1] = useState("");
  const [ingred2, setIngred2] = useState("");
  const [ingred3, setIngred3] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  return (
    <SearchRecipeContext.Provider
      value={{
        searchResults,
        setSearchResults,
        currRecipeId,
        setCurrRecipeId,
        query,
        setQuery,
        ingred1,
        setIngred1,
        ingred2,
        setIngred2,
        ingred3,
        setIngred3,
        isAdding,
        setIsAdding,
      }}
    >
      {children}
    </SearchRecipeContext.Provider>
  );
}

function useSearchRecipe() {
  const context = useContext(SearchRecipeContext);
  if (context === undefined)
    throw new Error(
      "HomePage Context was used outside of the HomePageProvider",
    );
  return context;
}

export { SearchRecipeProvider, useSearchRecipe };
