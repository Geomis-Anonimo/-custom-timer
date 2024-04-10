import React from 'react'
import { format } from 'date-fns';

const LapList = ({ laps, onSaveLapRecord, formatTime }) => {
  const handleSaveClick = (lapTime) => { // Recebe o tempo de volta como argumento
    const currentDate = new Date();
    const formattedDate = format(currentDate, "dd/MM/yyyy HH:mm:ss");
    const lapRecord = { date: formattedDate, elapsedTime: lapTime }; // Usa o tempo de volta recebido
    onSaveLapRecord(prevRecords => [...prevRecords, lapRecord]);
  };

  return (
    <div className='timer-laps'>
      <h3>Voltas:</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            Volta {index + 1}: {lap} <button onClick={() => handleSaveClick(lap)}>Salvar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LapList