import React from 'react'
import './progresses.scss';




function Progresses(props) {
        var color
        if (props.width && !props.invers){
            if (props.width < props.successLimit){
               color = 'success'   
            }else if (props.width >=props.successLimit && props.width <= props.dangerLimit){
                color = 'warning' 
            }else if (props.width > props.dangerLimit){
                color = 'danger'
            }
        }

        if (props.width && props.invers){
            if (props.width > props.successLimit){
               color = 'success'   
            }else if (props.width >=props.dangerLimit && props.width <= props.successLimit){
                color = 'warning' 
            }else if (props.width < props.dangerLimit){
                color = 'danger'
            }
        }
        return(
            <div className='progress-container mx-auto'>
                <p className="my-auto">{props.name} : </p>
                <div className="progress my-auto mx-3">
                    <div className={"progress-bar " + color} style={{width : props.width + "%"}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className={"my-auto "+ color}>{props.width + "%"}</p>
            </div>
        );
    
}export default Progresses;