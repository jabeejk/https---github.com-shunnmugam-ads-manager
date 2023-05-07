import { Col, Row, Typography, Form, Input, Select, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import profiledesign from './profileStyle.module.css';
const { Title } = Typography;

function Profile() {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={24}>
          <Title level={4}>
            <b>Profile / business details</b>
          </Title>
          <p>
            Please fill the below details in accordance to the payee and holder
            of your advertiser account, this information is used for invoicing
            and for KYC purposes.
          </p>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} xl={24}>
          <div className={profiledesign.formDesign}>
            <Form layout="vertical">
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Phone Number">
                    <Input placeholder="Enter field 1" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Company Name">
                    <Input placeholder="Enter field 2" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Business Sector">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="Email ID">
                    <Input placeholder="Enter field 4" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Company Website (Optional)">
                    <Input placeholder="Enter field 5" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Country">
                    <Select>
                      <Select.Option value="india">India</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="City">
                    <Input placeholder="Enter field 7" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="State">
                    <Input placeholder="Enter field 8" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Zip code">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={16}>
                  <Form.Item label="Street Address 1">
                    <Input placeholder="Enter field 10" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Street Address 2">
                    <Input placeholder="Enter field 11" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Form.Item label="CIN">
                    <Input placeholder="Enter field 12" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="GSTIN">
                    <Input placeholder="Enter field 13" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="FSSAI">
                    <Select>
                      <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Button>
                    Submit <ArrowRightOutlined />
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Profile;
