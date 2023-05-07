import {
  Button,
  Card,
  Col,
  Dropdown,
  Image,
  Row,
  Space,
  Table,
  Typography,
  message
} from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import dashstyle from './dashStyle.module.css';
import { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';
const { Title } = Typography;

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  }
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true
  }
];

const menuProps = {
  items,
  onClick: handleMenuClick
};

function Dashboard() {
  return (
    <>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ display: 'flex' }}
      >
        <Col
          xs={24}
          xl={15}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Card
            title="Campaign"
            extra={<Link to="/main/campaigns">View All</Link>}
            style={{ flex: 1 }}
          >
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </Col>
        <Col
          xs={24}
          xl={9}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Card title="Your Balance" style={{ flex: 1 }}>
            <div className={dashstyle.balance}>
              <Title level={1}>
                <b>$1,500.29</b>
              </Title>
              <Button>Add Funds</Button>
            </div>
            <div className={dashstyle.paymentMethod}>
              <Image
                width={65}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <Image
                width={65}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <Image
                width={65}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
              <Image
                width={65}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
            </div>
          </Card>
        </Col>
        <Col xs={24} xl={24}>
          <Card
            title={
              <div>
                Title
                <br />
                <span style={{ fontSize: '14px', color: 'grey' }}>
                  Subtitle
                </span>
              </div>
            }
            extra={
              <Space>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Date <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Campaign <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Platform <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Location <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Business Types <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
            }
          >
            <p>Card content goes here.</p>
          </Card>
        </Col>
        <Col xs={24} xl={24}>
          <Card
            title={
              <div>
                Title
                <br />
                <span style={{ fontSize: '14px', color: 'grey' }}>
                  Subtitle
                </span>
              </div>
            }
            extra={
              <Space>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Date <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Campaign <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
                <Dropdown menu={menuProps}>
                  <Button>
                    <Space>
                      Platform <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </Space>
            }
          >
            <Table columns={columns} dataSource={data} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
