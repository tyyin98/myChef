import Ingredients from "./Ingredients";
import SearchButton from "./SearchButton";
import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import { useHomePage } from "../../hooks/useHomePage";

// const apikey1 = "b5dd3b928c05439bb5a74517645529a4";
const apikey2 = "7844e6f4170c48e8a6635f9ab3d2dab8";

function SearchRecipe() {
  const { setIsLoading } = useHomePage();
  const {
    query,
    setSearchResults,
    ingred1,
    setIngred1,
    ingred2,
    setIngred2,
    ingred3,
    setIngred3,
    setIsAdding,
    setQuery,
    isAdding,
  } = useSearchRecipe();

  function toggleAdding() {
    setIsAdding(!isAdding);
  }

  function handleQueryChange(query) {
    setQuery(query);
  }

  function handleSubmit() {
    async function fetchRecipes() {
      let includedIngreds = [ingred1, ingred2, ingred3];
      includedIngreds = includedIngreds.filter((ing) => ing !== "").join(",");

      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${includedIngreds}&number=10&apiKey=${apikey2}`,
        );
        console.log(includedIngreds);
        const data = await res.json();
        console.log(data);
        setSearchResults(data.results);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRecipes();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
      setQuery("");
      setIngred1("");
      setIngred2("");
      setIngred3("");
    }
  }

  return (
    <div
      className="flex-col items-center justify-center "
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center justify-around ">
        <input
          className="my-1 h-8 w-64  rounded-lg p-2 placeholder:text-center"
          type="text"
          placeholder="🔍 Search recipes..."
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
        />
        <button onClick={() => toggleAdding()}> ➕ 🥕 🥩 ...</button>
      </div>
      {isAdding && (
        <div>
          <Ingredients />
        </div>
      )}
      <div className="flex items-center justify-center">
        <SearchButton />
      </div>
    </div>
  );
}

export default SearchRecipe;

// SearchRecipe.propTypes = {
//   query: PropTypes.string,
//   setQuery: PropTypes.func.isRequired,
//   ingred1: PropTypes.string,
//   setIngred1: PropTypes.func.isRequired,
//   ingred2: PropTypes.string,
//   setIngred2: PropTypes.func.isRequired,
//   ingred3: PropTypes.string,
//   setIngred3: PropTypes.func.isRequired,
//   searchResults: PropTypes.arrayOf(
//     PropTypes.shape({ name: PropTypes.string.isRequired }),
//   ),
//   setSearchResults: PropTypes.func.isRequired,
// };
