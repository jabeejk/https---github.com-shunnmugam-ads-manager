import { Button, Layout } from 'antd';
const { Header } = Layout;
import headerStyle from './Header.module.css';

function HeaderComponent() {
  return (
    <>
      <Header className={headerStyle.Navheader} >
        <Button className={headerStyle.btn}>Create Campains</Button>
      </Header>
    </>
  );
}

export default HeaderComponent;
