import {
  Button,
  DatePicker,
  DatePickerProps,
  Divider,
  Form,
  FormInstance,
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Table,
  Tabs,
  TimePicker,
  Tooltip,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { useState } from "react";
import { PickColor, radioPickColor, radioPinColor } from "./FormWidgetTabMap";
import moment from "moment";

const columnsTable: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Serial Number",
    dataIndex: "age",
  },
  {
    title: "Type",
    dataIndex: "address",
  },
  {
    title: "Network",
    dataIndex: "address",
  },
  {
    title: "Location",
    dataIndex: "address",
  },
  {
    title: "Active Status",
    dataIndex: "address",
  },
  {
    title: "Signal",
    dataIndex: "address",
  },
  {
    title: "Battery",
    dataIndex: "address",
  },
];

const TabTile = () => {
  const [RadioStatus, setRadioStatus] = useState();
  const changRadioStatus = (e: RadioChangeEvent) => {
    setRadioStatus(e.target.value);
  };
  return (
    <>
      <Form.Item name="title" label="Filtered by Sensor Name">
        <Input placeholder="Name Containing" />
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
      <Form.Item label="Filtered by Status">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Armed">Active</Radio>
          <Radio value="Disarmed">Inactive</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filtered by Battery Level">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Equal to">Equal to</Radio>
          <Radio value="Lower Than">Lower Than</Radio>
          <Radio value="Greater Than">Greater Than</Radio>
          <Radio value="Between">Between</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filtered by Signal Strength">
        <Radio.Group value={RadioStatus} onChange={changRadioStatus}>
          <Radio value="Equal to">Equal to</Radio>
          <Radio value="Lower Than">Lower Than</Radio>
          <Radio value="Greater Than">Greater Than</Radio>
          <Radio value="Between">Between</Radio>
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
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Serial Number",
      dataIndex: "age",
    },
    {
      title: "Type",
      dataIndex: "address",
    },
    {
      title: "Network",
      dataIndex: "address",
    },
    {
      title: "Location",
      dataIndex: "address",
    },
    {
      title: "Active Status",
      dataIndex: "address",
    },
    {
      title: "Signal",
      dataIndex: "address",
    },
    {
      title: "Battery",
      dataIndex: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ];

  return (
    <>
      <Form.Item label="Filtered by Type (Select Only 1 Type)">
        <Select>
          <Select.Option value="demo">
            Filtered by Type (Select Only 1 Type)
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="themeColor" label="Select Theme">
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
      <Form.Item label="Filtered by Sensor Property (Select No More Than 5 Sensors)">
        <Select>
          <Select.Option value="demo">Filter</Select.Option>
        </Select>
      </Form.Item>
      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Form.Item label="Graph Settings">
        <Select placeholder="Select Time Range">
          <Select.Option value="demo">Disarmed</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
};

const TabLineGraph = () => {
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
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Serial Number",
      dataIndex: "age",
    },
    {
      title: "Type",
      dataIndex: "address",
    },
    {
      title: "Network",
      dataIndex: "address",
    },
    {
      title: "Location",
      dataIndex: "address",
    },
    {
      title: "Active Status",
      dataIndex: "address",
    },
    {
      title: "Signal",
      dataIndex: "address",
    },
    {
      title: "Battery",
      dataIndex: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ];

  return (
    <>
      <Form.Item label="Filtered by Type (Select Only 1 Type)">
        <Select>
          <Select.Option value="demo">
            Filtered by Type (Select Only 1 Type)
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="themeColor" label="Select Theme">
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
      <Form.Item label="Filtered by Sensor Property (Select No More Than 5 Sensors)">
        <Select>
          <Select.Option value="demo">Filter</Select.Option>
        </Select>
      </Form.Item>
      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Form.Item label="Graph Settings">
        <Form.Item name="timerang" label="Graph Settings" noStyle>
          <Select
            placeholder="Select Time Range (X Axis):"
            style={{ marginBottom: "10px" }}
          >
            <Select.Option value="demo">Disarmed</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="maxValue" label="Graph Settings" noStyle>
          <Input placeholder="Select Max Value (Y Axis):" type="number" />
        </Form.Item>
      </Form.Item>
    </>
  );
};

