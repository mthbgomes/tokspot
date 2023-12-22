import axios from "axios";
import config from "../config";

const handleDelete = (dealId) => {
  axios
    .delete(`${config.apiUrl}/deal/delete/${dealId}`)
    .then((response) => {
      window.location.reload();
    })
    .catch((error) => {
      console.log("Erro!", error.response);
    });
};

export default handleDelete;
