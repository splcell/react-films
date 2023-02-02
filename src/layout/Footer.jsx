function Footer(){
    return(
        <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/splcell/react-films/tree/main">Repo</a>
          </div>
      </footer>
    );
}

export default Footer;