import React from 'react';
import Homes from '../components/Home';
import Challenges from '../components/Challenges';
import { Dataprovider } from '../Context';


const App = () => {

  return (
    <Dataprovider>
      <Homes />
      <Challenges />
    </Dataprovider>
  )
}

export default App;