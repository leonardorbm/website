import React from 'react';
import './experienceCard.css'
export default class ExperienceCard extends React.Component{
    constructor(props){
        super(props);
        this.getDuration = this.getDuration.bind(this);
    }

    getMonth(date){
        const mapper = {
            0: "Jan",
            1: "Feb",
            2: "Mar",
            3: "Apr",
            4: "Mai",
            5: "Jun",
            6: "Jul",
            7: "Aug",
            8: "Sep",
            9: "Oct",
            10: "Nov",
            11: "Dec"
        }
        return mapper[date.getMonth()]
    }

    getPeriod(){
        const start = new Date(this.props.employment.start).getTime()
        const end = (this.props.employment.end==="present") ? (new Date().getTime()) : new Date(this.props.employment.end).getTime();

        const period = this.getMonth(new Date(start))+" "+new Date(start).getFullYear() + " - " + ((this.props.employment.end==="present")? "present" : this.getMonth(new Date(end))+" "+new Date(end).getFullYear() )
        return period
    }
    getDuration(){
        const start = new Date(this.props.employment.start).getTime()
        const end = (this.props.employment.end==="present") ? (new Date().getTime()) : new Date(this.props.employment.end).getTime();
        const duration = (end-start)
        const year = Math.floor((duration / 31536000000));

        let months = Math.ceil(12*((duration / 31536000000) - year));
        if(months<0){months=0}
        let yearLabel = (year>1) ? (year+" years") : (year===1) ? (year+" year"):"";
        let monthsLabel = (months>1) ? (months+" months") : (months===1) ? (months+" month"): "";
        if((yearLabel!=="")&&(monthsLabel!=="")){
            return yearLabel +", "+ monthsLabel
        }
        return yearLabel + monthsLabel

    }

    getDescription(){
        return this.props.employment.description.split('\n').map((line,i)=>{
            return (
                <p key={i}>{line}</p>
            )
        })
    }
    render(){
        return <div id={"employmentId_"+this.props.employment.serialNumber} className="experienceCard">
            <p className="title">{this.props.employment.title}</p>
            <p className="company">{this.props.employment.company}</p>
            <p className="duration">{this.getPeriod() + " ("+this.getDuration()+")"}</p>
            <p className="location">{this.props.employment.location}</p>

            <div className="description">{this.getDescription()}</div>
        </div>
    }
}