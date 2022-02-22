import React from 'react';
import './styles.css'

function Header(props) {
    return (
        <div className={"header"}>
            <div className={"headerContainer"}>
                <img src="https://neal.fun/spend/billgates.jpg" alt=""/>
                <h1>Spend Bill Gates' Money</h1>
            </div>
        </div>
    );
}

export default Header;
