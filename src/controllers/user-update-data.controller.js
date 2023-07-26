import UserModel from '../models/user.schema.js';

const userUpdateDataController = async (req, res) => {
  const { user } = req;
  const { name, lastName } = req.body;

  const existingUserById = await UserModel.findById(user.id).exec();
  if (!existingUserById) 
    return res.status(401).send({ errors: ['Usuario no autorizado'] });

  existingUserById.name = name;
  existingUserById.lastName = lastName;

  await existingUserById.save();

  return res.send('Usuario actualizado');
};

export default userUpdateDataController;