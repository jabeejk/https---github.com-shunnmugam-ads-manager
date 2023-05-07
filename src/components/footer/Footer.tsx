import { Col, Divider, Row } from 'antd';
// import { Link } from 'react-router-dom';

import footerstyle from './FooterStyle.module.css';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <Row>
        <Col xs={24} xl={24}>
          <div className={footerstyle.footer_header}>
            <div className={footerstyle.footer_sub}>
              <h1>Lorem Ipsum in simplu</h1>
            </div>
            <div style={{ padding: '8% 0px 0px 12px' }}>
              <Divider plain style={{ backgroundColor: 'red' }}></Divider>
            </div>
            <div className={footerstyle.flex_container}>
              <div className={footerstyle.flex_item_left}>
                <div className={footerstyle.footerbelow}>
                  <nav className={footerstyle.footer_below_links}>
                    <ul className={footerstyle.nav_link}>
                      <li>
                        <a href="#">T&C</a>
                      </li>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/frequentlyaskedquestions">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className={footerstyle.flex_item_right}>
                <p className={footerstyle.footer_copyright}>
                  &#169; {year} sanju. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
