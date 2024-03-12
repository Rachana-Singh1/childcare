import React from 'react';
import './Vinfo2.css';
function Vinfo2() {
  return (
    <div className='vinfo2-container'>
      <VaccineCard
        vaccineName="MMR Vaccine"
        dose="2 doses"
        protectsAgainst="Measles, Mumps, Rubella."
        toBeGiven="First dose at 12-15 months, Second dose at 4-6 years"
        howToProtect="Provides immunity against measles, mumps, and rubella viruses."
      />
      <VaccineCard
        vaccineName="Varicella (Chickenpox) Vaccine"
        dose="2 doses"
        protectsAgainst="Chickenpox (Varicella)"
        toBeGiven="First dose at 12-15 months, Second dose at 4-6 years"
        howToProtect="Provides immunity against chickenpox virus."
      />
      <VaccineCard
        vaccineName="DTaP Vaccine"
        dose="5 doses"
        protectsAgainst="Diphtheria, Tetanus, Pertussis (Whooping Cough)"
        toBeGiven="Starting at 2 months of age, with booster doses at 4-6 years"
        howToProtect="Provides immunity against these serious bacterial infections."
      />
      <VaccineCard
        vaccineName="IPV (Inactivated Poliovirus Vaccine)"
        dose="Multiple doses (typically 4 doses)"
        protectsAgainst="Poliovirus"
        toBeGiven="Starting at 2 months of age"
        howToProtect="Provides immunity against poliovirus, preventing polio infection and its complications."
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

export default Vinfo2;
