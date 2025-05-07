import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {RoutesComponent} from './hooks/routes';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <RoutesComponent />
   </BrowserRouter>
   </>
  );
};

export {App};