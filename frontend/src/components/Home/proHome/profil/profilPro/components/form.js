import styles from "./Form.module.scss";

export default function Form({ data, value }) {
  const newBirth = data.birthDate;
  const avatar = data.avatar;
  // modification de birthDate pour l'affichage
  let newDate = "";
  //cette syntaxe permet de faire appel à la fonction directement
  (async function birthDate() {
    let birth = [];
    if (newBirth) {
      newBirth.split("");
      for (let i = 0; i < 10; i++) {
        birth.push(newBirth[i]);
      }
    }
    newDate = birth.join("").split("-").reverse().toString().replace(/,/g, "/");
  })();

  // modification de phone pour l'affichage
  const newPhone = data.phone;
  const newArr = [];
  let resp = "";
  (async function Phone(size) {
    if (newPhone) {
      let arr = newPhone.split("");
      newArr[0] = arr.slice(0, 2);
      newArr[1] = arr.slice(2, 3);
      for (let i = 2; i <= arr.length; i++) {
        newArr[i] = arr.splice(i, size);
        resp = newArr.join(" ").replace(/,/g, "");
      }
    }
  })(2);

  // Phone(2);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-start ${styles.ProForm}`}
    >
      <div className={`${styles.ProAvatarBox}`}>
        <div className={`${styles.ProAvatar}`}>
          <img
            className={`${styles.ProImage}`}
            src={avatar ? avatar : "/images/professionnel/homme.png"}
            alt="photo_de_profil"
          />
        </div>
      </div>

      <div
        className={`d-flex flex-column justify-content-between  align-items-start  ${styles.ProInput}`}
      >
        <p>Nom</p>
        <span>{data.nom_user}</span>
      </div>
      <div
        className={`d-flex flex-column   justify-content-between  align-items-start ${styles.ProInput}`}
      >
        <p> Email</p>
        <span>{value.email}</span>
      </div>
      <div
        className={`d-flex flex-column  justify-content-between  align-items-start  ${styles.ProInput}`}
      >
        <p>Téléphone</p>
        <span>+{resp}</span>
      </div>
      <div
        className={`d-flex flex-column  justify-content-between  align-items-start ${styles.ProInput}`}
      >
        <p>Date de naissance</p>
        <span>{newDate}</span>
      </div>
      <div
        className={`d-flex flex-column  justify-content-between  align-items-start ${styles.ProInput}`}
      >
        <p>Adresse</p>
        <span>Ne peux pas être indiqué pour le moment</span>
      </div>
      <div
        className={`d-flex flex-column  justify-content-between  align-items-start ${styles.ProInput}`}
      >
        <p>Numéro de SIRET</p>
        <span>Ne peux pas être indiqué pour le moment</span>
      </div>
    </div>
  );
}
