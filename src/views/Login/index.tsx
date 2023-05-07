import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Carousel, Col, Divider, Form, Input, Layout, Row } from 'antd';
import { LeftOutlined, RightOutlined, GoogleOutlined } from '@ant-design/icons';
import Template1 from '../../components/headerTemplate1/Headertemplate';
import Footer from '../../components/footer/Footer';

import logStyle from './LoginStyle.module.css';

const SampleNextArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715'
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props: {
  className: any;
  style: any;
  onClick: any;
}) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715'
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: (
    <SampleNextArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  ),
  prevArrow: (
    <SamplePrevArrow
      className={undefined}
      style={undefined}
      onClick={undefined}
    />
  )
};

const isValidEmail = (value: string): boolean => {
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const isValidPhoneNumber = (value: string): boolean => {
  // Phone number validation regex
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(value);
};

const isValidOTPfun = (value: string): boolean => {
  // OTP validation regex
  const otpRegex = /^\d{6}$/;
  return otpRegex.test(value);
};

function Login() {
  const [form] = Form.useForm();
  const [formOTP] = Form.useForm();
  const [isValid, setIsValid] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isValidOTP, setIsValidOTP] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  // const [passcode, setPasscode] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setIsBlurred(true);
    setIsValid(isValidEmail(newValue) || isValidPhoneNumber(newValue));
  };

  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newOtpval = event.target.value;
    setIsValidOTP(isValidOTPfun(newOtpval));
  };

  const handleSendOTP = () => {
    setShowSecondForm(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleLogin = () => {};

  return (
    <>
      <Layout>
        <Template1 />
      </Layout>
      <Layout>
        <Row>
          <Col xs={24} xl={13}>
            <div className={logStyle.carousel_container}>
              <div className={logStyle.subCarousel}>
                <Carousel arrows {...settings} autoplay dots={false}>
                  <div>
                    <h1 className={logStyle.contentStyle}>1</h1>
                  </div>
                  <div>
                    <h1 className={logStyle.contentStyle}>2</h1>
                  </div>
                  <div>
                    <h1 className={logStyle.contentStyle}>3</h1>
                  </div>
                  <div>
                    <h1 className={logStyle.contentStyle}>4</h1>
                  </div>
                </Carousel>
                <div className={logStyle.content_below_carousel}>
                  <p>Set your daily budget</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} xl={11}>
            <div className={logStyle.right_part}>
              <div className={logStyle.form_content}>
                <h1 style={{ fontSize: '4rem', textAlign: 'start' }}>
                  Hey, <br /> Welcome Back!
                </h1>
                <p
                  style={{
                    marginBottom: '20px',
                    color: 'grey',
                    fontSize: '1rem'
                  }}
                >
                  We are happy to see you back!
                </p>

                <Form layout="vertical" autoComplete="off" form={form}>
                  <Form.Item
                    name="input"
                    label="Mobile Number or Email"
                    style={{ fontWeight: 'bold' }}
                    rules={[
                      {
                        required: true,
                        message:
                          'Please enter a valid email address or phone number'
                      }
                    ]}
                    validateStatus={
                      isBlurred && !isValid ? 'error' : isValid ? 'success' : ''
                    }
                    help={
                      isBlurred && !isValid
                       ? 'Please enter a valid email address or phone number'
                        : ''
                    }
                  >
                    <Input onChange={handleInputChange} size={'large'} />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      style={{
                        backgroundColor: 'grey',
                        float: 'right',
                        color: 'white'
                      }}
                      size={'large'}
                      onClick={handleSendOTP}
                      disabled={!isValid}
                    >
                      Send OTP
                    </Button>
                  </Form.Item>
                </Form>
                {showSecondForm && (
                  <Form layout="vertical" autoComplete="off" form={formOTP}>
                    <Form.Item
                      name="passcode"
                      label="OTP"
                      style={{ fontWeight: 'bold' }}
                      rules={[
                        { required: true, message: 'Please enter a OTP Number' }
                      ]}
                      validateStatus={isValidOTP ? 'success' : 'error'}
                      help={!isValidOTP && 'Please enter a 6-digit OTP'}
                    >
                      <Input
                        size={'large'}
                        // value={passcode}
                        onChange={handleOTPChange}
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        style={{
                          backgroundColor: 'grey',
                          float: 'right',
                          color: 'white'
                        }}
                        block
                        size={'large'}
                        onClick={handleLogin}
                        disabled={!isValidOTP}
                      >
                        Login
                      </Button>
                    </Form.Item>
                  </Form>
                )}
                <Divider plain style={{ borderColor: 'grey' }}>
                  OR
                </Divider>
                <Form.Item>
                  <Link to="/">
                    <Button block size={'large'}>
                      <span style={{ float: 'left' }}>
                        <GoogleOutlined /> Login with Google
                      </span>
                    </Button>
                  </Link>
                </Form.Item>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
      <Layout>
        <Footer />
      </Layout>
    </>
  );
}
export default Login;
