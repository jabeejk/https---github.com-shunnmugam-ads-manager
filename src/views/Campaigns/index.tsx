import { Card, Col, Dropdown, MenuProps, Row, Table, message } from 'antd';
import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

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

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];

const Campaigns: React.FC = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={24}>
          <div>
            <Title level={1}>
              <b>Hey there, Brian Ford</b>
              <br />
              <p style={{ fontSize: '14px', color: 'grey' }}>
                Welcome back to your all in Dashboard and more text here!
              </p>
            </Title>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Title level={5} style={{ textAlign: 'center', color: 'grey' }}>
              Total Display
            </Title>
            <p style={{ fontSize: '25px' }}>
              <strong>45</strong>
            </p>
            <p style={{ color: 'grey' }}>+13.2% More</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Title level={5} style={{ textAlign: 'center', color: 'grey' }}>
              Total click
            </Title>
            <p style={{ fontSize: '25px' }}>
              <strong>45</strong>
            </p>
            <p style={{ color: 'grey' }}>+13.2% More</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Title level={5} style={{ textAlign: 'center', color: 'grey' }}>
              CAMPAION ACTIVE
            </Title>
            <p style={{ fontSize: '25px' }}>
              <strong>45</strong>
            </p>
            <p style={{ color: 'grey' }}>+13.2% More</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Title level={5} style={{ textAlign: 'center', color: 'grey' }}>
              Total Cost
            </Title>
            <p style={{ fontSize: '25px' }}>
              <strong>45</strong>
            </p>
            <p style={{ color: 'grey' }}>+13.2% More</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
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
              <Dropdown menu={menuProps}>
                <EllipsisOutlined />
              </Dropdown>
            }
            bodyStyle={{ padding: 0 }}
          >
            <Table dataSource={dataSource} columns={columns} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Campaigns;
