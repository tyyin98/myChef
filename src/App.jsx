import { useState } from "react";
import "./App.css";
import Logo from "./components/NavBar/Logo";
import NavBar from "./components/NavBar/NavBar";
import SearchRecipe from "./components/NavBar/SearchRecipe";
import RecipeList from "./components/Recipe/RecipeList";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import BottomNav from "./components/BottomNav/BottomNav";
import Favorites from "./components/Favorites/Favorites";
import { SearchRecipeProvider } from "./contexts/SearchRecipeContexts";

function App() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOnSearchPage, setIsOnSearchPage] = useState(true);

  return (
    <>
      <SearchRecipeProvider>
        <NavBar>
          <Logo />
          {isOnSearchPage && <SearchRecipe setIsLoading={setIsLoading} />}
          {!isOnSearchPage && "place holder for fav page"}
        </NavBar>
        {isDetailOpen && <RecipeDetail setIsDetailOpen={setIsDetailOpen} />}
        <div className="mx-auto w-11/12 overflow-scroll bg-transparent">
          {isLoading && "LOADING..."}
          {!isLoading && isOnSearchPage && (
            <RecipeList setIsDetailOpen={setIsDetailOpen} />
          )}
          {!isLoading && !isOnSearchPage && <Favorites />}
        </div>
        <BottomNav
          isOnSearchPage={isOnSearchPage}
          setIsOnSearchPage={setIsOnSearchPage}
        />
      </SearchRecipeProvider>
    </>
  );
}

export default App;
