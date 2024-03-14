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

  return (
    <div className="flex items-center justify-around py-1">
      <input
        className="w-3/12 rounded-lg bg-yellow-100 p-1"
        placeholder="ingredient1"
        value={ingred1}
        onChange={(e) => handleChangeIngred1(e.target.value)}
      />

      <input
        className=" w-3/12 rounded-lg bg-yellow-100 p-1"
        placeholder="ingredient2"
        value={ingred2}
        onChange={(e) => handleChangeIngred2(e.target.value)}
      />

      <input
        className="w-3/12 rounded-lg bg-yellow-100 p-1"
        placeholder="ingredient3"
        value={ingred3}
        onChange={(e) => handleChangeIngred3(e.target.value)}
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
