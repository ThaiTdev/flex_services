import { useInputControlerFormRestaurant } from "../../../../../../Hooks/HookPro/useInputControlerFormRestaurant";
import { accountService } from "../../../../../../../_services/accountService";
import { useParams } from "react-router-dom";
import styles from "./Form.module.scss";
import img from "../../../../../../../assets/images/professionnel/mes_restaurant/restaurantParDefaut.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormData from "form-data";

function FormPro() {
  const [register, handleSubmit, setValue, errors] =
    useInputControlerFormRestaurant();
  const [number, setNumber] = useState("");
  const [routeRestaurant, setRouteRestaurant] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate();

  function handleChange(num) {
    setNumber(num);
  }
  const handleChangeAvatar = (e) => {
    let formData = new FormData();
    formData.append("imageResto", e.target.files[0]);
    if (formData.get("imageResto")) {
      console.log("La valeur de 'imageResto' est:", formData.get("imageResto"));
    } else {
      console.log("Il n'y a pas de valeur pour 'imageResto'");
    }

    accountService
      .uploadImageRestaurant(formData, id, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Success ", res.data.message);
        setRouteRestaurant(res.data.data.data1);
        console.log("donnée3:" + res.data.data.data1);
      });
  };

  const showData = (data) => {
    let value = {
      nom_restaurant: data.nom_restaurant,
      adresse: data.adresse,
      phone: number,
      image_resto: routeRestaurant,
      siret: data.siret,
    };

    try {
      accountService
        .createNewResto(value, id, {
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((res) => {
          console.log(res);
          console.log(res.data.data.adresse);
          navigate(`/PageGestionPro/${id}`);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`d-flex flex-column justify-content-around align-items-start  ${styles.formContainer} `}
    >
      <div className={`d-flex flex-row mb-20 ${styles.imageRestoContainer} `}>
        <img
          className={styles.imageRestoImage}
          src={routeRestaurant ? routeRestaurant : img}
          alt="photo_de_profil"
        />

        <label
          htmlFor="imageResto"
          className={`fz-12  mb-10  ${styles.label_imageResto} d-flex justify-content-center align-items-center `}
        >
          <img src="/images/professionnel/photo.png" alt="photo_de_photo" />
        </label>
        <input
          type="file"
          name="imageResto"
          id="imageResto"
          className={`${styles.imageResto}`}
          accept=".png,.jpeg,.jpg"
          onChange={handleChangeAvatar}
          required
        />
      </div>

      <form
        className={` d-flex flex-column justify-content-between ${styles.form}`}
        onSubmit={handleSubmit(showData)}
      >
        <div className="d-flex flex-column justify-content-around align-items-start  ">
          <label htmlFor="nom_restaurant" className="fz-12  mb-10">
            Nom de mon restaurant
          </label>
          <input
            type="text"
            id="nom_restaurant"
            className={`fz-12 mb-10 p-5 ${styles.inputName}`}
            name="nom_restaurant"
            {...register("nom_restaurant")}
            required
          />
          <label htmlFor="phone" className="fz-12  mb-10">
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

          <label htmlFor="birthDate" className="fz-12  mb-10">
            Adresse
          </label>
          <input
            type="text"
            id="adresse"
            className={`d-flex justify-content-start  fz-12 mb-10 p-5 ${styles.birthDate}`}
            name="adresse"
            {...register("adresse")}
            required
          />
          <label htmlFor="siret" className="fz-12  mb-10">
            N° de siret
          </label>
          <input
            type="text"
            id="siret"
            className={`d-flex justify-content-start  fz-12 mb-10 p-5 ${styles.birthDate}`}
            name="siret"
            {...register("siret")}
            required
          />
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
