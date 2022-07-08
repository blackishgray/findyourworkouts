import { options } from './Credentials';

const BodyParts = ({bodyparts, selectPart}) => {
    return (
      <>
        <section className='bodyparts-section'>
          {bodyparts.map((part, index) => {
            return (
                <button key={index} className='bodyparts-btn' onClick={ () => selectPart(part)} >
                  {part}
                </button>
            )
          })}
        </section>
      </>
    )
}

export default BodyParts;
