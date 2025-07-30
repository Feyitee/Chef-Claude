const Main = () => {
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
    </main>
  );
};

export default Main;
