function RecipeItem({ title, imageSrc, id, setIsDetailOpen, setCurrRecipeId }) {
  function handleClickItem() {
    setCurrRecipeId(id);
    setIsDetailOpen(true);
  }

  return (
    <li className="list-none bg-yellow-100" onClick={handleClickItem}>
      <div className="flex items-center justify-between">
        <img className="w-32 p-2" src={imageSrc} alt={title} id={id} />
        <div>{title}</div>
      </div>
    </li>
  );
}

export default RecipeItem;
