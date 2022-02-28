import React from 'react';
import './styles.css'
import {useSelector} from "react-redux";


function Money(props) {

    const money = useSelector((state) => state.products.money)
    const result  = (money).toLocaleString('en-US', )


    return (
        <div className={"money"}>
            <h1 style={{transitionDuration:"1s"}}>${result}</h1>
        </div>
    );
}

export default Money;
