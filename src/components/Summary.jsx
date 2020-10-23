import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import AvatarImg from '../images/avatar.svg';

import '../styles/components/summary.css';

export default function Summary () {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    axios.get('db.json')
    .then(res => {
      const customerData = res.data.customer;
      setCustomer(customerData)})
    }, 
  []);

  return (
    <div id="card-summary">

      <h1>Informações gerais:</h1>
      <header>
        <img src={AvatarImg} alt="Perfil"/>

        <div>
          <h2>{customer?.name}</h2>
          <span>{customer?.company}</span>
        </div> 
      </header>

      <section>
        <div className="contact-details">
          <MdPhone size={22}/>
          <div>
            <p>{customer?.contact?.phones[0]?.number}</p>
            <span>{customer?.contact?.phones[0]?.type}</span>
          </div>
        </div>

        <div className="contact-details">
          <MdEmail size={22}/>
          <div>
            <p>{customer?.contact?.emails[0]?.email}</p>
            <span>{customer?.contact?.emails[0]?.type}</span>
          </div>
        </div>
      </section>

      <footer>
        <a target="_blank" rel="noopener noreferrer" href={customer?.social?.facebook} className="social-icon"><FaFacebook size={24} /></a>
        <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${customer?.social?.whatsapp}`} className="social-icon"><FaWhatsapp size={24} /></a>
        <a target="_blank" rel="noopener noreferrer" href={customer?.social?.instagram} className="social-icon"><FaInstagram size={24} /></a>
        <a target="_blank" rel="noopener noreferrer" href={customer?.social?.twitter} className="social-icon"><FaTwitter size={24} /></a>
        <a target="_blank" rel="noopener noreferrer" href={customer?.social?.linkedin} className="social-icon"><FaLinkedin size={24} /></a>
      </footer>
    </div>
  )
}
