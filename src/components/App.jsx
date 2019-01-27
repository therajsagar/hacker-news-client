/* eslint-disable no-unused-expressions */
import React from 'react';
import '../styles/app.css';

import Header from './Header.jsx';
import Story from './Story.jsx';
import Footer from './Footer.jsx';

import logo from '../assets/loading.gif';


class App extends  React.Component {

constructor(){
    super();
    this.state ={index: [], loc : null, stories :[], current : []}
}




nextPage = async () => {
    this.setState({current: []});
    let beg= this.state.loc;
    let end = beg+15;

    let values = this.state.stories;

    let arr = this.state.index;

    if(values.length<end){

    for(let i=beg;i<end; i++) {
    let api =     await fetch(`https://hacker-news.firebaseio.com/v0/item/${arr[i]}.json`);
    let data = await api.json();
    const {by, score, title, url, type, id} = data;
    values.push({title, url, by, score, type, id}); 
}
this.setState({loc: end,  stories : values, current: values.slice(beg, end)});
}

else{
    this.setState({loc: end, current: values.slice(beg, end)})
}
}


prevPage =  async ()=>{

    let end= this.state.loc-15;
    let beg = end-15;

    let values = this.state.stories;

    this.setState({loc: end,  current : values.slice(beg,end)});
}




loadData = async () => {
    this.setState({current: [], stories: []})
     let call = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
     let arr =  await call.json();
     this.setState({index : arr, loc: 0});
     this.nextPage();
}



componentDidMount(){
    this.loadData();
}


componentWillMount(){
    this.setState({});
}



render(){

     let   content= this.state.current.map( i=> <Story key ={i.id} by={i.by}  title={i.title} score ={i.score} url = {i.url} type={i.type}/>)

      return (
          <div>
          {(this.state.current.length===0) && <div><img src={logo} alt='Loading...' className='loading' /></div>}


           { (this.state.current.length>0) && <div className='contents'>
           <Header reload={this.loadData}/>
           
           <ol start={this.state.loc-15+1}>
              {content}
            </ol>

          
         <Footer prev={this.prevPage} next={this.nextPage} page={(this.state.loc/15)} />
          </div>}
          </div>
          )
    }    
}

export default  App;