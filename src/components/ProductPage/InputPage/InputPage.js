import {useState} from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Slider,
  InputNumber,
  Space,
  Select,
  Button,
  Tooltip
} from 'antd';
import { MinusCircleOutlined, PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';


const { Option } = Select;
const categories = [
  { label: '家禽类制品', value: '家禽类制品' },
  { label: '畜牧类制品', value: '畜牧类制品' },
];
const sights = {
  家禽类制品: ['黑良凤', '油鸡','试验鸡','鸡蛋'],
  畜牧类制品: ['Oriental Pearl', 'The Bund'],
};
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


const mainFormLayout = {
  // xxl:{
  //   span: 20
  // },
  // xl:{
  //   span: 24
  // },
  // lg:{
  //   span: 22
  // },
  // md:{
  //   span: 23
  // },
  sm:{
    span: 24
  },
  // xs:{
  //   span: 24
  // }
}
const rightFormLayout = {
  // xxl:{
  //   span: 4
  // },
  // xl:{
  //   span: 1
  // },
  // lg:{
  //   span: 2
  // },
  // md:{
  //   span: 1
  // },
  sm:{
    span: 16
  },
  // xs:{
  //   span: 0
  // }
}


const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};


const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};



function InputPage() {
  const [form] = Form.useForm();
  const [inputValue, setInputvalue] = useState(100);
  const [realValue, setRealValue] = useState(0);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const onChangeInputValue = (value) => {
    setInputvalue(value)
  };
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  // 数量输入控件




    return (
      <Row >

        <Col {...mainFormLayout}>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
            }}
            scrollToFirstError
          >
            <Form.Item name="date-picker" label="日期" {...config}>
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="order-number"
              label="订单编号"
              rules={[
                {
                  required: true,
                  message: '请输入订单编号',
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            {/* <Form.Item name="slider" label="订单数量">
              <Row>
                <Col span={24}>
                  <Slider
                    marks={{
                      1: '1',
                      5000: '5000',
                      50000: '50000',
                      100000: '100000',
                    }}
                    min={1}
                    max={100000}
                    onChange={onChangeInputValue}
                    value={inputValue}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={100000}
                    style={{ margin: '0 16px' }}
                    value={inputValue}
                    onChange={onChangeInputValue}
                  />
                </Col>
              </Row>
            </Form.Item> */}
            <Form.Item name="categories" label="商品种类" rules={[{ required: true, message: '请选择商品种类' }]}>
              <Select options={categories} onChange={handleChange} />
            </Form.Item>
            <Row>
              <Col sm={4}>
              </Col>
              <Col sm={18}>
                <Form.List className="" name="sights">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(field => (
                        <Space key={field.key} align="baseline">
                          <Row>
                            <Col span={24}>
                              <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, curValues) =>
                                  prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                }
                              >
                                {() => (
                                  <Form.Item
                                    {...field}
                                    label="商品名称"
                                    name={[field.name, 'sight']}
                                    fieldKey={[field.fieldKey, 'sight']}
                                    rules={[{ required: true, message: '请输入商品名称' }]}
                                  >
                                    <Select disabled={!form.getFieldValue('categories')} style={{ width: 130 }}>
                                      {(sights[form.getFieldValue('categories')] || []).map(item => (
                                        <Option key={item} value={item}>
                                          {item}
                                        </Option>
                                      ))}
                                    </Select>
                                  </Form.Item>
                                )}
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item
                                {...field}
                                label="价格"
                                name={[field.name, 'price']}
                                fieldKey={[field.fieldKey, 'price']}
                                rules={[{ required: true, message: '请输入价格' }]}
                              >
                                <InputNumber value={realValue} defaultValue={0}  />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <Form.Item
                                {...field}
                                label="重量"
                                name={[field.name, 'weight']}
                                fieldKey={[field.fieldKey, 'weight']}
                                rules={[{ required: false}]}
                              >
                                <InputNumber value={realValue} defaultValue={0}  />
                              </Form.Item>
                            </Col>
                          </Row>
                          <MinusCircleOutlined onClick={() => remove(field.name)} />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                          添加商品
                        </Button>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Col>
            </Row>
            <Form.Item label="订单应收金额" name="real-sum">
              <InputNumber value={realValue} defaultValue={0}  />
            </Form.Item>
            <Form.Item
              name="discount-value"
              label={
                <span>
                  优惠理由&nbsp;
                  <Tooltip title="请说明为什么优惠">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: '请输入优惠理由',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col {...rightFormLayout}></Col>
      </Row>


    )
}
export default InputPage;