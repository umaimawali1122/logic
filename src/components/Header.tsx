import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', backgroundColor: 'orange' }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link href="/About" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
      <Link href="/Contact" style={{ color: 'white', textDecoration: 'none' }}>Contact me</Link>
      <Link href="/Address" style={{ color: 'white', textDecoration: 'none' }}>My address</Link>
    </div>
  );
};

export default Header;