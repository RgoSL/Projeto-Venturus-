import React from "react";
import {Banner, Vantagens, Comentarios, SobreNos} from './pages/Home/components'
import { Footer} from './components/Footer'

const App = () => {
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

export default App