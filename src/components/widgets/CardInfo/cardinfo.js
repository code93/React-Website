import React from 'react';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

import styles from './cardinfo.css';

const CardInfo = (props) =>{

    

    const formatDate = (date) => {
        return moment(date).format(' MM-DD-YYYY');
    }

    return(
        <div className={styles.CardInfo}>
           
            <span className={styles.date}>
                <FontAwesome name="clock-o"/>
                 {formatDate(props.date)}
            </span>


        </div>
    )
}

export default CardInfo;