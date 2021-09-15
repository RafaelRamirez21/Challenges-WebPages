import React from 'react';
import '../assets/styles/Homepages.scss';
import Challenges from './Challenges';
import NavSearch from './NavSearch';
function Homes() {
  let array = []
  return (
    <>
      <section className="homepages">

        <h1 ><span className='blue'>J</span>
          <span className='red'>a</span>
          <span className='yellow'>v</span>
          <span className='blue'>a</span>
          <span className='green'>S</span>
          <span className='red'>c</span>
          <span className='blue'>r</span>
          <span className='yellow'>i</span>
          <span className='red'>p</span>
          <span className='green'>t</span>
        </h1>
        <NavSearch />

      </section>

    </>
  )
}

export default Homes
