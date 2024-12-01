import { Button, ButtonGroup, Link} from "@mui/material";

function Navigation() {
    return (
    <>
        <nav style={{background: 'RGBA(255,255,255,0.2)', display:'flex', alignItems: 'center', padding: '15px 0px', justifyContent:'center', fontSize:'15px', border: '2px solid white', minWidth:'100%'}}>
          <h3 style={{fontFamily:'Poppins', fontSize:'20px'}}>Mesa de vó</h3>
          

          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
          >
            <Link href="#scrollSobre" passHref>
              <Button style={{ background: "none", border: "none", fontFamily: "Poppins", fontSize: "16px", textTransform: "none"}} variant="contained"> Sobre </Button>
            </Link>
            <Link href="/Pedido" passHref>
              <Button style={{background:'none'}} variant="contained"> Receitas </Button>
            </Link>
            <Link href="/Apadrinhamento" passHref>
              <Button style={{background:'none'}} variant="contained"> Contato </Button>
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
              <Button style={{background:'none'}} variant="contained"> Resgistre-se </Button>
            </Link>
          </ButtonGroup>

         
        </nav>
    </>
  );
}
export default Navigation;