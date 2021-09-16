import React from 'react';
import Homes from '../components/Home';
import Challenges from '../components/Challenges';
import { Dataprovider } from '../Context';
import Header from '../components/Header';
import Footer from '../components/Footer';


const App = () => {

  return (
    <Dataprovider>
      <Header />
      <Homes />
      <Challenges />
      <Footer />
    </Dataprovider>

  )
}

export default App;