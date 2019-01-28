import React from 'react';
import '../styles/footer.css';

const Footer =(props) => 
(<footer>
 {(props.page>1) && <button onClick={props.prev}>{`|<<Prev`}</button>}
{ !props.loading &&<button onClick={props.next}>{`More>>|`}</button>}
</footer>
)
export default Footer;