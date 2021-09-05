import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Logo from '../assets/logo-1-1.png';
import './NavigationBar.css'

export default class NavigationBar extends React.Component {
    constructor() {
        super();
        this.state = {
          barIsVisible:'navbar navbar-expand-lg navbar-light scroll',
          hideLogo:'',
          activeKey:'#home'
        }
      }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    handleScroll = (e) => {
        if (window.scrollY > 20 && (window.innerWidth > 500)) {
          this.setState({barIsVisible: 'navbar navbar-expand-lg navbar-light', hideLogo:'hideLogo'}); 
        } else {
          this.setState({barIsVisible: 'navbar navbar-expand-lg navbar-light scroll', hideLogo:''});
        }
      }

    getActiveKey = (e) => {
        const activeKey = `#${e.target.innerText.toLowerCase()}`;
        this.setState({activeKey: activeKey});
    }
 
    render() {
        return (
            <React.Fragment>  
                <Navbar collapseOnSelect expand="lg" className={`${this.state.barIsVisible}`} >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className={`${this.state.hideLogo}`} href="#home"><img src={Logo} alt="logo"/></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={`${this.state.activeKey}`} className="m-auto">
                        
                            <Nav.Link href="#home"><span onClick={this.getActiveKey}>HOME</span></Nav.Link>
                            <Nav.Link href="#about us"><span onClick={this.getActiveKey}>ABOUT US</span></Nav.Link>
                            <Nav.Link href="#calendar"><span onClick={this.getActiveKey}>CALENDAR</span></Nav.Link>
                            <Nav.Link href="#register"><span onClick={this.getActiveKey}>REGISTER</span></Nav.Link>
                            <Nav.Link href="#support"><span onClick={this.getActiveKey}>SUPPORT</span></Nav.Link>
                            <Nav.Link href="#contact"><span onClick={this.getActiveKey}>CONTACT</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          </React.Fragment>  
        )
    } 
}
