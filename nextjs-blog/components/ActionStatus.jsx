import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function ActionStatus({
}) {
    const [action, setAction] = useState("None");
    return (
       <Dropdown>
         <Dropdown.Toggle variant="info" id="dropdown-basic">
        {action}
         </Dropdown.Toggle>

         <Dropdown.Menu>
           <Dropdown.Item onClick={() => setAction("Investigating")}>Investigating</Dropdown.Item>
           <Dropdown.Item onClick={() => setAction("Closed")}>Closed</Dropdown.Item>
           <Dropdown.Item onClick={() => setAction("Acknowledge")}>Acknowledge</Dropdown.Item>
           <Dropdown.Item onClick={() => setAction("None")}>None</Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>
    );
}