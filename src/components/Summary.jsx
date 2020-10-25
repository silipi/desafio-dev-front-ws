import React from 'react';
import PropTypes from 'prop-types';

import { MdEmail, MdPhone } from 'react-icons/md';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import AvatarImg from '../images/avatar.svg';

import '../styles/components/summary.css';

export default class Summary extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  }

  render() {
    const { data } = this.props;

    return (
      <div id="card-summary">

        <h1>Informações gerais:</h1>
        <header>
          <img src={AvatarImg} alt="Perfil"/>

          <div>
            <h2>{data?.name}</h2>
            <span>{data?.company}</span>
          </div> 
        </header>

        <section>
          <div className="contact-details">
            <MdPhone size={22}/>
            <div>
              <p>{data?.contact?.phones[0]?.number}</p>
              <span>{data?.contact?.phones[0]?.type}</span>
            </div>
          </div>

          <div className="contact-details">
            <MdEmail size={22}/>
            <div>
              <p>{data?.contact?.emails[0]?.email}</p>
              <span>{data?.contact?.emails[0]?.type}</span>
            </div>
          </div>
        </section>

        <footer>
          <a target="_blank" rel="noopener noreferrer" href={data.social?.facebook} className="social-icon"><FaFacebook size={24} /></a>
          <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${data.social?.whatsapp}`} className="social-icon"><FaWhatsapp size={24} /></a>
          <a target="_blank" rel="noopener noreferrer" href={data.social?.instagram} className="social-icon"><FaInstagram size={24} /></a>
          <a target="_blank" rel="noopener noreferrer" href={data.social?.twitter} className="social-icon"><FaTwitter size={24} /></a>
          <a target="_blank" rel="noopener noreferrer" href={data.social?.linkedin} className="social-icon"><FaLinkedin size={24} /></a>
        </footer>
      </div>
    )
  }
}
