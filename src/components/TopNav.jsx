import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/style.css'


function TopNav() {
    return (
      <Navbar expand="lg"  bg="black" data-bs-theme="dark" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="#home"> <div className="logo">
                <img id='logo1' src="https://hazercloud.com/assets/images/logo/logo.png" alt="" />
            </div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
          <Navbar.Collapse className="justify-content-end text-white">

            <Nav.Link id="home" href="#link">Home</Nav.Link>
            <Nav.Link href="#link"><div class="dropdown">
  <button class="dropbtn">Services</button>
  <div class="dropdown-content">
  <a href="#">DevOps Engineers</a>
  <a href="#">CloudOps Engineers</a>
  <a href="#">SysOps Enineers</a>
  </div>
</div> </Nav.Link>
            <Nav.Link href="#link"><div class="dropdown">
  <button class="dropbtn">Soluions</button>
  <div class="dropdown-content">
  <a href="#">rediminePRO</a>
  <a href="#">managed Wordpress</a>
  <a href="#">Mattermost slack alternatives</a>
  </div>
</div></Nav.Link>
            <Nav.Link id="career" href="#link">Careers  </Nav.Link>
            <Nav.Link id="contact"  href="#link">Contact</Nav.Link>
            <Nav.Link id="hire" href="#link"><button id='hire'>Hire Now</button></Nav.Link>
          
            
            
        </Navbar.Collapse>
          </Navbar.Collapse>
       
        </Container>
      </Navbar>
    );
  }
  
  export default TopNav;