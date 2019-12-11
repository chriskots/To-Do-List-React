import React from 'react';

export default function Todo(props) {
    return (
        <tbody>
            <tr>
                <td style={{'word-wrap':'break-word'}}>{props.text}</td>
                <td width="25%"><button onClick={() => props.handleCompleted(props.id)} style={{'background-color': '#66d166'}}>Completed?</button></td>
            </tr>
        </tbody>
    );
}