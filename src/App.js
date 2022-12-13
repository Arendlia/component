import './App.css'
import React from 'react'
import Alerts from './componants/alerts/alerts'
import Navbar from './componants/layout/navbar/Navbar'
import CaseContener from './componants/case/case_contener'
import SwitchButton from './componants/buttons/switch_button'
import "bootstrap/dist/css/bootstrap.min.css"

import './scss/base.scss';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Alerts alert="basic" textBtn="Show Alert" title="Titre" type= "success" text= "texttttt"/>
      <Alerts alert="delete" textBtn="Show delete Alert" title="Supprimer le compte ?"  position= "top-end" denyButton={true} denyButtonText = "Oui" textButton="Non"/>
      <CaseContener dataType = "reassuranceData"/>
      <CaseContener dataType = "abonement"/>
      <SwitchButton/>
    </div>
  );
}

export default App;
