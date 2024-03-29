const IngredientsRepository = require("../repositories/ingredients/IngredientRepository");
const IngredientCreateService = require("../services/ingredient/IngredientCreateService");

class IngredientsControllers {
  async create(request, response) {
    const { name } = request.body;

    const ingredientsRepository = new IngredientsRepository();
    const ingredientCreateService = new IngredientCreateService(
      ingredientsRepository
    );

    const ingredientInfos = await ingredientCreateService.execute({ name });

    return response.status(201).json(ingredientInfos);
  }

  async index(request, response) {
    const ingredientsRepository = new IngredientsRepository();

    const result = await ingredientsRepository.index();

    return response.json(result);
  }
}

module.exports = IngredientsControllers;
