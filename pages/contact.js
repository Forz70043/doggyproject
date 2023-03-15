import { useState } from 'react'
import validator from 'validator'
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })
  

const [errors, setErrors] = useState({})

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
      
        // Validazione del modulo
        const newErrors = {}
      
        if (!name) {
          newErrors.name = 'Please enter your name'
        }
      
        if (!validator.isEmail(email)) {
          newErrors.email = 'Please enter a valid email address'
        }
      
        if (!message) {
          newErrors.message = 'Please enter a message'
        }
      
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors)
          return
        }
      
        // Invio del modulo
        try {
          const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: 'New contact form submission',
            html: `
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>
            `,
          })
      
          console.log('Message sent: %s', info.messageId)
          setName('')
          setEmail('')
          setMessage('')
        } catch (error) {
          console.error(error)
        }
      }
      
  

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && <div>{errors.name}</div>}
      
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
      
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          {errors.message && <div>{errors.message}</div>}
      
          <button type="submit">Send</button>
        </form>
      )
      
}

export default Contact
