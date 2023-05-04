import { Layout } from 'antd';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

const App = () => {
  return (
    <>
      <Layout className='h-screen'>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
