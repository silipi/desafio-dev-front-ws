import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../styles/components/credit.css';

export default function Credit() {
  const [credit, setCredit] = useState({});

  useEffect(() => {
    axios.get('db.json')
    .then(res => {
      const creditData = res.data.credit;
      setCredit(creditData)})
    }, 
  []);

  return (
    <div id="card-credit">
      <h1>Limite de crédito:</h1>
      <div className="credit-designed">
        <h2>{credit?.designed ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(credit?.designed) : "-"}</h2>
        <span>Concebido</span>
      </div>
      <div className="credit-avaliable">
        <h2>{credit?.avaliable ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(credit?.avaliable) : "-"}</h2>
        <span>Disponível</span>
      </div>
    </div>
  )
}
