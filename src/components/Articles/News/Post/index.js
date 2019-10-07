import React, { Component } from 'react';
import {firebase, firebaseDB } from '../../../../firebase';
import styles from '../../articles.css';
import Header from './header';


class NewsArticles extends Component {

    state = {
        article: [],
        imageURL:''
    }

    componentWillMount(){
         firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
         .then((snapshot)=>{
             let article = snapshot.val();

              
                  this.setState({
                      article
                  })
                  this.getImageURL(article.image)
              })

         }





        // axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        // .then( response => {
        //     let article = response.data[0];

        //     axios.get(`${URL}/teams?id=${article.team}`)
        //     .then( response => {
        //         this.setState({
        //             article,
        //             team:response.data
        //         })
        //     })


        // })

    getImageURL = (filename) =>{
        firebase.storage().ref('images')
        .child(filename).getDownloadURL()
        .then( url => {
            this.setState({
                imageURL: url
            })
        })
    }


    render(){
        const article = this.state.article;
        return(
           
            <div className={styles.articleWrapper}>
                <Header
                   
                    date={article.date}
                    author={article.author}
                />
              <div className={styles.articleBody}>
                  <h1>{article.title}</h1>
                  <div className={styles.articleImage}
                    style={{
                        background:`url('${this.state.imageURL}')`
                    }}
                  ></div>
                  <div className={styles.articleText}
                    dangerouslySetInnerHTML={{
                        __html: article.body
                    }}
                  >
                     
                  </div>
              </div>


            </div>
        )
                }
                }

export default NewsArticles;