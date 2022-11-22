import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTruck, faBox, faCreditCard, faHandshakeAngle, faCloud, faBriefcase, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import './case.scss';
library.add(faTruck, faBox, faCreditCard, faHandshakeAngle, faCloud, faBriefcase, faBriefcaseMedical);

function Case(props) {
        const data = props.data;
        return(
                <div className='align-middle h-100'>
                  <h4 className = "primary-color"> <FontAwesomeIcon icon={data.icon}/></h4>
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.text}</p>
                  <div className="card-footer">
                  <p className = "primary-color">{data.price}</p>
                  </div>
                </div>);
}
export default Case;