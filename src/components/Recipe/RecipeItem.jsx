import { useSearchRecipe } from "../../contexts/SearchRecipeContexts";
import { useHomePage } from "../../hooks/useHomePage";

function RecipeItem({ title, image, id }) {
  const { faved, setFaved, setIsDetailOpen } = useHomePage();
  const { setCurrRecipeId } = useSearchRecipe();

  function handleClickItem() {
    setCurrRecipeId(id);
    setIsDetailOpen(true);
  }

  function handleAddToFav() {
    const index = faved.findIndex((item) => item.id === id);
    if (index === -1) {
      setFaved((faved) => [...faved, { id, title, image }]);
    }
  }

  return (
    <div className="flex justify-between">
      <li
        className="flex list-none items-center justify-start overflow-scroll border-b border-t border-white"
        onClick={handleClickItem}
      >
        <img className="w-32 p-2" src={image} alt={title} id={id} />
        <div>{title}</div>
      </li>
      <button onClick={handleAddToFav}>⭐️</button>
    </div>
  );
}

export default RecipeItem;
