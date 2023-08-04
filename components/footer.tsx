

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p>&copy; {new Date().getFullYear()} Notta Lab. All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;
