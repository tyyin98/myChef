import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import RecipeItem from "./RecipeItem";

function RecipeList() {
  const { searchResults } = useSearchRecipe();

  return searchResults.length > 0 ? (
    <ul className=" mt-5 h-[75vh] overflow-y-auto rounded-lg bg-yellow-100 px-4 py-2">
      {searchResults.map((item) => (
        <RecipeItem
          key={item.title}
          title={item.title}
          id={item.id}
          imageSrc={item.image}
        />
      ))}
    </ul>
  ) : (
    ""
  );
}

export default RecipeList;
