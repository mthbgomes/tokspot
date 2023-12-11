import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../styles/global.css";
import "./DealForm.css";

import Input from "../../../atoms/Input.jsx";
import Button from "../../../atoms/Button.jsx";
import handleSubmit from "../../../../handlers/handleFormSubmit";

const DealForm = ({
  dealTitle,
  setDealTitle,
  stages,
  setStages,
  contact,
  setContact,
  value,
  setValue,
}) => {
  const [formValid, setFormValid] = useState(true);
  const handleValidation = () => {
    const isFormValid =
      dealTitle.trim() !== "" && contact.trim() !== "" && value !== "";
    setFormValid(isFormValid);
  };

  const handleSave = (e) => {
    e.preventDefault();
    handleValidation();
    console.log(formValid);
    if (formValid) {
      handleSubmit(
        {
          dealTitle,
          stages,
          contact,
          value,
        },
        "http://localhost:3001/api/deal/create",
        "POST",
        (resData) => {
          console.log("Sucesso!");
        },
        (err) => {
          console.log("Erro!", err.message);
        }
      );
    }
  };
  return (
    <Form className="row g-1 justify-content-center">
      <Form.Group controlId="dealName">
        <Form.Label className="mb-0">Nome da Oportunidade</Form.Label>
        <Input
          type="text"
          value={dealTitle}
          onChange={(ev) => setDealTitle(ev.target.value)}
          className="mb-2"
        />
      </Form.Group>
      <Form.Group controlId="dealStage">
        <Form.Label className="mb-0">Estágio</Form.Label>
        <Form.Select className="mb-2">
          {stages.map((stage, stageIndex) => (
            <option key={stageIndex} value={stage}>
              {stage}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="dealContact">
        <Form.Label className="mb-0">Contato</Form.Label>
        <Input
          type="text"
          value={contact}
          onChange={(ev) => setContact(ev.target.value)}
          className="mb-2"
        />
      </Form.Group>
      <Form.Group controlId="dealValue">
        <Form.Label className="mb-0 d-flex">Valor Estimado</Form.Label>
        <CurrencyInput
          id="dealValue"
          name="dealValue"
          decimalsLimit={2}
          allowNegativeValue="false"
          prefix="R$ "
          disableAbbreviations="true"
          className="form-control mb-2"
          onValueChange={(value) => setValue(value)}
        />
      </Form.Group>
      {!formValid && (
        <Alert variant="danger" className="mb-2">
          Por favor, preencha todos os campos antes de salvar.
        </Alert>
      )}
      <Button
        onClick={handleSave}
        type="submit"
        className="p-0 btn-primary-color"
      >
        Salvar
      </Button>
    </Form>
  );
};

export default DealForm;
