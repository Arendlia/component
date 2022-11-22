import React from 'react'
import Swal from "sweetalert2";

import PropTypes from "prop-types";

function Alerts({
  alert, title,  position, textButton, denyButton, denyButtonText, text, type, textBtn
}) {
    const showAlert = () => {
        if (alert === "basic" ){
        Swal.fire({
            position: position,
            title: title,
            text: text,
            icon: type,
            confirmButtonText: textButton,
          });
    }

    else if (alert === "delete")
        Swal.fire({
            position: position,
            title: title,
            showDenyButton: denyButton,
            denyButtonText: denyButtonText,
            confirmButtonText: textButton,
          }).then((result) => {
            if (result.isConfirmed) {
            } else if (result.isDenied) {
              Swal.fire('Contenu supprimé', '', 'success')
            }
          })
        }
        
            return(
                <div className="container d-flex justify-content-center">
                   <button onClick={()=>showAlert()} className="btn btn-primary">{textBtn}</button>
                </div>
            )
}
Alerts.propTypes = {
  title : PropTypes.string,
  text : PropTypes.string, 
  type : PropTypes.string, 
  textButton: PropTypes.string, 
  position :PropTypes.string, 
  denyButton : PropTypes.bool, 
  denyButtonText:PropTypes.string,
  textBtn : PropTypes.string,
}
Alerts.defaultProps = {
  title : "Vous êtes sur ?", 
  text : "This is an alert", 
  type : "success", 
  textButton: "OK", 
  position :'center', 
  denyButton : false, 
  textBtn : "Button"
}
export default Alerts;