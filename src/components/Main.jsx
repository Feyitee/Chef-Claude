const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientListItems = ingredients.map((ingredient) => {
    <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <main>
      <form>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          className="add-ingredient-form"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
};

export default Main;
