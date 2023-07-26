const userLogoutController = async (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  });

  return res.send('Cierre de sesión exitoso');
};

export default userLogoutController;