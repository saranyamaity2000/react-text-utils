import React, { useState } from 'react'

export default function TextForm(props) {
    const upperClickHandler = () => setText(text.toUpperCase());
    const lowerClickHandler = () => setText(text.toLowerCase());
    const getDetails = text => {
        let wc = 0, cc = 0;
        for (let word of text.split(" ")) {
            if (word.length > 0) {
                wc++;
                cc += word.length;
            }
        }
        return [wc, cc];
    };
    const onChangeHandler = section => setText(section.target.value);

    const [text, setText] = useState("Enter Text Here"); // means have to update text using setText
    let [wordCount, charCount] = getDetails(text);

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label"><h2>{props.heading}</h2></label>
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={onChangeHandler}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={upperClickHandler}>UpperCase</button>
            <button className="btn btn-primary" onClick={lowerClickHandler}>LowerCase</button>
            <ul className="list-group my-3">
                <h3>Details</h3>
                <li className="list-group-item">Word count - {wordCount}</li>
                <li className="list-group-item">Character Count - {charCount}</li>
            </ul>
        </div>
    )
}
