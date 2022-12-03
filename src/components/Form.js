import React, { useState } from 'react'

export default function Form(props) {
    const { handleAdd } = props;
    const [message, setMessage] = useState({ name: "", id: 0 });
    const handleChange = event =>{
        setMessage({ name: event.target.value, id: 0 });
        //console.log(event.target.value);
    }
    return (
        <div className='justify-center grid grid-cols-12'>
            <p className='text-center col-span-12'>Task To Do:</p>
            <input onChange={handleChange} id="newTask" name="newTask" className='text-black col-span-12 p-1' placeholder='Insert Task'/>
            <button className='col-span-12 bg-cyan-600 p-1 my-3' onClick={() => handleAdd(message)}>Add</button>
        </div>
    )
}
