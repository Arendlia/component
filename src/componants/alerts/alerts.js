import React ,{ Component }from 'react'
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function Alerts(props) {
    const showAlert = (title = "Vous êtes sur ?", text = "This is an alert", type = "success", confirmButtonText = 'OK', position ='center', denyButton = false, denyButtonText="") => {
        if (props.alert == "basic" ){
        Swal.fire({
            title: title,
            text: text,
            icon: type,
            confirmButtonText: confirmButtonText,
          });
    }

    else if (props.alert == "delete")
        Swal.fire({
            position: position,
            title: title,
            showDenyButton: denyButton,
            denyButtonText: denyButtonText,
            confirmButtonText: confirmButtonText,
          }).then((result) => {
            if (result.isConfirmed) {
            } else if (result.isDenied) {
              Swal.fire('Contenu supprimé', '', 'success')
            }
          })
        }
        
            return(
                <div className="container d-flex justify-content-center">
                   <button onClick={()=>showAlert( props.title , props.text, props.type, props.textButton, props.position, props.denyButton, props.denyButtonText, props.confirmButtonText)} className="btn btn-primary">{props.textBtn}</button>
                </div>
            )
}
export default Alerts;