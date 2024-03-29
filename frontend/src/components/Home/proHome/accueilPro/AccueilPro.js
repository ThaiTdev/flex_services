import styles from "./AccueilPro.module.scss";
import { accountService } from "../../../../_services/accountService";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AccueilPro() {
  const { id } = useParams();
  let navigate = useNavigate();
  function handleClick() {
    try {
      accountService
        .checkProfilValide(id, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.message) {
            // navigate(`/ProfilPro/${id}`);
            navigate(`/PageProfilPro/${id}`);
          } else {
            navigate(`/FormProfilPro/${id}`);
          }
        });
    } catch (error) {}
  }

  return (
    <div
      className={`d-flex flex-direction-row justify-content-center align-items-center  ${styles.AccueillPage} `}
    >
      <div
        className={`d-flex flex-column justify-content-around align-items-center   ${styles.AccueillContainer} `}
      >
        <div
          className={`d-flex flex-row justify-content-center align-items-end ${styles.WelcomeLogo}`}
        >
          <img src="../images/logo/Logo.png" alt="logo-flex" />
        </div>
        <div
          className={`d-flex flex-column  justify-content-around   p-20 ${styles.AccueillcontainerLinks} `}
        >
          <div
            className={`d-flex flex-row justify-content-between align-items-center   ${styles.AccueiLink1} `}
          >
            <div
              onClick={handleClick}
              className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
            >
              <img src="../images/Menu/utilisateur.png" alt="Maison" />
              <p className="m-0 mt-5">profil</p>
            </div>
            <Link
              to={`/parameterPro/${id}`}
              style={{ textDecoration: "none" }}
              href="/"
            >
              <div
                className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
              >
                <img src="../images/Menu/filtre.png" alt="liste" />
                <p className="m-0 mt-5">Parametre</p>
              </div>
            </Link>
          </div>
          <div
            className={`d-flex flex-direction-row justify-content-between align-items-center  ${styles.AccueiLink2} `}
          >
            <div
              className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
            >
              <img src="../images/Menu/restaurant.png" alt="avatar" />
              <p className="m-0 mt-5">Mes restaurant</p>
            </div>
            <div
              className={`d-flex flex-column justify-content-between align-items-center  ${styles.Link} `}
            >
              <img src="../images/Menu/gestionnaire.png" alt="coeur" />
              <p className="m-0 mt-5">Gestion</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <Link
            to={`/LogoutUser/${id}`}
            style={{ textDecoration: "none" }}
            href="/"
          >
            <p>DECONNEXION</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AccueilPro;
