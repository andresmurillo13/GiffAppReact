import React from 'react'

const GiffITem = ({ title , url, id }) => {
    
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

export default GiffITem
