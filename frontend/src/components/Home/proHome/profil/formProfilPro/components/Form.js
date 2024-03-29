import { useInputControlerFormProfilPro } from "../../../../../Hooks/HookPro/useInputControlerFormProfilPro";
import { accountService } from "../../../../../../_services/accountService";
import { sortPoste } from "./selectOptions";
import { useParams } from "react-router-dom";
import styles from "./Form.module.scss";
import img from "../../../../../../assets/images/professionnel/homme.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormData from "form-data";

function FormPro() {
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormProfilPro();
  const [number, setNumber] = useState("");
  const [routeAvatar, setRouteAvatar] = useState(null);
  const [proId, setProId] = useState(0);
  const { id } = useParams();
  let navigate = useNavigate();

  function handleChange(num) {
    setNumber(num);
    console.log(num);
  }
  const handleChangeAvatar = (e) => {
    let formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    if (formData.get("avatar")) {
      console.log("La valeur de 'avatar' est:", formData.get("avatar"));
    } else {
      console.log("Il n'y a pas de valeur pour 'avatar'");
    }

    accountService
      .uploadAvatarPro(formData, id, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Success ", res.data.message);
        setRouteAvatar(res.data.data.data1);
        console.log("donnée:" + res.data.data.data1);
        setProId(res.data.data.pro_id);
      });
  };

  const showData = (data) => {
    let value = {
      nom_user: data.userName,
      phone: number,
      birthDate: data.birthDate,
      fonction: data.selectFunction,
      avatar: routeAvatar,
    };

    try {
      accountService
        .createProfilPro(value, id, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(`/PageProfilPro/${id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeFunction = (e) => {
    setValue("selectFunction", e.target.value);
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-start  ${styles.formContainer} `}
    >
      <div className={`d-flex flex-row`}>
        <div className={`mb-10 ${styles.avatarContainer}`}>
          <div className={styles.avatarBoxImage}>
            <img
              className={styles.avatarImage}
              src={routeAvatar ? routeAvatar : img}
              alt="photo_de_profil"
            />
          </div>

          <label
            htmlFor="avatar"
            className={`fz-12  mb-10  ${styles.label_avatar} d-flex justify-content-center align-items-center `}
          >
            <img src="/images/professionnel/photo.png" alt="photo_de_photo" />
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            className={`${styles.avatar}`}
            accept=".png,.jpeg,.jpg"
            onChange={handleChangeAvatar}
            required
          />
        </div>
      </div>
      <div></div>
      <form
        className={` d-flex flex-column justify-content-between ${styles.form}`}
        onSubmit={handleSubmit(showData)}
      >
        <div className="d-flex flex-column justify-content-around align-items-start  ">
          <label htmlFor="userName" className="fz-12  mb-10">
            Nom
          </label>
          <input
            type="text"
            id="userName"
            className={`fz-12 mb-10 p-5 ${styles.inputName}`}
            name="userName"
            {...register("userName")}
            required
          />
          <label htmlFor="userName" className="fz-12  mb-10">
            Numéro de téléphone
          </label>
          <div className={styles.phoneBox}>
            <PhoneInput
              className={styles.phone}
              country={"fr"}
              value={number}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="userName" className="fz-12  mb-10">
            Date de naissance
          </label>
          <input
            type="date"
            id="birthDate"
            className={`d-flex justify-content-start  fz-12 mb-10 p-5 ${styles.birthDate}`}
            name="birthDate"
            {...register("birthDate")}
            required
          />
          <label htmlFor="userFuction" className="fz-12  mb-10">
            Mon poste / Ma fonction
          </label>
          <select
            name="userFuction"
            id="userFuction"
            onChange={handleChangeFunction}
            {...register("selectFunction")}
            className={`d-flex justify-content-start p-5 ${styles.inputFunction} `}
          >
            {sortPoste.map(({ label, value }) => (
              <option key={value} value={value} required>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-end  mt-20  ">
          <button
            className="d-flex flex-row justify-content-between align-items-center btn-co btn-reverse-primary fz-12"
            type="submit"
          >
            <span>Valider</span>
            <i className=" fa-solid fa-arrow-right-long fz-20 "></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPro;
