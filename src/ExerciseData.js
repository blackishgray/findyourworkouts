import { useState } from 'react';

const ExerciseFetch = ({ exercise }) => {
  return (
    <section className='section-exercise'>
      {exercise.map((item) => {
        const { id, bodyParts, gifUrl, name } = item;
        return (
          <article className='section-gif' key={id}>
            <img className='img-section' src={gifUrl} />
            <p>{name}</p>
          </article>
      )
      })}
    </section>

  )
}

export default ExerciseFetch;
