import React from 'react';
import { Layout, Col, Row } from 'antd';

const { Content } = Layout;

const Main = () => {
  return (
    <>
      {/* <Content className='flex items-center justify-center'>
      Content
    </Content> */}
      <Content>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
          
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
          <Col span={6}>
            <div className='box1'>col</div>
          </Col>
        </Row>
      </Content>
      
      {/* <Content>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className='box1'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className='box1'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className='box1'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className='box1'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className='box1'>col</div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4}>
            <div className='box1'>col</div>
          </Col>
        </Row>
      </Content> */}
    </>
  )
}

export default Main