import React from 'react';
import { Layout, Col, Row } from 'antd';
import Movie from '../components/Movie';

const { Content } = Layout;

const Main = () => {
  return (
    <>
      <Content>
        <Row>
          <Col xs={24} sm={{span: 22, offset: 1}} lg={{span: 20, offset: 2}} xl={{span: 18, offset: 3}}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
              <Col xs={24} sm={12} md={8} lg={6}>
                <Movie />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Main;