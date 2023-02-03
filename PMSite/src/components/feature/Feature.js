import React from 'react'

const Feature = ({ title, text }) => {
  return (
    <div className="pm__features-container">
        <div className="pm__features-container-title">
            <h1>{title}</h1>
        </div>
        <div className="pm__features-container_feature-text">
            <p>{text}</p>
        </div>
    </div>

  )
}

export default Feature