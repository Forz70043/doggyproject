import styles from '@/styles/Home.module.css'
import React, { useState } from "react"

export default function ContactForm(props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setLoading] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")
    
    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
    
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
    }
    
    const submitForm = (e) => {
        // We don't want the page to refresh
        setLoading(true)
        e.preventDefault()
    
        const formURL = e.target.action
        
        console.log(formData);
        console.log("js", JSON.stringify(formData));
        
        // Turn our formData state into data we can use with a form submission
        //let data = new FormData();
        /*Object.entries(formData).forEach(([key, value]) => {
          data.append(key, value);
        })*/

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            setLoading(false);
            setFormData({ 
                name: "", 
                email: "", 
                message: "" 
            })
            console.log("rrr",data.data);
            setFormSuccess(true)
            setFormSuccessMessage(data.data)
        })
    }
    if(isLoading) return <div id="loading"></div>
    else if(formSuccess){
        return (<><div>{formSuccessMessage}</div></>)
    }
    else
    return (
    <>
            <form method="POST" action="/api/form" onSubmit={submitForm}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleInput} value={formData.name} required/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={handleInput} value={formData.email} required/>
                </div>

                <div>
                    <label>Message</label>
                    <textarea name="message" onChange={handleInput} value={formData.message} minLength="15"></textarea>
                </div>

                <button type="submit">Send message</button>
            </form>
    </>
    )
      
}