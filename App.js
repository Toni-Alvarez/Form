import { useState } from 'react';
import './App.css';

function App() {
  const [formFields, setFormFields] = useState([
    { equipo: '', marca: '', modelo:'', serie: '', identificacion:'', puntos:'',referencia:'' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      equipo: '',
      marca: '',
      modelo: '',
      serie: '',
      identificacion: '',
      puntos: '',
      referencia: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='equipo'
                placeholder='Equipo o Instrumento'
                onChange={event => handleFormChange(event, index)}
                value={form.equipo}
              />
              <br/>
              <input
                name='marca'
                placeholder='Marca'
                onChange={event => handleFormChange(event, index)}
                value={form.marca}
              />
              <br/>
              <input
                name='modelo'
                placeholder='Modelo'
                onChange={event => handleFormChange(event, index)}
                value={form.modelo}
              />
              <br/>
              <input
                name='serie'
                placeholder='Serie'
                onChange={event => handleFormChange(event, index)}
                value={form.serie}
              />
              <br/>
              <input
                name='identificacion'
                placeholder='No. De inventario ó identificación'
                onChange={event => handleFormChange(event, index)}
                value={form.identificacion}
              />
              <br/>
              <input
                name='puntos'
                placeholder='Puntos a calibrar'
                onChange={event => handleFormChange(event, index)}
                value={form.puntos}
              />
              <br/>
              <input
                name='referencia'
                placeholder='Referencia con la que declarará conformidad'
                onChange={event => handleFormChange(event, index)}
                value={form.referencia}
              />
              <br/>
              <button onClick={() => removeFields(index)}>Eliminar</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Agregar más.</button>
      <br />
      <button onClick={submit}>Enviar</button>
    </div>
  );
}

export default App;