const TabValue = ({ form }:Props) => {
  const [TabViewValue, setTabViewValue] = useState("");
  const changTabViewValue = (e: RadioChangeEvent) => {
    setTabViewValue(e.target.value);
    // form.resetFields()
    // form.setFieldsValue({ mode: e.target.value });
  };

  return (
    <>
      <Form.Item name="viewAs" label="View as...">
        <Radio.Group
          value={TabViewValue}
          buttonStyle="solid"
          onChange={changTabViewValue}
        >
          <Tooltip placement="top" title="Single Device">
            <Radio.Button value="Current">Current</Radio.Button>
          </Tooltip>
          <Tooltip placement="top" title="Multiple Devices">
            <Radio.Button value="Sum">Sum</Radio.Button>
          </Tooltip>
          <Tooltip placement="top" title="Multiple Devices">
            <Radio.Button value="Average">Average</Radio.Button>
          </Tooltip>
          <Tooltip placement="top" title="Between Devices">
            <Radio.Button value="Diff">Diff</Radio.Button>
          </Tooltip>
        </Radio.Group>
        <Tabs activeKey={TabViewValue} tabBarStyle={{ display: "none" }}>
          <Tabs.TabPane key=""></Tabs.TabPane>
          <Tabs.TabPane key="Current">
            <TabValueCurrent form={form}/>
          </Tabs.TabPane>
          <Tabs.TabPane key="Sum">dfs</Tabs.TabPane>
          <Tabs.TabPane key="Average"></Tabs.TabPane>
          <Tabs.TabPane key="Diff"></Tabs.TabPane>
        </Tabs>
      </Form.Item>
    </>
  );
};

const TabValueCurrent = ({ form }:Props) => {
  const [TimeSelect, setTimeSelect] = useState();
  const changTimeSelect = (e: RadioChangeEvent) => {
    setTimeSelect(e.target.value);
    console.log(TimeSelect,e.target.value);
    console.log(form);
    
    form.setFieldsValue({ time: 'qwertyuio' });
    // form.resetFields()
    if(e.target.value==='Now'){
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
  ];

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Form.Item label="Type">
        <Select placeholder="Select">
          <Select.Option value="demo">Select</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sensor List (Select Only 1 Type)">
        <Select placeholder="Filter">
          <Select.Option value="demo">Select</Select.Option>
        </Select>
      </Form.Item>
      <Table
        rowSelection={{
          type: "radio",
          ...rowSelection,
        }}
        columns={columnsTable}
        dataSource={data}
      />
      <Form.Item label="Select Time">
        <Radio.Group value={TimeSelect} onChange={changTimeSelect}>
          <Space direction="vertical">
            <Radio value="Now">Now</Radio>
            <Radio value="Specific Time">
              Specific Time <DatePicker onChange={onChangeDate} />
              <TimePicker defaultValue={moment()} format={"HH:mm"} />
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

type Props = {
  form: FormInstance<any>;
};

const FormWidgetTabDevice = ({ form }: Props) => {
  const [TabView, setTabView] = useState("");
  const changTabView = (e: RadioChangeEvent) => {
    setTabView(e.target.value);
    // form.resetFields()
    // form.setFieldsValue({ mode: e.target.value });
  };
  return (
    <>
      <Form.Item name="viewAsValue" label="View as...">
        <Radio.Group
          value={TabView}
          buttonStyle="solid"
          onChange={changTabView}
        >
          <Radio.Button value="Tile">Tile</Radio.Button>
          <Radio.Button value="List">List</Radio.Button>
          <Radio.Button value="Bar Graph">Bar Graph</Radio.Button>
          <Radio.Button value="Line Graph">Line Graph</Radio.Button>
          <Radio.Button value="Value">Value</Radio.Button>
          <Radio.Button value="Meter">Meter</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Tabs activeKey={TabView} tabBarStyle={{ display: "none" }}>
        <Tabs.TabPane key=""></Tabs.TabPane>
        <Tabs.TabPane key="Tile">
          <TabTile />
        </Tabs.TabPane>
        <Tabs.TabPane key="List">dfs</Tabs.TabPane>
        <Tabs.TabPane key="Bar Graph">
          <TabBarGraph />
        </Tabs.TabPane>
        <Tabs.TabPane key="Line Graph">
          <TabLineGraph />
        </Tabs.TabPane>
        <Tabs.TabPane key="Value">
          <TabValue form={form}/>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default FormWidgetTabDevice;
