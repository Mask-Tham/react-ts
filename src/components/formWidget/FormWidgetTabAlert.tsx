import {
  Button,
  Form,
  FormInstance,
  Radio,
  RadioChangeEvent,
  Select,
  Table,
  Tabs,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { useState } from "react";
import { PickColor, radioPickColor, radioPinColor } from "./FormWidgetTabMap";

const TabTile = () => {
  const [RadioStatus, setRadioStatus] = useState();
  const changRadioStatus = (e: RadioChangeEvent) => {
    setRadioStatus(e.target.value);
  };
  return (
    <>
      <Form.Item label="Filtered by Alert Template">
        <Select>
          <Select.Option value="demo">Filtered by Alert Template</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered by Template Name Containing">
        <Select>
          <Select.Option value="demo">
            Filtered by Template Name Containing
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filter by Sensor Name">
        <Select>
          <Select.Option value="demo">Filter by Sensor Name</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered by Location?">
        <Button type="dashed">Location</Button>
      </Form.Item>
      <Form.Item label="Filtered by Gateway?">
        <Button type="dashed">Gateway</Button>
      </Form.Item>
      <Form.Item label="Filtered by Sensor Type">
        <Button type="dashed">Type</Button>
      </Form.Item>
      <Form.Item label="Filtered by Alert Status">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Armed">Armed</Radio>
          <Radio value="Disarmed">Disarmed</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filtered Date Created">
        <Select>
          <Select.Option value="demo">Filtered Date Created</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered Date Disarmed">
        <Select>
          <Select.Option value="demo">Filtered Date Disarmed</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered by Alert Condition (Select Only One)">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Armed">Alert Email Equal to</Radio>
          <Radio value="Disarmed">Alert Email Containing</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const TabBarGraph = () => {
  const [Pincolor, setPincolor] = useState<string>("#565656");
  const changPincolor = (e: RadioChangeEvent) => {
    setPincolor(e.target.value);
  };

  const [RadioStatus, setRadioStatus] = useState();
  const changRadioStatus = (e: RadioChangeEvent) => {
    setRadioStatus(e.target.value);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Serial Number',
      dataIndex: 'age',
    },
    {
      title: 'Type',
      dataIndex: 'address',
    },
    {
      title: 'Network',
      dataIndex: 'address',
    },
    {
      title: 'Location',
      dataIndex: 'address',
    },
    {
      title: 'Active Status',
      dataIndex: 'address',
    },
    {
      title: 'Signal',
      dataIndex: 'address',
    },
    {
      title: 'Battery',
      dataIndex: 'address',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
  ];

  return (
    <>
      <Form.Item label="Group By (Select Only One)">
        <Select>
          <Select.Option value="demo">Group By (Select Only One)</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="pinColor" label="Select Background Color">
        <Radio.Group
          buttonStyle="outline"
          value={Pincolor}
          onChange={changPincolor}
        >
          {radioPinColor.map((item, item_i) => {
            return (
              <Radio.Button value={item} style={radioPickColor} key={item_i}>
                <PickColor color={item} />
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filter by Alert Template Name">
        <Select>
          <Select.Option value="demo">Filter by Alert Template Name</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered by Location?">
        <Button type="dashed">Location</Button>
      </Form.Item>
      <Form.Item label="Filtered by Gateway?">
        <Button type="dashed">Gateway</Button>
      </Form.Item>
      <Form.Item label="Filter by Sensor Name">
        <Select>
          <Select.Option value="demo">Filter by Sensor Name</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filter by Specific Sensor">
        <Select>
          <Select.Option value="demo">Filter</Select.Option>
        </Select>
      </Form.Item>
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Form.Item label="Filtered by Sensor Type?">
        <Button type="dashed">Type</Button>
      </Form.Item>
      <Form.Item label="Filtered by Alert Status">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Armed">Armed</Radio>
          <Radio value="Disarmed">Disarmed</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filtered Date Created">
        <Select>
          <Select.Option value="demo">Created</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered Date Disarmed">
        <Select>
          <Select.Option value="demo">Disarmed</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Filtered by Alert Condition (Select Only One)">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Armed">Alert Email Equal to</Radio>
          <Radio value="Disarmed">Alert Email Containing</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Graph Settings">
        <Select>
          <Select.Option value="demo">Disarmed</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
};
type Props = {
  form: FormInstance<any>;
};

const FormWidgetTabAlert = ({ form }: Props) => {
  const [TabView, setTabView] = useState("Tile");
  const changTabView = (e: RadioChangeEvent) => {
    setTabView(e.target.value);
    // form.resetFields()
    form.setFieldsValue({ modeTabAlert: e.target.value });
  };
  return (
    <>
      <Form.Item name="viewAs" label="View as...">
        <Radio.Group
          value={TabView}
          buttonStyle="solid"
          onChange={changTabView}
        >
          <Radio.Button value="Tile">Tile</Radio.Button>
          <Radio.Button value="List">List</Radio.Button>
          <Radio.Button value="Bar Graph">Bar Graph</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Tabs activeKey={TabView} tabBarStyle={{ display: "none" }}>
        <Tabs.TabPane key="Tile">
          <TabTile />
        </Tabs.TabPane>
        <Tabs.TabPane key="List">dfs</Tabs.TabPane>
        <Tabs.TabPane key="Bar Graph">
          <TabBarGraph />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default FormWidgetTabAlert;
