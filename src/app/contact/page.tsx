import React from 'react'

const contact = () => {
  return (
   <div>
    <section className="contact-form">
      <h2 className='fade-in'>Contact Us</h2>
      <form>
        <input type="text" placeholder=" Full Name" required />
        <input type="email" placeholder="Email Address" required/>
        <input type="tel" placeholder="Phone Number" />
       <textarea placeholder="Your Message" rows={5} required/>
        <button type="submit">Send Message</button>
        </form>
      </section>
   </div>
  )
}

export default contact