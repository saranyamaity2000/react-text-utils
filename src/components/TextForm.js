import React, { useState } from 'react'
const randomWords = require('random-words');

export default function TextForm(props) {

    const upperClickHandler = () => setText(text.toUpperCase());
    const lowerClickHandler = () => setText(text.toLowerCase());
    const extraSpaceHandler = () => {
        let words = text.split(" ");
        const filteredWords = [];
        words.forEach(word => word.length > 0 ? filteredWords.push(word) : -1);
        setText(filteredWords.join(" "));
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Async: Copying to clipboard was successful!');
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    };
    const onChangeHandler = section => setText(section.target.value);

    const randomWordsHandler = () => {
        const numOfWords = parseInt(prompt("Enter Number of Words"));
        if (isNaN(numOfWords)) {
            alert("Please provide valid number only!");
        } else {
            const words = randomWords(numOfWords);
            let newtext = text;
            newtext = newtext + (newtext.length ? " " : "") + words.join(" ");
            setText(newtext);
        }
    };
    const showPrivateFeatures = () => {
        alert("Functionbality yet to be added!");
    };

    const clearTextHandler = () => {
        setText("");
    }

    const wordCountCharCount = text => {
        let wc = 0, cc = 0;
        for (let word of text.split(" ")) {
            if (word.length > 0) {
                wc++;
                cc += word.length;
            }
        }
        return [wc, cc];
    };

    const [text, setText] = useState("");
    let [wordCount, charCount] = wordCountCharCount(text);

    let innerBoxStyle = {
        backgroundColor: props.mode === 'dark' ? 'lightblue' : 'white',
    };
    let headingStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
    };

    return (
        <div>
            <div className="mb-3">
                <div className="headingAndCopy" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <label htmlFor="textBox" className="form-label" style={headingStyle}><h2>{props.heading}</h2></label>
                    <div className="rightAlignedUtilButtons">
                        <button className="btn btn-success mx-1" onClick={copyToClipboard}>Copy</button>
                        <button className="btn btn-danger mx-1" onClick={clearTextHandler}>Clear</button>
                    </div>
                </div>
                <textarea className="form-control border border-4" id="textBox" rows="10" value={text} onChange={onChangeHandler} style={innerBoxStyle}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={upperClickHandler}>UpperCase</button>
            <button className="btn btn-success mx-1" onClick={lowerClickHandler}>LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={extraSpaceHandler}>Remove Extra Spaces</button>
            <button className="btn btn-success mx-1" onClick={randomWordsHandler}>Add Random Words</button>
            <button className="btn btn-danger mx-1" onClick={showPrivateFeatures}>Private Features</button>
            <ul className="list-group my-3 w-50">
                <h3 style={headingStyle}>Details</h3>
                <li className="list-group-item border border-2" style={innerBoxStyle}>Word count - {wordCount}</li>
                <li className="list-group-item border border-2" style={innerBoxStyle}>Character Count - {charCount}</li>
            </ul>
        </div >
    )
}
