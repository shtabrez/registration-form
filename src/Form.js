import React, { useEffect, useState } from 'react'

function Form() {
    const data = { name: '', email: '', password: '' };
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(data);
    useEffect(() => {
        console.log("Rgistered");
    }, [flag])
    function handleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All fields are Mandatory")
        }
        else {
            setFlag(true)
        }
    }
    return (
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Regitered Successfully</h2>:""}</pre>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration Form</h1>
            </div>
            <div>
                <input type="text" placeholder='Enter your Name' name='name' value={inputData.name} onChange={handleData} />
            </div>
            <div>
                <input type="text" placeholder='Enter your email' name='email' value={inputData.email} onChange={handleData} />
            </div>
            <div>
                <input type="text" placeholder='Enter your Password' name='password' value={inputData.password} onChange={handleData} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>

        </form>
        </>
    )
}

export default Form
