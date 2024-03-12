import RecipeItem from "./RecipeItem";

function RecipeList({ searchResults, setIsDetailOpen, setCurrRecipeId }) {
  return searchResults.length > 0 ? (
    <ul className=" mt-5 h-[75vh] overflow-y-auto rounded-lg bg-yellow-100 px-4 py-2">
      {searchResults.map((item) => (
        <RecipeItem
          key={item.title}
          title={item.title}
          id={item.id}
          imageSrc={item.image}
          setIsDetailOpen={setIsDetailOpen}
          setCurrRecipeId={setCurrRecipeId}
        />
      ))}
    </ul>
  ) : (
    ""
  );
}

export default RecipeList;
