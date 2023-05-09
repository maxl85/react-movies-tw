import { useState, useEffect } from 'react';
import { Layout, Col, Row, Spin } from 'antd';
import Movies from '../components/Movies';
import Search from '../components/Search';


const { Content } = Layout;

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=c8ed8ebe&s=matrix&page=1')
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }, []);
  
  const searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=${str}&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  };


  return (
    <>

      <Content className='p-5'>
        <Row>
          <Col xs={24} sm={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }} xl={{ span: 14, offset: 5 }}>
            <Search searchMovies={searchMovies} />
            <Row className='justify-center' gutter={[32, 32]}>
              {
                movies.length ?
                  <Movies movies={movies} />
                  : <Spin size="large" tip="Loading..." />
              }
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Main;