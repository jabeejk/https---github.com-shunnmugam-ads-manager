import { Col, Collapse, Layout, Row } from 'antd';
import Template1 from '../../components/headerTemplate1/Headertemplate';
import Footer from '../../components/footer/Footer';

import faqstyle from './FaqStyling.module.css';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FAQ: React.FC = () => {
  return (
    <>
      <Layout>
        <Template1 />
      </Layout>
      <Layout>
        <Row>
          <Col style={{ border: '1px solid black' }} xs={24} xl={24}>
            <div className={faqstyle.container}>
              <h2>FAQ</h2>
              <p>
                At lacus vitae nulla sagittis scelerisque nisl. Pellentesque{' '}
                <br /> duis cursus vestibulum, facilisi ac, sed faucibus.
              </p>
              <Collapse defaultActiveKey={['1']} expandIconPosition="end">
                <Panel header="This is panel header 1" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </div>
          </Col>
        </Row>
      </Layout>
      <Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default FAQ;
