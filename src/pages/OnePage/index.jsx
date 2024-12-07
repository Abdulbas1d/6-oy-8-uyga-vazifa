import React, { useEffect, useState } from 'react'
import './index.css'
import { usersData } from '../../axios'

function OnePage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        usersData.get("users")
            .then(response => {
                if (response.status == 200) {
                    setData(response.data)
                }
            })

            .catch(error => {
                console.log(error);
            })
    }, [])

    function validate() {
        if (!name) {
            alert("Ismingiz kiriting!")
            return false
        }

        if (name.length < 3) {
            alert("Ismingiz eng kamida 3 ta belgidan iborat bo'lishi kerak!")
            return false
        }

        if (!email) {
            alert("Email Addresingizni kiriting!")
            return false
        }

        if (!email.endsWith("@gmail.com")) {
            alert(`Email Addresingizni oxiri "@gmail.com" bilan tugashi kerak!`)
            return false
        }

        return true
    }

    function handleAdd(event) {
        event.preventDefault()

        let isValid = validate()
        if (!isValid) {
            return false
        }

        const newData = {
            name: name,
            email: email
        }

        setData([...data, newData])

        setName("")
        setEmail("")
    }

    return (
        <div className='container'>
            <h2 className='titleOne'>Howework One</h2>

            <form onSubmit={handleAdd} className="form">
                <label htmlFor="name">Ismingizni kiriting!</label>
                <input value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' type="text" placeholder='Enter your name...' />

                <label htmlFor="email">Emailingizni kiriting!</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' type="email" placeholder='Enter your email address...' />

                <button type='submit' className="buttonOne">Submit</button>
            </form>

            <div className="cards">
                {
                    data && data.map((value, index) => (
                        <div key={index} className="card">
                            <p><strong>Name:</strong>{" "} {value.name}</p>
                            <p><strong>Email:</strong>{" "} {value.email}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OnePage
