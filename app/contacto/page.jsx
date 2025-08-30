'use client'

import { useState } from 'react'
import styles from '@/styles/Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Mensaje enviado! (esto es una simulación)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Contacto</h1>
        <p>¿Tienes preguntas o comentarios? ¡Contáctanos!</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </div>
  )
}