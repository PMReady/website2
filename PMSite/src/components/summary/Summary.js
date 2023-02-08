import React from 'react'
import Feature from '../feature/Feature'
import "./Summary.scss"

const Summary = () => {
    
    return (
        
        
        <div className="pm__summary square-animation" id="summary" >
            <div className="pm__summary-feature">
                <Feature title="PMReady" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
            </div>
            <div className="pm__summary-heading">
                <h1 className="styled-text">
                    Develop. Create. Innovate.
                </h1>
                <p>Click here for meeting info!</p>
            </div>
            <div className="pm__summary-container">
                <Feature title="Feature 1" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
                <Feature title="Feature 2" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
                <Feature title="Feature 3" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."/>
            </div>
        </div>
    )
}

export default Summary