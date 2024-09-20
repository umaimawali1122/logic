import React from 'react';

const SupportPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Support Center</h1>
      <p style={styles.subHeading}>How can we assist you?</p>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>1. Contact Us</h2>
        <p style={styles.text}>
          If you need assistance, feel free to reach out to our support team. We're here to help with any technical issues, account inquiries, or general questions.
        </p>
        <ul style={styles.list}>
          <li>Email: support@website.com</li>
          <li>Phone: +1 234 567 890</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>2. Frequently Asked Questions (FAQs)</h2>
        <p style={styles.text}>
          We’ve compiled a list of frequently asked questions to help you find answers quickly. Topics include account management, technical troubleshooting, and billing issues.
        </p>
        <ul style={styles.list}>
          <li>Account-related Questions</li>
          <li>Technical Issues</li>
          <li>Billing and Payments</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>3. Troubleshooting Guides</h2>
        <p style={styles.text}>
          Our troubleshooting guides cover a wide range of issues, from login problems to performance improvements. These guides can help you resolve issues without needing further support.
        </p>
        <ul style={styles.list}>
          <li>How to Fix Login Issues</li>
          <li>Improving App Performance</li>
          <li>Preventing Application Crashes</li>
        </ul>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>4. Live Chat Support</h2>
        <p style={styles.text}>
          For real-time assistance, our live chat is available to connect you directly with a support agent. This is the fastest way to get help for urgent issues.
        </p>
        <button style={styles.button}>Start Live Chat</button>
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
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff7f00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default SupportPage;

