import React from 'react'

export default function Task(props) {
    const { task, handleRemove } = props;
    return (
        <div className='grid grid-cols-3 my-1'>
            <input type="checkbox" className='float-left'/>
            <span>{task.name}</span>
            <button className='bg-red-600 p-1' onClick={() => handleRemove(task)}>Delete</button>
        </div>
    )
}
