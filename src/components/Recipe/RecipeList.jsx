import RecipeItem from "./RecipeItem";

function RecipeList({ searchResults, setIsDetailOpen, setCurrRecipeId }) {
  return (
    <ul>
      {searchResults
        ? searchResults.map((item) => (
            <RecipeItem
              key={item.title}
              title={item.title}
              id={item.id}
              imageSrc={item.image}
              setIsDetailOpen={setIsDetailOpen}
              setCurrRecipeId={setCurrRecipeId}
            />
          ))
        : ""}
    </ul>
  );
}

export default RecipeList;
