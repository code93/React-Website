import React from 'react';
import styles from '../videosList.css';
import VideoListTemplate from '../videosListTemplate';

const videosRelated = (props) => (
    <div className={styles.relatedWrapper}>
        <VideoListTemplate
        data={props.data}
        
        />

    </div>
)

export default videosRelated;