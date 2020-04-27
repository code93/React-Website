import React from 'react';
import PostData from '../../Elements/postData';

const header = (props) => {

    

    const postData = (date, author) => (
        <PostData data={{date,author}}/>
    )


    return(
        <div>
            {/* {teamInfo(props.teamData)} */}
            {postData(props.date, props.author)}
        </div>
    )
}

export default header;