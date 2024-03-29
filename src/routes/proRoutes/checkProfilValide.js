const { Pro } = require("../../db/sequelize");

module.exports = (app) => {
  app.post("/api/checkProfilValide/:id", async (req, res) => {
    // récupération des données passées dans la requête
    const userData = req.params.id;
    try {
      const user = await Pro.findOne({ where: { user_id: userData } });
      if (user) {
        // si il existe déjà, je retourne ce message d'erreur
        const message1 = `Vous avez déjà un profil`;
        return res.json({ message: message1, data: user });
      } else {
        // si l'utilisateur n'existe pas, je retourne un message de succès
        const message2 = `votre Profil est valide`;
        return res.json({ message2: message2 });
      }
    } catch (error) {
      const message3 =
        "Le profil n'a pas pu être créé. Réessayez dans quelques instants.";
      res.status(500).json({ message3, data: error });
    }
  });
};
