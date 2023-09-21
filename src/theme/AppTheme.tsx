import React, { useState } from 'react';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Drawer, Modal, Switch, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import {
  Button,
  Card,
  Divider,
  Dropdown,
  Form,
  Input,
  Select,
  Space,
  Tabs,
  Typography,
} from 'antd';
import { DataType } from '@/types/shared/Theme';

const AppTheme = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [form] = Form.useForm();
  const { Title, Text } = Typography;

  const tabitems = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',

      filterMode: 'tree',
      width: '30%',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
      width: '30%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '30%',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '30%',
      sorter: (a, b) => a.age - b.age,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },

    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      status: <Switch defaultChecked />,
    },
  ];
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Title>Search</Title>
        <Input
          size="large"
          autoComplete="off"
          placeholder="Search Here"
          style={{ width: '20%' }}
          suffix={<SearchOutlined style={{ fontSize: '24px' }} />}
        />
        <br></br>
        <Button type="primary" htmlType="submit">
          Button
        </Button>
        <Button>Default</Button>
        <Divider />
        <Form
          form={form}
          name="theme"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          {/* Your form items ftabor theme customization */}
        </Form>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>{' '}
        <Title level={4}>h4. Ant Design</Title>
        <Title level={5}>h5. Ant Design</Title>
        <Text type="danger">Ant Design (secondary)</Text>
        <Tabs defaultActiveKey="1" items={tabitems} />
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>Drop Down</Space>
        </Dropdown>
        <Space direction="vertical" size={24}>
          <Card style={{ width: 328 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
          <Select
            size="large"
            defaultValue="Select Option"
            style={{ width: 200 }}
            options={[
              { label: 'AIRAPPLECART', value: 'airapplecart' },
              { label: 'RND', value: 'rnd' },
            ]}
          />
          <Input
            size="large"
            autoComplete="off"
            placeholder="type..."
            prefix={<UserOutlined />}
          />
        </Space>
        <Table
          columns={columns}
          rowSelection={rowSelection}
          dataSource={data}
        />
        <Button type="primary" onClick={showDrawer}>
          Open Drawer
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          onClose={onCloseDrawer}
          open={openDrawer}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Space>
    </div>
  );
};

export default AppTheme;
