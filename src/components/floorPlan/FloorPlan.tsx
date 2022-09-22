import {
  Breadcrumb,
  Button,
  Card,
  Col,
  message,
  Row,
  Upload,
  UploadProps,
} from "antd";
import React from "react";
import { FaMap } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { BsCloudUpload } from "react-icons/bs";

const CardLeftTitle = ({ title }: { title: string }) => {
  return (
    <>
      <div
        style={{
          background: "#EAEAEA",
          padding: "0.3em 1em",
          borderRadius: "0.5em",
        }}
      >
        {title}
      </div>
    </>
  );
};

const CardCenterTitle = () => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          color: "#459BFF",
          padding: "0.3em 1em",
          borderRadius: "0.5em",
          border: "1px solid #459BFF",
        }}
      >
        Preview Data
      </div>
    </>
  );
};

const CardRightTitle = () => {
  return (
    <>
      <Button
        shape="circle"
        size="large"
        icon={<RiSettings5Fill />}
        style={{ color: "#459BFF", border: "none" }}
      ></Button>
    </>
  );
};

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

type Props = {};

const Floorplan = (props: Props) => {
  return (
    <div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <FaMap />
            <a href="" style={{ marginLeft: "5px" }}>
              Custom dashboard
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Floor Plan</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card
        title={
          <Row justify="space-between">
            <Col>
              <CardLeftTitle title="My Dashboard" />
            </Col>
            <Col>
              <CardCenterTitle />
            </Col>
            <Col>
              <CardRightTitle />
            </Col>
          </Row>
        }
      >
        <Dragger {...props} style={{borderColor:'#459BFF',}}>
          <p className="ant-upload-drag-icon" style={{ fontSize: "2em",color:'#459BFF' }}>
            <BsCloudUpload />
          </p>
          <p className="ant-upload-text" style={{color:'#459BFF'}}>
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint" style={{color:'#459BFF'}}>
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>
      </Card>
    </div>
  );
};

export default Floorplan;
