import React from 'react'
import './SaveLap.css'
import { v4 as uuidv4 } from 'uuid';

const SaveLap = ({ lapRecords }) => {
  console.log(lapRecords)
  return (
    <div className='timer-container-saved'>
      <div className='timer-display-saved'>
      <h2>Registros de Voltas Salvos:</h2>
        {lapRecords.map((record) => (
          <div key={uuidv4()}>
            <p>Data e Hora: {record.date}</p>
            <p>Minutagem Percorrida: {record.elapsedTime}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SaveLap