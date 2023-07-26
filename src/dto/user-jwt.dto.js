import jwt from 'jsonwebtoken';

const userJWTDTO = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res
    .status(401)
    .send({ errors: ['Usuario no autorizado'] });

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error, user) => {
      if (error) return res
        .status(401)
        .send({ errors: ['Usuario no autorizado'] });

      req.user = user;

      next();
  });
}

export default userJWTDTO;