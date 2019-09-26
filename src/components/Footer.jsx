import React from 'react';
import '../styles/footer.css';

export default function({ page, changePage }) {
  return (
    <footer>
      {page > 1 && <button onClick={() => changePage(-1)}>Prev</button>}
      <button onClick={() => changePage(1)}>Next</button>
    </footer>
  );
}
