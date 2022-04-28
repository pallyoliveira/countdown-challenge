import React, { useContext } from 'react';
import Context from '../Context/Context';
import Modal from './Modal';
import CountDown from './CountDown';

const Home = () => {
  const { modalVisible, allEvents, changeButtonOpen, deleteItem } = useContext(Context);

  return (
    <div className='bodyPrincipal'>
      <div id="createEvent">
        <h1>Criar Evento</h1>
        <button className='buttonMain' onClick={changeButtonOpen}>Open Calendar</button>
      </div>
      {modalVisible ? <Modal></Modal> : null}


      <div>
        <h1>Eventos</h1>

      </div>
      {allEvents.map((e, key) => (
        <div className="bodyHome">

          <section key={key} className="section">

            <span className='title'>{e.title}</span>
            <br />
            <div className="describeKey">
              {`#${key + 1} - ${e.date.toDateString()}`}
              <br />
              {e.describe}
            </div>
            <CountDown date={e.date} />
          </section>
          <button className='delete' onClick={deleteItem}>delete</button>
        </div>
      ))}
    </div>

  )
};

export default Home;