import React from 'react'

export default ({ label, onClick }) => (
    <button className="button" onClick={onClick}>
        {label}
    </button>
)
