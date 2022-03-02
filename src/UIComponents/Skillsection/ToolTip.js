import React from 'react'
import './ToolTip.css'

const ToolTip = (props) => {
    const list = props.bullets;
    const listItems = list.map(item => <li>{item}</li>);
    return (
        <>
            <div class='tooltip-container'>
                <div class='tooltip-title'><b>{props.title}</b></div>
                <div class='tooltip-body'>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToolTip
