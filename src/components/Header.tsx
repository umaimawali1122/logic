import React from 'react';
import Link from 'next/link';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const hoverStyle = {
  color: 'lightgray',
};

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', backgroundColor: 'orange' }}>
      <Link href="/" style={linkStyle}>Home</Link>
      <Link href="/About" style={linkStyle}>About Us</Link>
      <Link href="/Contact" style={linkStyle}>Contact me</Link>
      <Link href="/Address" style={linkStyle}>My address</Link>
    </div>
  );
};

export default Header;



