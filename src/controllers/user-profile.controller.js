import UserModel from '../models/user.schema.js';

// Endpoint que obtiene el usuario
const userProfileController = async (req, res) => {
  try { // Bloque de instrucciones a intentar
    const { user } = req; // Contiene la cookie

    const existingUserById = await UserModel.findById(user.id);
    if (!existingUserById) 
      return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const { _id, name, lastName, email } = existingUserById;

    return res.send({ _id, name, lastName, email }); 
  } catch (error) { // respuesta si se produce un error
    return res.status(500).send({ errors: error.message });
  }
};

export default userProfileController;