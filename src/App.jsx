import { useState } from "react";
import "./App.css";
import Logo from "./components/NavBar/Logo";
import NavBar from "./components/NavBar/NavBar";
import SearchRecipe from "./components/NavBar/SearchRecipe";
import RecipeList from "./components/Recipe/RecipeList";
import RecipeDetail from "./components/Recipe/RecipeDetail";
// import RecipeItem from "./components/Recipe/RecipeItem";

function App() {
  const [query, setQuery] = useState("");
  const [ingred1, setIngred1] = useState("");
  const [ingred2, setIngred2] = useState("");
  const [ingred3, setIngred3] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currRecipeId, setCurrRecipeId] = useState();

  return (
    <>
      <div className="">
        <NavBar>
          <Logo />
          <SearchRecipe
            query={query}
            setQuery={setQuery}
            ingred1={ingred1}
            setIngred1={setIngred1}
            ingred2={ingred2}
            setIngred2={setIngred2}
            ingred3={ingred3}
            setIngred3={setIngred3}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setCurrRecipeId={setCurrRecipeId}
          />
        </NavBar>
        {isDetailOpen && (
          <RecipeDetail
            isDetailOpen={isDetailOpen}
            setIsDetailOpen={setIsDetailOpen}
            currRecipeId={currRecipeId}
            setCurrRecipeId={setCurrRecipeId}
          />
        )}
        <div className="mx-auto w-11/12 overflow-scroll bg-transparent">
          {isLoading ? (
            "Loading..."
          ) : (
            <RecipeList
              searchResults={searchResults}
              setIsDetailOpen={setIsDetailOpen}
              setCurrRecipeId={setCurrRecipeId}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
