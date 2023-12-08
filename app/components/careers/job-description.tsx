import { useState } from "react";
import { strapiUrl } from "~/utils/urls";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';

const JobDescription = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    
    return (
        <div className="items-start flex flex-col mt-10 p-20">
          <div className="text-black text-4xl font-semibold self-stretch w-full max-md:max-w-full">
            Java Microservices Developer
          </div>
          <div className="text-black text-3xl font-semibold self-stretch w-full mt-6 max-md:max-w-full">
            Bengaluru
          </div>
          <div className="text-black text-xl font-medium self-stretch w-full mt-6 max-md:max-w-full">
            11-22-2022
          </div>
          <div className="text-black text-base font-medium self-stretch w-full mt-6 max-md:max-w-full">
            JO-2201-16004
          </div>
          <div className="text-black text-base leading-6 self-stretch w-full mt-6 max-md:max-w-full">
            ivoyant is an emerging digital platform engineering and development
            services company headquartered in Atlanta. At ivoyant, we are <br />
            helping our customers solve complex challenges, support their growth &
            transformation agenda, leveraging technology to make a difference.
          </div>
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-6 self-start max-md:max-w-full">
            Responsibilities:
          </div>
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>Design, develop, test, deploy, maintain and improve software.</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Manage individual project priorities, deadlines and deliverables.
              </li>
            </ul>
          </div>
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-5 self-start max-md:max-w-full">
            Qualifications
          </div>
          <div className="text-black text-base whitespace-nowrap mt-4 self-start max-md:max-w-full">
            <ul>
              <li>3+ years of practical experience in software development.</li>
            </ul>
          </div>
          <div className="text-black text-base mt-2.5 max-md:max-w-full">
            <ul>
              <li>
                BS or Masters degree in Computer Science, similar technical field of
                study or equivalent practical experience.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Software development experience in Java programming language
                (Java8+)
              </li>
            </ul>
          </div>
          <div className="text-black text-base mt-2.5 max-md:max-w-full">
            <ul>
              <li>
                Experience developing REST Microservices with Spring Boot and
                related technologies.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Working proficiency and communication skills in verbal and written
                English.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Working knowledge of Kafka, RabbitMQ, Cassandra, MongoDB preferred.
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Experience in API Design, Database design and
                troubleshooting/debugging
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>
                Must have hands-on and should be able to debug Code and provide{" "}
              </li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>Experience with Devops, CI/CD a plus.</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start max-md:max-w-full">
            <ul>
              <li>Experience with Kubernetes, Docker a plus</li>
            </ul>
          </div>
          <div className="text-black text-lg font-semibold whitespace-nowrap mt-5 self-start">
            Perks & Benifits
          </div>
          <div className="text-black text-base whitespace-nowrap mt-5 self-start">
            <ul>
              <li>Competitive Salary</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Room for growth</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Flexible schedule</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>2 weeks PTO and general holidays</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Health, Dental, Vision, Life Insurance</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>401k</li>
            </ul>
          </div>
          <div className="text-black text-base whitespace-nowrap mt-2.5 self-start">
            <ul>
              <li>Bonus Programs</li>
            </ul>
          </div>
          <button className="btn hero-btn" onClick={showDrawer}>
            Apply Now
          </button>
 <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: 'Please enter url' }]}
              >
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: 'Please choose the type' }]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[{ required: true, message: 'Please choose the approver' }]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>








        </div>
      );  
};
export default JobDescription;