import React from 'react'

function Testing({ title, children }) {
  return (
    <div>
        <h1 className={`${title} text-2xl font-bold mb-1 uppercase`}>
            Testing
        </h1>
        {children}
    </div>
  )
}

export default Testing