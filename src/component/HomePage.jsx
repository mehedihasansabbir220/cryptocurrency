import { Col, Row, Statistic, Typography } from 'antd';
import React from 'react';


const { Title } = Typography;

const HomePage = () => {
    return (
        <>
            <Title level={2} className="Heading">
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total CryptoCurrencies" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Exchange" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cup" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Marketes" value="5" />
                </Col>
            </Row>
        </>
    )
};

export default HomePage;