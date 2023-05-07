import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Row,
  Space,
  Switch,
  Typography
} from 'antd';
const { Title } = Typography;
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import settingStyle from './settingStyle.module.css';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const Settings: React.FC = () => {
  return (
    <>
      <Card title="Notification" className={settingStyle.cardHeader}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={24} xl={11}>
            <div>
              <Title level={4}>
                <b>Email notification</b>
              </Title>
              <p>
                Get emails to find out whats going on when your not online. You
                turn these off.
              </p>
            </div>
            <div style={{ marginTop: '10%' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" defaultChecked />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>News and updates</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    News about products and feature updates
                  </p>
                </Title>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" defaultChecked />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>Tips and tutorials</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    Tips on getting more out of united
                  </p>
                </Title>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>User research</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    Get involved in our beta testing program or participate in
                    paid product user research.
                  </p>
                </Title>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" defaultChecked />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>Comments</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    Comments on your posts and replies to comments.
                  </p>
                </Title>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>Reminders</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    These are notification to remaind you of updates you might
                    have missed.
                  </p>
                </Title>
              </div>
            </div>
          </Col>
          <Col xs={24} xl={2}>
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col xs={24} xl={11}>
            <div>
              <Title level={4}>
                <b>Push notification</b>
              </Title>
              <p>
                Get push notification in_app to find out whats going on when you
                re online.
              </p>
            </div>
            <div style={{ marginTop: '10%' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" defaultChecked />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>Comments</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    Comments on your posts and replies to comments
                  </p>
                </Title>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" defaultChecked />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>Reminders</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    These are notification to remaind you of updates you might
                    have missed.
                  </p>
                </Title>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Switch size="small" />
                <Title level={5} style={{ padding: '0px 20px' }}>
                  <b>More activity about you</b>
                  <br />
                  <p style={{ fontSize: '10px', color: 'grey' }}>
                    These are notification for posts on your profile, likes and
                    other reactions to your posts, and more.
                  </p>
                </Title>
              </div>
            </div>
          </Col>
          <Col xs={24} xl={24}>
            <div style={{ float: 'right' }}>
              <Button size="large">Update</Button>
            </div>
          </Col>
        </Row>
      </Card>
      <Card title="Delete your account" className={settingStyle.cardHeader}>
        <div>
          <p style={{ color: 'grey' }}>
            When you delete your account, you lose access to Front account
            services, and we permanently delete your personal data. You can
            cancel the deletion for 14 days
          </p>
          <div style={{ marginTop: '10px' }}>
            <Checkbox onChange={onChange}>
              Confirm that i want to delete my account.
            </Checkbox>
          </div>
          <div style={{ float: 'right' }}>
            <Space wrap>
              <Button>Learn More</Button>
              <Button type="primary" danger>
                Delete
              </Button>
            </Space>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Settings;
