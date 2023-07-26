import UserModel from '../models/user.schema.js';
import { compare } from 'bcrypt';
import createAccessToken from '../constants/jwt.js';

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  const existingUserByEmail = await UserModel.findOne({ email }).exec();
  if (!existingUserByEmail) 
    return res.status(401).send({ errors: ['Credenciales incorrectas'] });

  const checkPassword = await compare(password, existingUserByEmail.password);
  if (!checkPassword) 
    return res.status(401).send({ errors: ['Credenciales incorrectas'] });

  const token = await createAccessToken({ id: existingUserByEmail._id });
  res.cookie('token', token);
  return res.send('Inicio de sesión exitoso');
};

export default userLoginController;