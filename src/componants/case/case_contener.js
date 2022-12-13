import React from 'react'
import Case from "./case"
import datas from "./../../datas/data.json"


function CaseContener(props) {
    if(props.dataType === "reassuranceData"){
        return (
            <div className="case-contenant contenant-reassurance d-flex mw-25">
            {datas.reassuranceData.map((data, index) => {
                return (
                <div className="reassuranceCase mx-4 card-body shadow p-3 rounded animate__bounce" >
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
                <div className="abonementCase mx-4 card-body shadow-lg p-3 rounded" >
                    <Case data = {data} index = {index}/>
                </div>
                );
            })}
            </div>
            );
    }


}

export default CaseContener;