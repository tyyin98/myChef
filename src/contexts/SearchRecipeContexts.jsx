import { useState, createContext, useContext } from "react";

const SearchRecipeContext = createContext();

function SearchRecipeProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [currRecipeId, setCurrRecipeId] = useState();

  return (
    <SearchRecipeContext.Provider
      value={{
        searchResults,
        setSearchResults,
        currRecipeId,
        setCurrRecipeId,
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
