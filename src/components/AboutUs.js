import React from 'react';
import './aboutMe.css';
import {isMobile} from 'react-device-detect';
const facepic = require('../resources/copa.jpg')

export default class AboutUs extends React.Component{

    getParagraphs(){
        if(this.props.content&&this.props.content.paragraphs){
            if(Array.isArray(this.props.content.paragraphs)){
                const paragraphs =this.props.content.paragraphs.map((paragraph,i)=>{
                    return <p key={i}>{paragraph}</p>
                });
                return <div>{paragraphs}</div>
            }else{
                const paragraphs =this.props.content.paragraphs.split('\n').map((paragraph,i)=>{
                    return <p key={i}>{paragraph}</p>
                });
                return <div>{paragraphs}</div>
            }

        }
    }
    render(){
       return <div className={"aboutMe "+"mobile_"+isMobile}>
           <div className="aboutMeInner">
               <div className="left">
                   <div className="picture">
                       <img src={facepic}/>
                   </div>

                   <p>Nossa imagem</p>
               </div>

               <div className="paragraphs">
                   <h3>{this.props.content.title}</h3>
                   {this.getParagraphs()}
               </div>
           </div>

        </div>
    }
}