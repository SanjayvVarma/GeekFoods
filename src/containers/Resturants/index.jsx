import React from 'react'
import data from './data';
import List from './list'

const Resturants = () => {
  return (
    <div>
       <List restaurants={data} />
    </div>
  )
}

export default Resturants;
