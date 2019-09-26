import React, { Component } from 'react';
import styles from './videosList.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Buttons/buttons';


class VideosList extends Component {

    state = {
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    loadMore = () => {
        
    }

    renderButton = () => {
        return this.props.loadMmore ? 
        <Button 
            type="loadmore"
            loadMore={()=> this.loadMore()}
            cta="Load More Videos"
        />
        :
        <Button type="linkTo" cta="More videos" linkTo="/videos"/>
    }

    renderTitle = () => {
        return this.props.title ? 
        <h3><strong>Videos</strong></h3>
        : null
    }


render(){
    return(
        <div className={styles.videoList_wrapper}>
            { this.renderTitle() }
            { this.renderButton() }
        </div>
    )
}
}

export default VideosList;