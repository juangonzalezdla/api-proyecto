import UserModel from '../models/user.schema.js';
import { compare, hash } from 'bcrypt';
import { SALT } from '../constants/salt.js';

const userUpdatePasswordController = async (req, res) => {
  const { id } = req;
  const { oldPassword, newPassword } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if (!existingUserById) 
    return res.status(401).send('Usuario no autorizado');

  const checkPassword = await compare(oldPassword, existingUserById.password);
  if (!checkPassword) 
    return res.status(401).send('Credenciales incorrectas');
  
  const hashedPassword = await hash(newPassword, SALT);
  existingUserById.password = hashedPassword;

  await existingUserById.save();

  return res.send('Contraseña del usuario actualizada');
}

export default userUpdatePasswordController;