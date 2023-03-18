import React, { useState } from "react"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footers/Footer"
import Navbar from "@/components/Navbar"

export default function Contact() {
  
  //https://www.formbackend.com/f/664decaabbf1c319
  return (
    <div>
        <Navbar />
        <ContactForm />
        <Footer />
    </div>
  )
}