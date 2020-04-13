import React from 'react';
const countries = {
    "australia": require('./Flag_of_Australia.svg'),
    "brazil": require('./Flag_of_Brazil.svg')
}
export default class Flag extends React.Component{

    render(){
        const flag = countries[this.props.country]
        return (
            <img className={"selected_"+(this.props.country===this.props.selectedCountry)}
                 src={flag} style={{maxWidth:"100%",minHeight:"100%", padding:"0 0 0 1vw"}}/>
        );
    }
}