const Equipments = ({equipments, selectEquipments}) => {
    return (
      <>
        <section className='equipments-section'>
          {equipments.map((equipment, index) => {
            return (
              <button key={index} className='equipments-btn' onClick={ () => selectEquipments(equipment)} >
                {equipment}
              </button>
            )
          })}
        </section>
      </>
    )
}

export default Equipments;
