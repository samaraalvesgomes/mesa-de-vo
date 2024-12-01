import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from './styles.module.css';


function Footer() {
  return (
    <>
    
      <div className={styles.intro}>
        <div className={styles.title}>Desenvolvedores</div>
        <div className={styles.cardRow}>
          <div className={styles.cardNames}>
            <h3 className={styles.names}>Eduardo Vitor</h3>
            <div className={styles.contentLink}>
              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://www.linkedin.com/in/eduardo-vítor/"
              >
                <LinkedInIcon />
                <p>eduardo-vítor</p>
              </a>

              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://github.com/EduardoVitor020"
              >
                <GitHubIcon />
                <p>EduardoVitor020</p>
              </a>
              <div />
            </div>
          </div>
          <div className={styles.cardNames}>
            <h3 className={styles.names}>Hadriel Gomes</h3>
            <div className={styles.contentLink}>
              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://www.linkedin.com/in/gomeshadriel/"
              >
                <LinkedInIcon />
                <p>gomeshadriel</p>
              </a>

              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://github.com/gomeshadriel"
              >
                <GitHubIcon />
                <p>gomeshadriel</p>
              </a>
              <div />
            </div>
          </div>
          <div className={styles.cardNames}>
            <h3 className={styles.names}>Juan Pablo</h3>
            <div className={styles.contentLink}>
              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://www.linkedin.com/in/juanpabloflg/"
              >
                <LinkedInIcon />
                <p>juanpabloflg</p>
              </a>

              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://github.com/juanpabloflg"
              >
                <GitHubIcon />
                <p>juanpabloflg</p>
              </a>
              <div />
            </div>
          </div>
          <div className={styles.cardNames}>
            <h3 className={styles.names}>Milena Mafra</h3>
            <div className={styles.contentLink}>
              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://www.linkedin.com/in/milenamafra/"
              >
                <LinkedInIcon />
                <p>milenamafra</p>
              </a>

              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://github.com/milenamafra96"
              >
                <GitHubIcon />
                <p>milenamafra96</p>
              </a>
              <div />
            </div>
          </div>
          <div className={styles.cardNames}>
            <h3 className={styles.names}>Samara Alves</h3>
            <div className={styles.contentLink}>
              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://www.linkedin.com/in/samaraalvesg/"
              >
                <LinkedInIcon />
                <p>samaraalvesg</p>
              </a>

              <a
                target="_blank"
                className={styles.socialMedia}
                href="https://github.com/samaraalvesgomes"
              >
                <GitHubIcon />
                <p>samaraalvesgomes</p>
              </a>
              <div />
            </div>
          </div>
        </div>
        <div className={styles.grandma}>
          <img className={styles.photo} src="./img/vovo.png"></img>
          <h2 className={styles.finalContent}>Bon appétit!</h2>
        </div>
      </div>    
    </>
  );
}
export default Footer;