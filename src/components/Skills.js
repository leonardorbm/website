import React from 'react';
//import Carousel from 'react-bootstrap/Carousel'
import './skills.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Form from "../../node_modules/react-bootstrap/Form";
import FormControl from "../../node_modules/react-bootstrap/FormControl";
export default class Skills extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            items:this.props.skills,
            filteredItems:null,
            searchString: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(selectedIndex){
        this.setState({activeIndex:selectedIndex});
    }

    handleSearch(e){
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
        let filteredItems = this.state.items.filter(item=>{
            let searchString = e.target.value;
            if((!searchString)||(searchString ==="")){
                return true;
            }else{
                return (JSON.stringify(item).toLowerCase().includes(searchString.toLowerCase()));
            }
        });
        this.setState({filteredItems:filteredItems})
    }
    getDescriptionParagraphs(description){
        return description.split('\n').map((p,index)=>{
            return (
                <p key={index}>{p}</p>
            );
        })
    }

    render(){
        const carouselItems = (this.state.filteredItems || this.state.items).map((item,index)=>{
            return (
                <div key={index}>
                        <div className="carouselItem">
                            <div className="label">{item.label}</div>
                            <div className="description">{this.getDescriptionParagraphs(item.description)}</div>
                        </div>
                    </div>

            );
        });
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };
        return (
            <div className="cardsWrapper">
                <h3>Skills set</h3>
                <Form>
                    <FormControl
                        name="searchString"
                        type="text"
                        placeholder="Search skill"
                        onChange={this.handleSearch}
                    />
                </Form>
                <Carousel
                    responsive={responsive}>
                    {carouselItems}
                </Carousel>
            </div>

        );
    }
}