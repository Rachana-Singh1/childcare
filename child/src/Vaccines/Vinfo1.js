import React from 'react';
import './Vinfo1.css';
function Vinfo1() {
  return (
    <div className='vinfo1-container'>
      <VaccineCard
        vaccineName="Hepatitis B Vaccine"
        dose="1 of 4"
        protectsAgainst="Hepatitis B infection; a liver infection caused by the Hepatitis B virus."
        toBeGiven="Within the first 24 hours after birth"
        howToProtect="The Hepatitis B vaccine can be provided alone or in combination vaccines that also help protect against other diseases, as part of routine immunization for infants."
      />
      <VaccineCard
        vaccineName="BCG Vaccine"
        dose="1 of 1"
        protectsAgainst="Tuberculosis"
        toBeGiven="Before discharge"
        howToProtect="BCG is currently the only available TB vaccine and can help protect against tuberculosis infection."
      />
      <VaccineCard
        vaccineName="OPV Vaccine"
        dose="1 of 1"
        protectsAgainst="Polio; a disease caused by a virus that can affect the nerves"
        toBeGiven="As soon as possible after birth"
        howToProtect="The polio vaccine can be provided alone or included in combination vaccines that also help protect against other diseases. "
      />
      <VaccineCard
        vaccineName="IPV (Inactivated Poliovirus Vaccine)"
        dose="Multiple doses (typically 4 doses)"
        protectsAgainst="Poliovirus"
        toBeGiven="Starting at 2 months of age"
        howToProtect="Provides immunity against poliovirus, preventing polio infection and its complications."
      />
      <VaccineCard
        vaccineName="DTaP Vaccine"
        dose="Multiple doses (typically 4 or 5 doses)"
        protectsAgainst="Diphtheria, Tetanus, Pertussis (Whooping Cough)"
        toBeGiven="Starting at 2 months of age"
        howToProtect=" Provides immunity against these serious bacterial infections."
      />
      {/* <VaccineCard
        vaccineName="Hepatitis A Vaccine"
        dose="1 of 2 (Second dose usually given 6 months after the first dose)"
        protectsAgainst="Hepatitis A virus"
        toBeGiven="Recommended at 12-23 months"
        howToProtect="Prevents Hepatitis A infection, which affects the liver"
      /> */}

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

export default Vinfo1;
