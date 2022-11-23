import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTruck, faBox, faCreditCard, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'


import Case from "./case"
import datas from "./../../datas/data.json"
library.add(faTruck, faBox, faCreditCard, faHandshakeAngle);
function CaseContener(props) {
    if(props.dataType === "reassuranceData"){
        return (
            <div className="case-contenant d-flex justify-content-around mw-25">
            {datas.reassuranceData.map((data, index) => {
                return (
                <div className="reassuranceCase mx-4 card-body shadow-lg p-3 bg-white rounded animate__bounce"  >
                    <Case data = {data} index = {index}/>
                </div>
                );
            })}
            </div>
            );
    }else if(props.dataType === "abonement"){
        return (
            <div className="case-contenant d-flex justify-content-around mw-25">
            {datas.abonement.map((data, index) => {
                return (
                <div className="abonementCase mx-4 card-body shadow-lg p-3 bg-white rounded" >
                    <Case data = {data} index = {index}/>
                </div>
                );
            })}
            </div>
            );
    }


}

export default CaseContener;