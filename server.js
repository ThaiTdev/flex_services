// je fais appel à mes packages
const express = require("express");

//creer mon fichier .env pour les variables d'environnement
require("dotenv").config();

const fileUpload = require("express-fileupload");

//les Middlewares
//pour afficher le retour de la requête dans le terminal
const morgan = require("morgan");
//pour le logo dans le titre
const favicon = require("serve-favicon");
//pour recupérer la requête en json
const bodyParser = require("body-parser");

//j'import sequelize
// const sequelize = require("./src/db/sequelize");

//permet la connexion a la bdd
const cors = require("cors");

//je crée une instance de ma class "express"
const app = express();

//utilisation de la variable d'environement "PORT" DU FICHIER .env pour prédéfinir le port ou port 6000 si il ne le trouve pas.
const PORT = process.env.PORT || 6000;

//je passe la methode initDb a sequelize
// sequelize.initDb();

//utilisation des middleWares prédéfinis dans "express" en chaînage
app
  .use(express.json())
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(cors())
  .use(fileUpload());

//authentification routes//
require("./src/routes/userRoutes/createUser")(app);
require("./src/routes/userRoutes/login")(app);
require("./src/routes/userRoutes/logout")(app);
require("./src/routes/userRoutes/userVerif")(app);
require("./src/routes/userRoutes/forgotPassword")(app);
require("./src/routes/userRoutes/resetPassword")(app);

//les lignes de code ci-dessus reviennent à écrire cela:
// const createUserRoutes = require("./src/routes/userRoutes/createUserRoutes");
// const app = express();
// // Inject the userRoutes module into the app
// createUserRoutes(app);

//professionnels routes//
require("./src/routes/proRoutes/createPro")(app);
require("./src/routes/proRoutes/checkProfilValide")(app);
require("./src/routes/proRoutes/showProfilPro")(app);
require("./src/routes/proRoutes/uploadAvatarPro")(app);
require("./src/routes/proRoutes/updateProfilPro")(app);
require("./src/routes/proRoutes/deleteProfilPro")(app);

//customers routes//
require("./src/routes/customerRoutes/createCustomer")(app);
require("./src/routes/customerRoutes/checkProfilCustomerValide")(app);
require("./src/routes/customerRoutes/showProfilCustomer")(app);
require("./src/routes/customerRoutes/uploadAvatarCustomer")(app);
require("./src/routes/customerRoutes/uploadCvCustomer")(app);
require("./src/routes/customerRoutes/showCustomerCv")(app);
require("./src/routes/customerRoutes/updateProfilCustomer")(app);

//retaurants routes//
require("./src/routes/restaurantRoutes/uploadeImageResto")(app);
require("./src/routes/restaurantRoutes/CreateNewRestaurant")(app);
require("./src/routes/restaurantRoutes/ShowAllRestaurants")(app);
require("./src/routes/restaurantRoutes/ShowOneRestaurant")(app);
require("./src/routes/restaurantRoutes/UpdateRestaurant")(app);
require("./src/routes/restaurantRoutes/GetDataForOneRestaurant")(app);
require("./src/routes/restaurantRoutes/UpdateImageRestaurant")(app);

//api crud//
require("./src/routes/routesCrud/findAllUsers")(app);
require("./src/routes/routesCrud/findUserByPk")(app);
require("./src/routes/routesCrud/deleteUser")(app);
require("./src/routes/routesCrud/updateUser")(app);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`le server est ${PORT}`);
});
