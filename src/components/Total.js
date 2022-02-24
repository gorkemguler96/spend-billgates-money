import React from 'react';
import { useSelector} from "react-redux";


function Total(props) {

    const total = useSelector((state) => state.products.total)
    const item = useSelector((state) => state.products.items)
    const result = total.toLocaleString('en-US')

    return (
        <div>
            <div className={"totalStyle"}>
                <div className={"totalWidth"}>
                    <h1>Your Receipt</h1>
                    {item.map((item)=> {
                        if(item.amount>0){
                            return (
                                <div className={"totalItem"} key={item.id}>
                                    <div className={"a"}>{item.title}</div>
                                    <div className={"b"}>X{item.amount}</div>
                                    <div className={"c"}>${(item.price*item.amount).toLocaleString('en-US')}</div>
                                </div>
                            )
                        }
                    })}
                    <hr/>
                        <h1>
                            <span style={{float:"left"}}>Total</span>
                            <span style={{color:"rgb(25,183,25)",float:"right"}}> ${result} </span>
                        </h1>
                </div>
            </div>
        </div>
    );
}

export default Total;
