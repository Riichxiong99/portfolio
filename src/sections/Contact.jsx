
import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    })

    if (response.ok) {
      setStatus('Message sent! I will get back to you soon.')
      form.reset()
    } else {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <div id="contact" className="fade-section" style={{ minHeight: '100vh', padding: '100px 48px' }}>
      <h2>Contact</h2>
      <p>I'm currently open to opportunities — feel free to reach out.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />

        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="your@email.com" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" placeholder="What's on your mind?" required />
        </div>

        <button type="submit">Send message</button>

        {status && <p style={{ marginTop: 16, color: '#2C2416' }}>{status}</p>}
      </form>
    </div>
  )
}

export default Contact