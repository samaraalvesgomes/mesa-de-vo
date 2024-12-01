import { Button, ButtonGroup, Link} from "@mui/material";
import styles from './navigation.module.css';

function Navigation() {
    return (
    <>
        <nav className={styles.nav}>
          <h3 className={styles.titleNav} >Mesa de vó</h3>
          

          <ButtonGroup className={styles.buttonGroup} variant="text" aria-label="Basic button group">

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

          <ButtonGroup className={styles.buttonGroupLogin} variant="text" aria-label="Basic button group" >
            <Link href="./sign-in-side/SignInSide" passHref>
              <Button className={styles.buttonNavEnter} variant="contained"> Entrar </Button>
            </Link>
            <Link href="./sign-in-side/SignInSide" passHref>
              <Button className={styles.buttonNavRegister} variant="contained"> Resgistre-se </Button>
            </Link>
          </ButtonGroup>

         
        </nav>
    </>
  );
}
export default Navigation;