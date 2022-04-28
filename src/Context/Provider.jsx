import React, { useState } from 'react';
import Context from './Context';

export default function Provider({ children }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", describe: "", date: new Date() });


  function changeModal() {
    setModalVisible(false);
    document.getElementById("createEvent").className += "visible";
  }

  function changeButtonOpen() {
    setModalVisible(true);
    document.getElementById("createEvent").className += " hidden";
  }

  function deleteItem(){  
    const remove = document.querySelector('.bodyHome');
    remove.parentNode.removeChild(remove);
  }

  function handleAddEvent() {   
    setAllEvents([...allEvents, newEvent]);
    setModalVisible(false);
    document.getElementById("createEvent").className += "visible";  
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
    deleteItem 
  };

  return (
    <Context.Provider value={ valuesContext }>
      {children}
    </Context.Provider>
  );
}

  // const localStorageEvents = JSON.parse(localStorage.getItem('events'));
  // localStorage.getItem('events') !== null ? localStorageEvents : []
    // useEffect(() => {  
  //   if (allEvents !== []){
  //     localStorage.setItem("events", JSON.stringify(allEvents));
  //   }
  
  // }, [allEvents]);
