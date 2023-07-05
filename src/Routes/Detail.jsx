import React, { useContext, useEffect, useState, useCallback } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import { useParams } from "react-router-dom";
import doctorImage from "../Assets/imgs/doctor.jpg";
import { THEME } from "../Assets/theme/theme";

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const [dentist, setDentist] = useState({});

  const { id } = useParams();

  const fetchDentistByID = useCallback(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDentist(res.data);
      });
  }, [id]);
  
  useEffect(() => {
    fetchDentistByID();
  }, [fetchDentistByID]);
  

  return (
    <div className={theme === THEME.darkMode ? "dark" : ""}>
      <div className="detail-container">
        <h1 className="detail-id">{dentist.id}</h1>
        <img src={doctorImage} alt="dentist-img" className="detail-image" />
        <div className="detail-info">
          <h2 className="detail-name">{dentist.name}</h2>
          <h3 className="detail-username">{dentist.username}</h3>
          <p className="detail-email">{dentist.email}</p>
          <p className="detail-phone">{dentist.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;