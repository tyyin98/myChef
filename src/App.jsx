import "./App.css";
import Logo from "./components/NavBar/Logo";
import NavBar from "./components/NavBar/NavBar";
import SearchRecipe from "./components/NavBar/SearchRecipe";
import RecipeList from "./components/Recipe/RecipeList";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import BottomNav from "./components/BottomNav/BottomNav";
import Favorites from "./components/Favorites/Favorites";
import { SearchRecipeProvider } from "./contexts/SearchRecipeContexts";
import { useHomePage } from "./hooks/useHomePage";
import SearchFav from "./components/Favorites/SearchFav";

function App() {
  const { isOnSearchPage, isDetailOpen, isLoading } = useHomePage();
  return (
    <>
      <SearchRecipeProvider>
        <NavBar>
          <Logo />
          {isOnSearchPage && <SearchRecipe />}
          {!isOnSearchPage && <SearchFav />}
        </NavBar>
        {isDetailOpen && <RecipeDetail />}
        <div className="mx-auto w-11/12 overflow-scroll bg-transparent">
          {isLoading && "LOADING..."}
          {!isLoading && isOnSearchPage && <RecipeList />}
          {!isLoading && !isOnSearchPage && <Favorites />}
        </div>
        <BottomNav />
      </SearchRecipeProvider>
    </>
  );
}

export default App;
