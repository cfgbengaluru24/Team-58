import React from 'react'
import './program.css'
import logoimg from '../../assets/logo.png'

export default function Program() {
  return (
    <div className='program'>
      <div className='image'>
        <img src={logoimg}/>
      </div>
      <div className='text'>
        <h2>Program1</h2>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis ea facere aliquam necessitatibus, excepturi deserunt explicabo minus nihil consequatur recusandae! Voluptatibus magni deserunt qui quae velit, numquam labore placeat officiis.</span>
      </div>
    </div>
  )
}
