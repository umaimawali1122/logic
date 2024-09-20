import React from 'react';

const TermsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms and Conditions</h1>
      <p style={styles.subHeading}>Last updated: September 20, 2024</p>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>1. Introduction</h2>
        <p style={styles.text}>
          Welcome to our website. By accessing or using our services, you agree to comply with and be bound by these terms and conditions. Please review them carefully.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>2. Intellectual Property</h2>
        <p style={styles.text}>
          All content, logos, trademarks, and other materials provided on this website are the property of the company or its licensors. You are not permitted to use them without prior written consent.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>3. User Responsibilities</h2>
        <p style={styles.text}>
          As a user, you agree to use our services in a responsible manner and comply with all applicable laws and regulations. Any form of misuse, such as hacking or data theft, is strictly prohibited.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>4. Limitation of Liability</h2>
        <p style={styles.text}>
          We are not liable for any damages resulting from the use or inability to use our services. Your use of the site is at your own risk.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>5. Amendments to the Terms</h2>
        <p style={styles.text}>
          We reserve the right to modify or update these terms at any time. Any changes will be posted on this page with a new "Last Updated" date.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    color: '#333',
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#ff7f00', // orange for heading
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionHeading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    borderBottom: '2px solid #ff7f00', // orange outline for section headings
    paddingBottom: '10px',
    marginBottom: '15px',
  },
  text: {
    fontSize: '16px',
    color: '#555',
  },
};

export default TermsPage;
