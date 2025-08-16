import React from "react";

const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <div>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        {props.ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div ref={props.reciperef}>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.getRecipe}>Get a recipe</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default IngredientsList;
