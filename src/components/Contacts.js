import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import './contacs.css'

export default class Contacts extends React.Component{
    render(){
        return <div
            className="contacts"
            style={{fontSize:"1.2em"}}>
            <h3>Contacts</h3>
            <div>
                <FaLinkedin
                    onClick={()=> window.open("https://www.linkedin.com/", "_blank")}
                />
                <span

                    onClick={()=> window.open("https://www.linkedin.com/", "_blank")}
                > https://www.linkedin.com
                </span>
            </div>
            <div>
                <MdEmail
                    onClick={()=> window.open("mailto:contact@mail.com.au", "_blank")}
                />
                <span
                    onClick={()=> window.open("mailto:contact@mail.com.au", "_blank")}

                > contact@mail.com.au</span>
            </div>



        </div>
    }
}