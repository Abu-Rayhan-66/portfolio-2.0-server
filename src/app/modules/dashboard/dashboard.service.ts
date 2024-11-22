const createRecipeIntoDb = async (payload: TRecipe, user:JwtPayload) => {


    const userRecord = await UserModel.findById(user.id);


    if (!userRecord) {
        throw new Error('User not found');
      }
    
      if (userRecord.isBlocked) {
        throw new Error('Your account has been blocked!');
      }
    
      payload.user = user.id;
    
      if (payload.isPremium) {
        payload.isPremium = true;
      }

  return await RecipeModel.create(payload);
};