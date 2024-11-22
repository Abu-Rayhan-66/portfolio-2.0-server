

const createRecipe = catchAsync(async (req, res ) => {

  const newRecipe = await recipeService.createRecipeIntoDb(req.body, req.user);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Recipe created successfully",
    data: newRecipe,
  });
});