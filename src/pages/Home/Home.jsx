import React from "react";
import {Banner, Vantagens, Comentarios, SobreNos} from './components'
import { Footer} from '../../components/Footer'

const Home = () => {
  return (
   <>
   <Banner />
   <Comentarios />
   <Vantagens />
   <SobreNos />
   <Footer />
   </>
  );
};

export {Home};