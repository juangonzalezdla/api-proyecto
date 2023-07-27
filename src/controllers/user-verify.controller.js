import jwt from 'jsonwebtoken';
import UserModel from '../models/user.schema.js';

const userVerifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) 
    return res.status(401).send({ errors: ['Usuario no autorizado'] });

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, async (err, user) => {
    if (err)
      return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const existingUserById = await UserModel.findById(user.id);

    if (!existingUserById) 
      return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const { _id, name, lastName, email } = existingUserById;

    return res.send({ _id, name, lastName, email });  
  });
};

export default userVerifyToken;