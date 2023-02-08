import React from 'react'
// import Feature from '../feature/Feature'
import "./Summary.scss"

const Summary = () => {
    
    return (
        
        
        <div className="pm__summary square-animation" id="summary" >
            <div className="pm__summary-heading">
                <h1 className="styled-text">
                    You are at the right place if this sounds like you...
                </h1>
            </div>
            <div className="pm__summary-container">
                <div className="pm__summary-list">
                <ul>
                    <li>You are an organized person, and love connecting with others.</li>
                    <li>You are good at time management, and had a passion to strive for more.</li>
                    <li>You envision the future of a product, and hope ot make the product become better.</li>
                </ul>
                <ul>
                <li>You enjoy seeing the development process of a product, and enjoy the proccess of creating new feature points.</li>
                    <li>You love looking at different aspects of a product (e.g. target audience, market opportunity, business development, etc.).</li>
                </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Summary