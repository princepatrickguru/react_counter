import React, {useState} from 'react';
import Display from './display/Display';
import Button from './button/Button';
import './App.css';

const Counter = () =>{
    const [count, setCount] = useState(0);
    const [show, setShow] = useState("h1");
    
    const onIncrement = ()=>{
        const newCountVal = count + 1;
        setCount(newCountVal);
    }

    const onDecrement = ()=>{
        if(count > 0){
            const newCountVal = count - 1;
            setCount(newCountVal);
        }
    }
    
    const onReset = ()=>{
        setCount(0);
    }

    const setDisplayStyle = (disvalue) =>{
       setShow(disvalue);
    }

    return(
        <div style={{width:"100%"}}>
            <Display type={show} count={count} />
            <div style={{display:"flex", justifyContent:"center", width:"100%", border: "1px solid #000" }}>
                <Button onClick={onIncrement} type="success" radius="br-1" children="Increase" />
                <Button onClick={onReset} type="info" radius="br-2" children="Reset" />
                <Button onClick={onDecrement} type="danger" radius="br-3" children="Decrease" />
            </div>
           
            <div className='control'>     
                <Button onClick={()=>{ setDisplayStyle("h1")}} type="success" radius="br-1" children="Heading 1" />
                <Button onClick={()=>{ setDisplayStyle("h2")}} type="success" radius="br-1" children="Heading 2" />
                <Button onClick={()=>{ setDisplayStyle("h3")}} type="success" radius="br-1" children="Heading 3" />
                <Button onClick={()=>{ setDisplayStyle("h4")}} type="success" radius="br-1" children="Heading 4" />
                <Button onClick={()=>{ setDisplayStyle("h5")}} type="success" radius="br-1" children="Heading 5" />
                <Button onClick={()=>{ setDisplayStyle("h6")}} type="success" radius="br-1" children="Heading 6" />
                <Button onClick={()=>{ setDisplayStyle("p")}} type="success" radius="br-1" children="Paragraph" />
            </div>

        </div>
    );
}

export default Counter;