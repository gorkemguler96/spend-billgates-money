import React from 'react';
import './styles.css'
import {useSelector} from "react-redux";


function Money(props) {

    const money = useSelector((state) => state.products.money)


    return (
        <div className={"money"}>
            <h1>${money}</h1>
        </div>
    );
}

export default Money;
