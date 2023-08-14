// TODO: adjust font not showing up
// https://stackoverflow.com/questions/15960290/css-footer-not-displaying-at-the-bottom-of-the-page

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#513484', padding: '20px', textAlign: 'center'}}>
        <div className="justify-centre">
          <p className="text-white">&copy; {new Date().getFullYear()} Notta Lab. All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer;
