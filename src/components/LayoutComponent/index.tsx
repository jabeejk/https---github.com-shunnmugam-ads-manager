import { Layout } from 'antd';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../header/Header';

const { Content } = Layout;
import layoutStyle from './Layoutstyle.module.css';

const LayoutComponent: React.FC = () => {
  return (
    <>
      <Layout>
        <Sidebar />
        <Layout>
          <HeaderComponent />
          <Content className={layoutStyle.contentHead}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponent;
