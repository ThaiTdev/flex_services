import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./PageProfilPro.module.scss";
import { Link, useParams } from "react-router-dom";
//images//
import card from "../../../../assets/images/monProfil/credit-card.png";
import facture from "../../../../assets/images/monProfil/facture.png";
import identifications from "../../../../assets/images/monProfil/identification.png";
import preference from "../../../../assets/images/monProfil/preference.png";
import profil from "../../../../assets/images/monProfil/profil.png";
import notif from "../../../../assets/images/monProfil/notifications.png";

const PageProfilPro = () => {
  const { id } = useParams();
  return (
    <div className={`d-flex flex-column   ${styles.mainPage}`}>
      <Header />
      <main className={`d-flex flex-fill  ${styles.mainContainer}`}>
        <div
          className={`d-flex flex-column justify-content-center align-items-center   ${styles.profilContainer}`}
        >
          <div className={`${styles.title} mb-20`}>
            <h1>Mon profil</h1>
          </div>
          <div
            className={`d-flex flex-row justify-content-between align-items-center  ${styles.menu} `}
          >
            <div
              className={`d-flex flex-column justify-content-center align-items-center  ${styles.menuOption} `}
            >
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <Link
                  to={`/UpdateProProfil/${id}`}
                  style={{ textDecoration: "none" }}
                  href="/"
                >
                  <div className={`${styles.ChangePage} mr-10`}>
                    <img src={profil} alt="profil" />
                    <p>Modifier mon profil</p>
                  </div>
                </Link>
                <Link
                  to={`/ProfilPro/${id}`}
                  style={{ textDecoration: "none" }}
                  href="/"
                >
                  <div className={`${styles.ChangePage}`}>
                    <img src={identifications} alt="identifications" />
                    <p>Informations Personnelles</p>
                  </div>
                </Link>
              </div>
              <div
                className={`d-flex flex-row justify-content-center align-items-center    ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <img src={facture} alt="facture" />
                  <p>Factures et reçus</p>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <img src={card} alt="carte-de-credit" />
                  <p>Moyens de paiement</p>
                </div>
              </div>
              <div
                className={`d-flex flex-row justify-content-center align-items-center ${styles.menuChangePage}`}
              >
                <div className={`${styles.ChangePage} mr-10`}>
                  <img src={notif} alt="notifications" />
                  <p>Réglages des notifications</p>
                </div>
                <div className={`${styles.ChangePage}`}>
                  <img src={preference} alt="preference" />
                  <p>préférences</p>
                </div>
              </div>
            </div>
            <div
              className={`d-flex justify-content-center justify-content-center  ${styles.menuText} `}
            >
              <p>
                Vous pouvez ici modifier tous les paramètres et toutes les
                informations léies à votre compte. Nous prenons vos données et
                vos informations numériques à coeur, c’est pouquoi vous pouvez
                tout désactiver si vous le souhaitez. Ou nous aider à faire de
                flex la meilleure plateforme pour vous, utilisateurs, en
                partageant vos données que nous n’utiliserons jamais en dehors
                de notre plateforme.
              </p>
            </div>
          </div>
          <div className={`${styles.title}`}>
            <p>Me déconnecter</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageProfilPro;