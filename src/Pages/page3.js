import './page2.css';
import React from "react";
import { Button } from 'react-bootstrap';
import history from './history';
/* Page 2 */


function page3() {
    return ( 
        <div className = "chat">
            <h1>FindMyHomie Page 3</h1>
            <h2> bluh bluh bluh</h2>
            <Button variant="btn btn-success" onClick={() => {history.push('/page3'); window.location.reload();}}>Click for page3</Button>
        </div>
    );
}

export default page3;