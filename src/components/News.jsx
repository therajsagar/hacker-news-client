/* eslint-disable no-unused-expressions */
import React from 'react';
import '../styles/news.css';

import Item from './Item.jsx';
import Footer from './Footer.jsx';



class News extends  React.Component {

constructor(){
    super();
    this.state ={page : null, stories :[]};
}



prevPage = async () => {
    let page = this.state.page-1;
    let call = await fetch(`https://api.hnpwa.com/v0/news/${page}.json`);
    let arr =  await call.json();
    this.setState({stories: arr, page: page});
}


nextPage = async () => {
    let page = this.state.page+1;
    let call = await fetch(`https://api.hnpwa.com/v0/news/${page}.json`);
    let arr =  await call.json();
    this.setState({stories: arr, page: page});
}


refresh = async ()=>{
   await  this.setState({page: null, stories :[]});
    this.nextPage();
}


componentDidMount(){
    this.nextPage();
}



componentWillUnmount(){
    this.setState({});
}




render(){

    let content = this.state.stories.map( i=> <Item key ={i.id} user={i.user}  title={i.title} score ={i.points} url = {i.url} type={i.type} comment={i.comments_count}  domain={i.domain} time_ago={i.time_ago}/>);

      return (
          <div>
         {(this.state.page)&&<div className='contents'>       
                 
        <ol start={(this.state.page-1)*30 +1 }>
           {content}
         </ol>

      <Footer prev={this.prevPage} next={this.nextPage} page={this.state.page}/>      
       </div>}
       </div>
          )
    }    
}

export default  News;