/* eslint-disable no-unused-expressions */

import React from 'react';
import './content.css';


class Content extends  React.Component {

constructor(){
    super();
    this.state ={index: [], loc : null}
}


getData = async () => {

    let arr = this.state.index;
    let beg = this.state.loc;
    let end = beg+10;

    for(let i=beg;i<end; i++) {

    let api =     await fetch(`https://hacker-news.firebaseio.com/v0/item/${arr[i]}.json?print=pretty`);
    let data = await api.json();
    const {by, score, title, url} = data;
    console.log(`${i+1}. By = ${by}\nScore = ${score}\nTitle = ${title}\nLink = ${url}`)
}

this.setState({loc: end});

}


clickHandler = async () => {
let call = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
let arr =  await call.json();
this.setState({index : arr, loc: 0});
}

componentDidMount(){
    this.clickHandler()
}



render(){


      return ( <div className='contents'>
          <button onClick={this.getData}>Hello</button>
          </div>
)
    }    
}

export default  Content;