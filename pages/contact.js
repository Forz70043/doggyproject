import React, { useState } from "react"
import ContactForm from "@/components/ContactForm"
import Description from "@/components/Description"
import Footer from "@/components/Footers/Footer"

export default function Contact() {
  
  //https://www.formbackend.com/f/664decaabbf1c319
  return (
    <div>
        <Description />
        <ContactForm />
        <Footer />
    </div>
  )
}