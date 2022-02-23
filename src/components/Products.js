import React from 'react';
import './styles.css'
import { Card, Button, Input, Row, Col  } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, incrementByAmount } from '../redux/slice/productsSlice'


function Products(props) {

    const { Meta } = Card;
    const products = useSelector((state) => state.products.items)
    const dispatch = useDispatch()

    const arttir = (e) =>{
      dispatch(increment(e))
        // console.log(temp.payload.amount+1)
    }

    return (
        <div className={"products"}>
            <>
                <Row gutter={16}>
                    {products.map((item)=>(
                        <Col key={item.id} span={6}>
                            <Card
                                hoverable
                                cover={<img alt="example" src={item.image} />}
                            >
                                <span className={"productsTitle"}>
                                    <div>{item.title}</div>
                                    <div>${item.price}</div>
                                </span>

                                <span className={"productsBtn"}>
                                    <Button type="danger">Sell</Button>
                                    <Input />
                                    {item.amount}
                                    <Button onClick={()=>arttir(item)} type="primary">Buy</Button>
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
