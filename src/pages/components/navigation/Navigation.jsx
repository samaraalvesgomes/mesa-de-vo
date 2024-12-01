import { Button, ButtonGroup, Link} from "@mui/material";
import styles from './navigation.module.css';

function Navigation() {
    return (
    <>
        <nav className={styles.nav}>
          <h3 style={{fontFamily:'Poppins', fontSize:'20px'}}>Mesa de vó</h3>
          

          <ButtonGroup variant="text" aria-label="Basic button group">

            <Link href="#scrollSobre" passHref>
              <Button className={styles.buttonNav} variant="contained"> Sobre </Button>
            </Link>
            <Link href="/Pedido" passHref>
              <Button className={styles.buttonNav} variant="contained"> Receitas </Button>
            </Link>
            <Link href="/Apadrinhamento" passHref>
              <Button className={styles.buttonNav} variant="contained"> Contato </Button>
            </Link>
          </ButtonGroup>

          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
          >
            <Link href="./sign-in-side/SignInSide" passHref>
              <Button style={{background:'blue'}} variant="contained"> Entrar </Button>
            </Link>
            <Link href="./sign-in-side/SignInSide" passHref>
              <Button className={styles.buttonNav} variant="contained"> Resgistre-se </Button>
            </Link>
          </ButtonGroup>

         
        </nav>
    </>
  );
}
export default Navigation;