import React, { useState, useEffect } from 'react';
import Item from './Item.jsx';
import Footer from './Footer.jsx';
import Nope from './Nodata.jsx';

export default function() {
  const [state, setState] = useState({ page: null, stories: [] });
  useEffect(() => {
    changePage();
    return () => setState({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changePage = async (val = 1) => {
    let page = state.page + val;
    let arr;
    let call = await fetch(`https://api.hnpwa.com/v0/newest/${page}.json`);
    try {
      arr = await call.json();
    } catch (error) {
      arr = [];
      page = page - val;
    }
    setState({ stories: arr, page });
  };

  let content = state.stories.map(i => (
    <Item
      key={i.id}
      serial={state.stories.indexOf(i) + 1 + (state.page - 1) * 30}
      data={i}
    />
  ));

  return (
    <>
      {!state.stories.length && state.page && <Nope />}
      {state.page && state.stories.length > 0 && (
        <>
          <table>
            <tbody className='article'>{content}</tbody>
          </table>
          <Footer changePage={changePage} page={state.page} />
        </>
      )}
    </>
  );
}
