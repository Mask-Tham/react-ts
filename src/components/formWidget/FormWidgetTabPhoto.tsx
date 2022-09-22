import { Form, message, Upload, UploadProps } from "antd";
import React from "react";
import { BsCloudUpload } from "react-icons/bs";

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

// type Props = {};

const FormWidgetTabPhoto = () => {
  return (
    <>
      <Form.Item name="image" label="Pin Name">
        <Dragger {...props} listType="picture" maxCount={1} style={{ borderColor: "#459BFF",background:'#fff' }}>
          <p
            className="ant-upload-drag-icon"
            style={{ fontSize: "2em", color: "#459BFF" }}
          >
            <BsCloudUpload />
          </p>
          <p className="ant-upload-text" style={{ color: "#459BFF" }}>
            Click or Drag&Drop File Your General Image
          </p>
        </Dragger>
      </Form.Item>
    </>
  );
};

export default FormWidgetTabPhoto;
