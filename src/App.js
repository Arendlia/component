import './App.css';
import React from 'react'
import Alerts from './componants/alerts/alerts'
import CaseContener from './componants/case/case_contener'
import Navbar from './componants/layout/Navbar'


function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Alerts alert="basic" textBtn="Show Alert" title="Titre" type= "success" text= "texttttt"/>
      <Alerts alert="delete" textBtn="Show delete Alert" title="Supprimer le compte ?"  position= "top-end" denyButton={true} denyButtonText = "Oui" textButton="Non"/>
      <CaseContener dataType = "reassuranceData"/>
      <CaseContener dataType = "abonement"/>

    </div>
  );
}

export default App;
