import React, { useState, useEffect } from 'react';
import Context from './Context';

export default function Provider({ children }) {
  const localStorageEvents = JSON.parse(localStorage.getItem('events'));
  const [modalVisible, setModalVisible] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", describe: "", date: new Date() });

  var result = localStorage.getItem('events') !== null ? localStorageEvents: []
  useEffect(() => {  
    localStorage.setItem("events", JSON.stringify(allEvents));
  }, [allEvents]);


  function changeModal() {
    setModalVisible(false);
    document.getElementById("createEvent").className += "visible";

  }

  function changeButtonOpen() {
    setModalVisible(true);
    document.getElementById("createEvent").className += " hidden";

  }

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    setModalVisible(false);
    document.getElementById("createEvent").className += "visible";
    localStorage.setItem("events", JSON.stringify(allEvents));

  }

  const valuesContext = {    
    modalVisible,
    setModalVisible,
    allEvents,
    setAllEvents,
    newEvent,
    setNewEvent,
    handleAddEvent,
    changeModal,
    changeButtonOpen,
 
  };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}
