import axios from "axios";

const handleSubmit = (data, endpoint, method, onSuccess, onError) => {
  axios({
    method: method,
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  })
    .then((response) => {
      onSuccess(response.data);
    })
    .catch((error) => {
      onError(error);
    });
};

export default handleSubmit;
