import React from 'react'

const Menuitem = ({title,price,tags}) => {
  return (
    <div className='app__menuItem'>
      <div className='app__menuItem-head'>
        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
        </div>

        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{price}</p>
        </div>

        <div className='app__menuItem-name'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{tags}</p>
        </div>

      </div>
    </div>
  )
}

export default Menuitem