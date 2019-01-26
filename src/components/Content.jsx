/* eslint-disable no-unused-expressions */


import React from 'react';
import Header from './Header.jsx';
import './content.css';
import News from './News.jsx';
import logo from '../loading.gif';


class Content extends  React.Component {

constructor(){
    super();
    this.state ={index: [], loc : null, current : []}
}


getData = async () => {

    this.setState({current: []});
    let arr = this.state.index;
    let beg = this.state.loc;
    let end = beg+30;

    let values = [];

    for(let i=beg;i<end; i++) {
    let api =     await fetch(`https://hacker-news.firebaseio.com/v0/item/${arr[i]}.json?print=pretty`);
    let data = await api.json();
    const {by, score, title, url, type, id} = data;
    //console.log(`${i+1}. By = ${by}\nScore = ${score}\nTitle = ${title}\nLink = ${url}`);
    values.push({title, url, by, score, type, id}); 
}
this.setState({loc: end,  current : values});
}


clickHandler = async () => {
let call = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
let arr =  await call.json();
this.setState({index : arr, loc: 0});
this.getData();
}

componentDidMount(){
    this.clickHandler();

}


/*         { (this.state.current.length>0) && <button onClick={this.getData}>Previous.</button>}           */


render(){

    let   content= this.state.current.map( i=> <News key ={i.id} by={i.by}  title={i.title} score ={i.score} url = {i.url} type={i.type}/>)

      return ( <div className='contents'>
      <Header />
          <ol start={this.state.loc-30+1}>
              {content}
          </ol>
         {(this.state.current.length===0) && <img src={logo} alt='Loading...' className='loading' />}
         <footer>
         { (this.state.current.length>0) && <button onClick={this.getData}>More....</button>}
         </footer>
         <hr/>
          </div>
)
    }    
}

export default  Content;