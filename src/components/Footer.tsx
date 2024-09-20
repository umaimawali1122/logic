import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', backgroundColor: 'black', position: 'fixed', bottom: 0, width: '100%' }}>
        <Link href="/Privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link>
        <Link href="/Terms" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</Link>
        <Link href="/Support" style={{ color: 'white', textDecoration: 'none' }}>Support</Link>
      </div>
    );
  };
  
  export default Footer;
  
  