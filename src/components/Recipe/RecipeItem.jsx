import { useHomePage } from "../../contexts/HomePageContexts";
import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";

function RecipeItem({ title, imageSrc, id }) {
  const { setIsDetailOpen } = useHomePage();
  const { setCurrRecipeId } = useSearchRecipe();
  function handleClickItem() {
    setCurrRecipeId(id);
    setIsDetailOpen(true);
  }

  return (
    <li
      className="flex list-none items-center justify-start overflow-scroll border-b border-t border-white"
      onClick={handleClickItem}
    >
      <img className="w-32 p-2" src={imageSrc} alt={title} id={id} />
      <div>{title}</div>
      <div>➕ ⭐️</div>
    </li>
  );
}

export default RecipeItem;
