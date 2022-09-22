import {
  Button,
  Card,
  Form,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
  Tabs,
} from "antd";
import Icon from "components/util/Icon";
import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineWifi } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { ImImage } from "react-icons/im";
import { GrServers } from "react-icons/gr";
import MapMarkPin from "./MapMarkPin";
import FormWidgetTabMap from "./FormWidgetTabMap";
import FormWidgetTabPhoto from "./FormWidgetTabPhoto";
import FormWidgetTabAlert from "./FormWidgetTabAlert";
import FormWidgetTabDevice from "./FormWidgetTabDevice";
type Props = {};

const FormWidget = (props: Props) => {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [Tab, setTab] = useState();

  let interval: number | undefined | NodeJS.Timer = undefined;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const changTab = (e: RadioChangeEvent) => {
    setTab(e.target.value);
    // form.resetFields()
    form.setFieldsValue({ mode: e.target.value });
  };

  const onFinish = (values: any) => {
    console.log(values);
    let body = {
      title: values.title,
      dashboards:0,
      type:0,
      settings: {
        filter: {
          module: 2,
        },
        map_setting: {
          //case widget type list only
          latlng: values.latlng,
          pinColor: values.pinColor,
          pinIcon: values.pinIcon,
          img: {
            title: "lisa.jpg",
            type: "image/jpeg",
            path: "24c7a6e3-7cc4-4cc1-bafa-530844aab673/lisa.jpg",
            url: "https://sitearound-temp-upload.s3.amazonaws.com/24c7a6e3-7cc4-4cc1-bafa-530844aab673/lisa.jpg?AWSAccessKeyId=AKIAV27WOJCVVCWU5CHE&Signature=gkIQlVS8b95MH6N3jLDLZSGa658%3D&Expires=1663573657",
          },
          desImg: values.desImg,
        },
      },
      "created_at": "2022-04-18T08:42:33.192404Z",
    };
    console.log(body);
  };

  useEffect(() => {
    console.log("mount");
    interval = setInterval(() => console.log("interval"), 1000);
  }, []);

  useEffect(
    () => () => {
      console.log("before unmount");
      clearInterval(interval);
    },
    []
  );
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Add Widget"
        width={1000}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <Form.Provider onFormChange={(name)=>{console.log(name);
        }}> */}

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item name="title" label="Widget Title">
            <Input />
          </Form.Item>
          <Form.Item name="mode" label="Select Mode">
            <Radio.Group value={Tab} buttonStyle="solid" onChange={changTab}>
              <Radio.Button value="Device">Device</Radio.Button>
              <Radio.Button value="Alert">Alert</Radio.Button>
              <Radio.Button value="Photo">Photo</Radio.Button>
              <Radio.Button value="Map">Map</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Tabs activeKey={Tab} tabBarStyle={{ display: "none" }}>
            <Tabs.TabPane key=""></Tabs.TabPane>
            <Tabs.TabPane key="Device">
              <FormWidgetTabDevice form={form} />
            </Tabs.TabPane>
            <Tabs.TabPane key="Alert">
              <FormWidgetTabAlert form={form} />
            </Tabs.TabPane>
            <Tabs.TabPane key="Photo">
              <FormWidgetTabPhoto />
            </Tabs.TabPane>
            <Tabs.TabPane key="Map">
              <FormWidgetTabMap />
            </Tabs.TabPane>
          </Tabs>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* </Form.Provider> */}
      </Modal>
    </>
  );
};

export default FormWidget;
