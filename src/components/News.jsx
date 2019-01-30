/* eslint-disable no-unused-expressions */
import React from 'react';
import Item from './Item.jsx';
import Footer from './Footer.jsx';
import Nope from './Nodata.jsx'



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
    let arr;
    let call = await fetch(`https://api.hnpwa.com/v0/news/${page}.json`);
    try{
    arr =  await call.json();}
    catch(error){
      arr = [];
      page = page-1;
    }
    this.setState({stories: arr, page: page});
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
        {(!this.state.stories.length) && this.state.page && <Nope />}
         {(this.state.page) && (this.state.stories.length>0) &&<div>       
        <table>
            <tbody>
           {content}
           </tbody>
         </table>
      <Footer prev={this.prevPage} next={this.nextPage} page={this.state.page}/>      
       </div>}
       </div>
          )
    }    
}

export default  News;