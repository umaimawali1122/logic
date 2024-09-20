import React from 'react';

const PrivacyPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.subHeading}>Effective Date: September 20, 2024</p>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>1. Introduction</h2>
        <p style={styles.text}>
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>2. Information We Collect</h2>
        <p style={styles.text}>
          We may collect both personal and non-personal information, including but not limited to your name, email address, browsing habits, and IP address.
        </p>
        <ul style={styles.list}>
          <li>Personal Data: Information you provide directly, such as through forms.</li>
          <li>Usage Data: Data automatically collected when using the site, such as your browser type and pages visited.</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>3. How We Use Your Information</h2>
        <p style={styles.text}>
          The information we collect is used to improve our services, personalize your experience, and communicate with you. We may also use your information for marketing purposes, but you can opt out at any time.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>4. Sharing Your Information</h2>
        <p style={styles.text}>
          We do not sell, trade, or rent your personal information to others. We may share information with trusted partners to help us perform services or improve the website.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>5. Data Security</h2>
        <p style={styles.text}>
          We implement security measures to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>6. Your Privacy Rights</h2>
        <p style={styles.text}>
          You have the right to access, correct, or delete your personal information at any time. Please contact us if you have any concerns or requests regarding your data.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>7. Changes to This Policy</h2>
        <p style={styles.text}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.
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
  list: {
    paddingLeft: '20px',
    color: '#555',
    listStyleType: 'disc',
  },
};

export default PrivacyPage;

