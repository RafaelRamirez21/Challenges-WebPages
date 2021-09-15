import React, { useContext } from 'react';
import '../assets/styles/SectionProducts.scss';
import { DataContext } from '../Context';
import CardChallenge from './CardChallenge';

function Challenges() {
  const dataInitial = useContext(DataContext);

  return (
    <>
      <h2 className="title__challenges">Challenges gallery</h2>
      <section className="section__challenges">
        {dataInitial.map((item, index) => <CardChallenge
          key={index}
          item={item}
        />)}

      </section >
    </>
  )
}

export default Challenges
