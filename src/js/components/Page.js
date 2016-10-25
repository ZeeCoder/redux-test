import React from 'react'
import Button from './Button'

export default ({ className, onToggleClick }) => (
    <div className={ 'main main--' + className }>
        <Button label="Toggle background" onClick={() => { onToggleClick() }} />
    </div>
)
