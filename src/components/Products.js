import React from 'react';
import './styles.css'
import { Card, Button, Input, Row, Col  } from 'antd';

function Products(props) {

    const { Meta } = Card;

    return (
        <div className={"products"}>
            <>
                <Row gutter={16}>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://neal.fun/spend/images/big-mac.jpg" />}
                        >
                            <span className={"productsTitle"}>
                                <div>Big Mac</div>
                                <div>$2</div>
                            </span>
                            <span className={"productsBtn"}>
                                <Button type="danger">Sell</Button>
                                <Input/>
                                <Button  type="primary">Buy</Button>

                            </span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://neal.fun/spend/images/big-mac.jpg" />}
                        >
                            <span className={"productsTitle"}>
                                <div>Big Mac</div>
                                <div>$2</div>
                            </span>
                            <span className={"productsBtn"}>
                                <Button type="danger">Sell</Button>
                                <Input/>
                                <Button  type="primary">Buy</Button>

                            </span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://neal.fun/spend/images/big-mac.jpg" />}
                        >
                            <span className={"productsTitle"}>
                                <div>Big Mac</div>
                                <div>$2</div>
                            </span>
                            <span className={"productsBtn"}>
                                <Button type="danger">Sell</Button>
                                <Input/>
                                <Button  type="primary">Buy</Button>

                            </span>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            hoverable
                            cover={<img alt="example" src="https://neal.fun/spend/images/big-mac.jpg" />}
                        >
                            <span className={"productsTitle"}>
                                <div>Big Mac</div>
                                <div>$2</div>
                            </span>
                            <span className={"productsBtn"}>
                                <Button type="danger">Sell</Button>
                                <Input/>
                                <Button  type="primary">Buy</Button>

                            </span>
                        </Card>
                    </Col>
                </Row>
            </>
        </div>
    );
}

export default Products;
