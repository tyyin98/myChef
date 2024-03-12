import PropTypes from "prop-types";
function Ingredients({
  query,
  setQuery,
  ingred1,
  setIngred1,
  ingred2,
  setIngred2,
  ingred3,
  setIngred3,
  setSearchResults,
  setIsLoading,
}) {
  function handleChangeIngred1(ingred) {
    setIngred1(ingred);
  }

  function handleChangeIngred2(ingred) {
    setIngred2(ingred);
  }

  function handleChangeIngred3(ingred) {
    setIngred3(ingred);
  }

  function handleSubmit() {
    async function fetchRecipes() {
      let includedIngreds = [ingred1, ingred2, ingred3];
      includedIngreds = includedIngreds.filter((ing) => ing !== "").join(",");

      setIsLoading(true);
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients=${includedIngreds}&number=10&apiKey=b5dd3b928c05439bb5a74517645529a4`,
      );
      console.log(includedIngreds);
      const data = await res.json();
      console.log(data);
      setSearchResults(data.results);
      setIsLoading(false);
    }
    fetchRecipes();
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
      // console.log("Search query:", query);
      // Clear the input field after search
      setQuery("");
      setIngred1("");
      setIngred2("");
      setIngred3("");
    }
  }

  return (
    <div className="flex items-center justify-around py-1">
      <input
        className="w-3/12 rounded-lg bg-yellow-100 p-1"
        placeholder="ingredient1"
        value={ingred1}
        onChange={(e) => handleChangeIngred1(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <input
        className=" w-3/12 rounded-lg bg-yellow-100 p-1"
        placeholder="ingredient2"
        value={ingred2}
        onChange={(e) => handleChangeIngred2(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <input
        className="w-3/12 rounded-lg bg-yellow-100 p-1"
        placeholder="ingredient3"
        value={ingred3}
        onChange={(e) => handleChangeIngred3(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Ingredients;

Ingredients.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  ingred1: PropTypes.string,
  setIngred1: PropTypes.func.isRequired,
  ingred2: PropTypes.string,
  setIngred2: PropTypes.func.isRequired,
  ingred3: PropTypes.string,
  setIngred3: PropTypes.func.isRequired,
};
