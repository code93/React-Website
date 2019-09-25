import React, { Component } from 'react';
import axios from 'axios';

import SliderTemplates from './slider_templates';

class ProductSlider extends Component {

        state = {
            news:[]
        }

        componentWillMount(){
            axios.get("gs://fitindiamission-8d35e.appspot.com/?_start={}&_end=3")
            .then( response => {
                this.setState({
                    news: response.data
                })
            })
        }

        render(){
            return(
                <SliderTemplates data={this.state.news}/>
            )
        }
}

export default ProductSlider