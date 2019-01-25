import React from 'react';

class Content extends  React.Component {

action = async () => {
  let arr; 
  await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then(response => response.json())
  .then(result => arr = result) ;
console.log(arr);

for(let i=0;i<arr.length;i++){
    let res;
    await fetch(`https://hacker-news.firebaseio.com/v0/item/${arr[i]}.json?print=pretty`)
    .then(response => response.json())
    .then(result =>res =  result) ;
    console.log(`By = ${res.by}, \nTitle = ${res.title}, \nScore = ${res.score}, \nURL = ${res.url}`);
    break;
}

}

    render(){
      return ( <div>
          <h1>Hello</h1>
          <button onClick={this.action}>Hello</button>
          </div>

)
    }    
}

export default  Content;