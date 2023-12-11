const handleSubmit = async (data, endpoint, method, onSuccess, onError) => {
  try {
    const res = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const resData = await res.json();
      onSuccess(resData);
    } else {
      throw new Error(`Erro na requisição: ${res.statusText}`);
    }
  } catch (err) {
    onError(err);
  }
};

export default handleSubmit;
