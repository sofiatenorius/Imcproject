import "./App.css";
import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

function App() {
  const [form, setForm] = useState("");


  function handleChange(event) {
    console.log("event 1", event.target.name);
    console.log("event 2", event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("estamos dentro do handleSubmit");
    console.log("form handleSubmit", form);
    if (form.altura !== "" && form.peso !== "") {
      const imc = form.peso / (form.altura * form.altura);
      console.log("imc", imc);
      alert("Seu IMC é " + imc);
    } else {
      alert("Os valores precisam ser maiores do que 0");
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form">
          <div className="container-input-label">
            <div className="childen-container-input-label">
              <label>Quanto você mede?</label>
              <InputMask
                placeholder="ALTURA"
                onChange={handleChange}
                name="altura"
                mask="9.99"
              />
            </div>
            <div className="childen-container-input-label">
              <label>Quanto você pesa?</label>
              <InputMask
                placeholder="PESO"
                onChange={handleChange}
                name="peso"
                // type="number"
                // mask=""
              />
            </div>
          </div>
          <div className="container-button">
            <button>CALCULAR</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;