import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../node_modules/react-bootstrap/Navbar";
import Nav from "../node_modules/react-bootstrap/Nav";
import NavDropdown from "../node_modules/react-bootstrap/NavDropdown";
import {FaFacebook, FaLinkedin, FaFlagUsa} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import AboutUs from "./components/AboutUs";
import Form from "../node_modules/react-bootstrap/Form";
import {isMobile} from 'react-device-detect';
import Flag from './components/flag/Flag'
import { GiBrazil} from "react-icons/gi";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import ProfessionalExperience from "./components/professional_experience/ProfessionalExperience";

const logo = require('./resources/placeholder.png');
const logo_mobile = require('./resources/logo_mobile.png');
const facePic = require('./resources/copa.jpg')
const content = require('./components/content')
// import Form from "../node_modules/react-bootstrap/Form";
// import Button from "../node_modules/react-bootstrap/Button";
// import FormControl from "../node_modules/react-bootstrap/FormControl";

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content:null,
            language: "en"
        }
        this.closeNav = this.closeNav.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLanguage = this.handleLanguage.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.setNavExpanded = this.setNavExpanded.bind(this);
    }
    componentDidMount(){
    }

    handleLanguage(language){
        if(language&&(language!==this.state.language)){
            this.setState({language:language})
            this.handleChange({target:{name:this.state.contentLabel}},language)
        }
    }
    handleChange(e,language){
        if(e&&e.target&&e.target.name){
            const item = e.target.name.split("_")
            switch(item[0]){
                case 'AboutUs':
                    this.setState(
                        {
                            content:<AboutUs content={content[language || this.state.language]["About Us"]}/>,
                            contentLabel: e.target.name
                        });
                    break;
                case 'Skills':
                    this.setState({
                        content: <Skills  skills={content[language || this.state.language]["skills"]}/>,
                        contentLabel: e.target.name
                    });
                    break;
                case 'Professional Experience':
                    this.setState({
                        content: <ProfessionalExperience
                            content={content[language || this.state.language]["EmploymentHistory"]}
                            history={item[1]}/>,
                        contentLabel: e.target.name
                    });
                    break;
                case 'Contacts':
                    this.setState({
                        content: <Contacts/>,
                        contentLabel: e.target.name
                    })
                    break;
                default:
                    this.setState({content: ""});
                    break;
            }
        }
        this.closeNav()

    }
    getInitialState () {
        return {
            navExpanded: false
        }
    }
    setNavExpanded(expanded) {
        this.setState({ navExpanded: expanded });
    }
    closeNav() {
        this.setState({ navExpanded: false });
    }

    getBrand(){
        if(isMobile){
            const brands = []
            brands.push(facePic);
            brands.push(logo)
            return brands.map((brand,i)=>{
                let height = '80vh';
                if(i===1){
                    height='40vh'
                }
                return (
                    <Navbar.Brand key={i}>
                        <img src={brand} height={height}/>
                    </Navbar.Brand>
                );
            });
        }
        return (
            <Navbar.Brand>
                <img src={logo} height={"80vh"}/>
            </Navbar.Brand>
        );
    }
    render(){
        console.log(isMobile)
        return (
            <div className={"App "+"mobile_"+isMobile}>
                <Navbar
                    bg="light"
                    expand="lg"
                    onToggle={this.setNavExpanded}
                    expanded={this.state.navExpanded}
                >
                    {this.getBrand()}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            onSelect={this.closeNav}
                            className="mr-auto">
                            <Nav.Link name="AboutUs" onClick={this.handleChange}>About us</Nav.Link>

                            <NavDropdown title="Professional Experience" id="basic-nav-dropdown">
                                <NavDropdown.Item name="Professional Experience_Software Engineering" onClick={this.handleChange}>Software Engineering Experience</NavDropdown.Item>
                                <NavDropdown.Item name="Professional Experience_Minerals Processing Engineering" onClick={this.handleChange}>Minerals Processing Experience</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item name="Skills_Skills set" onClick={this.handleChange}>Skills set</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link name="Contacts" onClick={this.handleChange}>Contacts</Nav.Link>
                        </Nav>

                        <Form inline>
                            <div className="languageFlags">
                                <div className={"imgWrapper "} onClick={()=>this.handleLanguage("pt")}>
                                    <Flag
                                        selectedCountry={(this.state.language==="en") ? "australia": "brazil"}
                                        onClick={()=>this.handleLanguage("pt")}
                                        country="brazil"
                                    />
                                    <div className="imgShadow"></div>
                                </div>
                                <div className={"imgWrapper"} onClick={()=>this.handleLanguage("en")}>
                                    <Flag
                                        selectedCountry={(this.state.language==="en") ? "australia": "brazil"}
                                        onClick={()=>this.handleLanguage("en")}
                                        country="australia"
                                    />
                                    <div className="imgShadow"></div>
                                </div>

                            </div>

                        {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                        {/*<Button variant="outline-success">Search</Button>*/}
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div className="content">
                    {this.state.content || <AboutUs content={content[this.state&&this.state.language ||"en"]["About Us"]}/>}
                </div>
                <div className="footer">
                    <FaLinkedin
                        onClick={()=> window.open("https://www.linkedin.com", "_blank")}
                    />
                    <MdEmail
                        onClick={()=> window.open("mailto:contact@mail.com.au", "_blank")}

                    />
                </div>
            </div>
        );
    }
}

