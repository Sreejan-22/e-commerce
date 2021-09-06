import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        &copy; {new Date().getFullYear()} <span>Comfy Sloth</span> All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
