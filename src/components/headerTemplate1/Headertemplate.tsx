import { Layout } from 'antd';
const { Header } = Layout;

import headertemp from './Headertemp.module.css';

function Template1() {
  return (
    <>
      <Header className={headertemp.headerStyle}>
        <h2>Your Logo</h2>
      </Header>
    </>
  );
}

export default Template1;
