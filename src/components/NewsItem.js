import React, { Component } from 'react';



export default class NewsItem extends Component {
  
  constructor(){
    super();;
    this.state ={

    }
    console.log("Hello I am a constructor from news component")
  }

  render() {
    let {title, description, ImageUrl,newsUrl} = this.props;
    return (
  //     <div className="my-3">
  //       <div className="card" style={{width: "18rem;"}}>

  // <div className="card-body">
  
  // <img src='https://static.javatpoint.com/top10-technologies/images/top-10-news-channels-in-the-world1.png' />
     <div className='my-3'>
    <div className="card-body">
      <div>

     <img src={ !ImageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":ImageUrl}className="card-img-top" alt="..."/>
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    
    <a rel="noreferrer" href={newsUrl}  target='_blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>
        
    </div>
    );
  }
}
