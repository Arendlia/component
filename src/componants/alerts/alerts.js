import React ,{ Component }from 'react'
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

function Alerts(params = "") {
    const showAlert = (title = "Vous êtes sur ?", text = "This is an alert", type = "warning", confirmButtonText = 'OK', position ='center') => {
        if (paramsc == "" ){
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: confirmButtonText,
          });
    }

    else if (params == "delete")
        Swal.fire({
            position: position,
            title: 'title',
            showDenyButton: true,
            denyButtonText: `Supprimer`,
            confirmButtonText: 'Annuler',
          }).then((result) => {
            if (result.isConfirmed) {
            } else if (result.isDenied) {
              Swal.fire('Contenu supprimé', '', 'success')
            }
          })
        }
        
            return(
                <div className="container d-flex justify-content-center" style={{marginTop: 90}}>
                   <button onClick={()=>showAlert('alerte', 'Bonjour je suis une alerte', "error", "D'accord", 'top-end')} className="btn btn-primary btn-lg">Show Alert</button>
                </div>
            )
}
export default Alerts;