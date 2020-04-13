import React from 'react';
import ExperienceCard from "./ExperienceCard";

export default class ProfessionalExperience extends React.Component{
    constructor(props){
        super(props);
        this.scrollToHistory = this.scrollToHistory.bind(this);
    }

    componentDidMount(){
        this.scrollToHistory()
    }

    componentDidUpdate(){
        this.scrollToHistory()
    }

    scrollToHistory(){
        const employmentId = (this.props.history==="Minerals Processing Engineering") ? "employmentId_4" : "employmentId_7"
        var myElement = document.getElementById(employmentId);
        var topPos = myElement&&(myElement.offsetTop-150);
        document.getElementById('experienceCardsWrapper').scrollTop = topPos;
    }

    render(){
        const experienceCards = (this.props.content||[]).map((employment,index)=>{
            return (
                <ExperienceCard key={index} employment={employment}/>
            );
        })
        return <div id="professionalExperience">
            <h3>Professional Experience</h3>
            <div
                id="experienceCardsWrapper"
                className="experienceCardsWrapper">
                {experienceCards}
            </div>
        </div>
    }
}