import React, {useState} from 'react';
import './styles.css'
import { Card, Button, Input, Row, Col  } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, incrementByAmount } from '../redux/slice/productsSlice'


function Products(props) {

    const { Meta } = Card;
    const products = useSelector((state) => state.products.items)
    const money = useSelector((state) => state.products.money)
    const dispatch = useDispatch()
    const [tempAmount,setTempAmount] = useState(0)



    return (
        <div className={"products"}>
            <>
                <Row  gutter={[10,10]}>
                    {products.map((item)=>(
                        <Col key={item.id} span={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.image} />}
                            >
                                <span className={"productsTitle"}>
                                    <div>{item.title}</div>
                                    <div>${item.price.toLocaleString('en-US')}</div>
                                </span>

                                <span className={"productsBtn"}>
                                    <Button
                                        disabled = { item.amount === 0 }
                                        onClick = { () => dispatch(decrement(item))}
                                        type="danger">Sell</Button>

                                    {/*------------------------İNPUT-----------------------------------------*/}

                                    <Input onChange={() => dispatch(incrementByAmount(item))} placeholder={item.amount} />

                                    {/*-------------------------BUY BUTTON-----------------------------------*/}

                                    <Button
                                        disabled={ item.price>  money}
                                        onClick = { () => dispatch(increment(item))}
                                        type ="primary">Buy</Button>
                                </span>

                            </Card>
                        </Col>
                    ))}

                </Row>
            </>
        </div>
    );
}

export default Products;
