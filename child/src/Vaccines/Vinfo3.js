import React from 'react';
import './Vinfo3.css';
function Vinfo3() {
  return (
    <div className='vinfo3-container'>
      
      <VaccineCard
        vaccineName="IPV (Inactivated Poliovirus Vaccine)"
        dose="4 dose of 4"
        protectsAgainst="Tuberculosis"
        toBeGiven="2 months, 4 months, 6-18 months, and 4-6 years "
        howToProtect="Provides immunity against poliovirus, preventing polio infection and its complications."
      />
     
      <VaccineCard
        vaccineName="DTaP Vaccine"
        dose="Multiple doses (typically 4 or 5 doses)"
        protectsAgainst="Diphtheria, Tetanus, Pertussis (Whooping Cough)"
        toBeGiven="Starting at 2 months, 4 months, 6-18 months, and 4-6 years "
        howToProtect=" Provides immunity against these serious bacterial infections."
      />
      

    </div>
  );
}

function VaccineCard({ vaccineName, dose, protectsAgainst, toBeGiven, howToProtect }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <h2>{vaccineName}</h2>
      <p><strong>Dose:</strong> {dose}</p>
      <p><strong>Protects against:</strong> {protectsAgainst}</p>
      <p><strong>To be given:</strong> {toBeGiven}</p>
      <p><strong>How can you help protect your child?</strong></p>
      <p>{howToProtect}</p>
    </div>
  );
}

export default Vinfo3;
