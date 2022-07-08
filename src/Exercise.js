import { useState, useEffect } from 'react';

import BodyParts from './ListOfBodyParts';
import Equipments from './Equipments';
import ExerciseFetch from './ExerciseData'
import { options } from './Credentials.js';


const Exercise = ({bodyparts, equipments}) => {

  const [ data, setData ] = useState([])
  const [ exercise, setExercise ] = useState([])
  const [ props, setProps ] = useState([])
  const [ equ, setEqu ] = useState(false);
  const [ loading, setLoading ] = useState(false)
  const [ cls, setCls ] = useState('none')
  const [ c, sC] = useState('')
  const [ e, sE ] = useState('');
  const [ des, sDes ] = useState('none');

  const selectPart = (part) => {
      sC(part)
      fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${part}`, options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.log(err))

      setCls('block')
      sDes('block')
  }

  const getEquipment = () => {
    const listProps = []
    for ( var i = 0; i < data.length; i++){
      listProps.push(data[i].equipment)
    }

    var unq = listProps.filter((v, i, a) => a.indexOf(v) === i);
    setEqu(true)
    setProps(unq)
    setCls('none')
  }

  const selectEquipments = (equipment) => {
      const filtered = data.filter((item) => item.equipment === equipment)
      setExercise(filtered)
      sE(equipment)
      setLoading(true)
    }

  return (
    <>
      <p>Select Muscle Type</p>
      <div className='underline-p'></div>
      <BodyParts bodyparts={bodyparts} selectPart={selectPart}/>
      <div className='underline-divider'></div>
      <p style={{display : `${cls}`}}>Click On Equipment Type</p>
      <div style={{display : `${cls}`}} className='underline-p'></div>
      <button className='get-equipment' onClick={getEquipment}>Equipment Type</button>
    {equ &&
        <div>
          <p>Select Equipment Type</p>
          <div className='underline-muscle'></div>
          <Equipments equipments={props} selectEquipments={selectEquipments}/>
          <div className='underline-divider'></div>
        </div>
      }
      <section style={{display : `${des}`}}>
        <p>{c} - {e}</p>
        <div className='underline-muscle'></div>
      </section>

      <ExerciseFetch  exercise={exercise}/>
    </>
  )
}

export default Exercise;
