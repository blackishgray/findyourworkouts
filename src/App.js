import { useState, useEffect, useRef } from 'react';

import Exercise from './Exercise';
import { bodyParts, equipmentsList } from './Credentials';

const App = () => {

  const bodyPart = useRef(null);
  const [ bodyparts, setBodyParts ] = useState(bodyParts);
  const [ equipments, setEquipments ] = useState(equipmentsList)

  return (
    <div className="App">
      <p className='grind-heading'>
        Workouts
      </p>
      <Exercise bodyparts={bodyparts} equipments={equipments}/>
    </div>
  );
}

export default App;
