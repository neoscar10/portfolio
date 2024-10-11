import styles from './FooterStyles.module.css';

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {year} Adamu Haladu <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;