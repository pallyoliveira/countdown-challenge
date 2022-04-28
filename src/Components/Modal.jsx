import React, { useContext } from "react";
import Context from '../Context/Context';
import DatePicker from "react-datepicker";

const Modal = () => {
  const { handleAddEvent, changeModal, newEvent, setNewEvent } = useContext(Context);

  return (
    <div className="modalComponent">
      <div className='container'>
        <button className='closeModal' onClick={changeModal}>x</button>
        <div className='contentModal'></div>

        <div className="bodyModal">
          <h3>Adicionar um evento</h3>
          <input type="text" placeholder="Nome do Evento" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          <DatePicker placeholderText="End Date" selected={newEvent.date} onChange={(date) => setNewEvent({ ...newEvent, date })} />

          <textarea placeholder="Descrição do Evento" rows="5" cols="35" value={newEvent.describe} onChange={(e) => setNewEvent({ ...newEvent, describe: e.target.value })} ></textarea>
          <button className="buttonAddEvent" onClick={handleAddEvent}>Add Event</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;