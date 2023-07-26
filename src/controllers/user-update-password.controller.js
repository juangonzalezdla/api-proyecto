import UserModel from '../models/user.schema.js';
import { compare, hash } from 'bcrypt';
import { SALT } from '../constants/salt.js';

const userUpdatePasswordController = async (req, res) => {
  const { user } = req;
  const { oldPassword, newPassword } = req.body;

  const existingUserById = await UserModel.findById(user.id).exec();
  if (!existingUserById) 
    return res.status(401).send({ errors: ['Usuario no autorizado'] });

  const checkPassword = await compare(oldPassword, existingUserById.password);
  if (!checkPassword) 
    return res.status(401).send({ errors: ['Credenciales incorrectas'] });
  
  const hashedPassword = await hash(newPassword, SALT);
  existingUserById.password = hashedPassword;

  await existingUserById.save();

  return res.send('Contraseña del usuario actualizada');
};

export default userUpdatePasswordController;