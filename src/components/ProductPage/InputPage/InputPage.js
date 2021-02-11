import React, { useState, useEffect, useRef, Children } from 'react';
import { Form, Input, InputNumber, Modal, Button, Avatar, Typography,DatePicker,Tooltip,Select,Row,Col } from 'antd';
import { SmileOutlined, UserOutlined,QuestionCircleOutlined,PlusOutlined } from '@ant-design/icons';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

const addIcontLayout = {
  sm:{
    span: 16,
    offset: 4
  },
  xs:{
    span:18,
    offset:0
  }
}

const categories = [
  { label: '家禽类制品', value: 0 },
  { label: '蛋类制品', value: 1 },
];
const chickenOptions = [
  { label: '黑良凤', value: '黑良凤' },
  { label: '油鸡', value: '油鸡' },
  { label: '试验鸡', value: '试验鸡' },
]
const eggOptions = [
  { label: '油鸡蛋', value: '油蛋' },
  { label: '试验鸡蛋', value: '试验鸡蛋' },
]

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
  const prevVisibleRef = useRef();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalChickenForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const {Option} = Select;
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="家禽制品" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="chickenForm">
        <Form.Item
          name="chicken"
          label="商品名称"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            {(chickenOptions.map(item => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            )))}
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          label="价格"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="number"
          label="数量"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const ModalEggForm = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const {Option} = Select;
  useResetFormOnCloseModal({
    form,
    visible,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal title="蛋制品" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="eggForm">
        <Form.Item
            name="eggs"
            label="蛋类名称"
            rules={[
              {
                required: true,
              },
            ]}
          >
          <Select>
            {(eggOptions.map(item => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            )))}
          </Select>
        </Form.Item>
        <Form.Item
          name="number"
          label="数量"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="price"
          label="价格"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function InputPage() {
    const [chickvisible, setChickVisible] = useState(false);
    const [eggvisible, setEggVisible] = useState(false);
    const [cate, setCate] = useState(0);
    const [realValue, setRealValue] = useState(0);

    const showChickenModal = () => {
      setChickVisible(true);
    };
  
    const hideChickModal = () => {
      setChickVisible(false);
    };
    const showEggModal = () => {
      setEggVisible(true);
    };
  
    const hideEggModal = () => {
      setEggVisible(false);
    };
    const onFinish = (values) => {
      console.log('Finish:', values);
    };
  
    const handleChange = (value) => {
      setCate(value)
    };

    const deductRealValue = (value) => {
      setRealValue(realValue - value);
    }

    return (
        <>
        <Form.Provider
          onFormFinish={(name, { values, forms }) => {
            if (name === 'chickenForm') {
              const { basicForm } = forms;
              const chicken = basicForm.getFieldValue('chicken') || [];
              
              basicForm.setFieldsValue({
                chicken: [...chicken, values],
              });
              const newChicken = basicForm.getFieldValue('chicken') || [];
              var curvalue = realValue;
              for(let i=0;i<newChicken.length;i++){
                curvalue = curvalue + newChicken[i].number*newChicken[i].price;
              }
              setRealValue(curvalue)
              setChickVisible(false);
            }
            if (name === 'eggForm') {
              const { basicForm } = forms;
              const eggs = basicForm.getFieldValue('eggs') || [];
              console.log(eggs)
              basicForm.setFieldsValue({
                eggs: [...eggs, values],
              });
              const newEggs = basicForm.getFieldValue('eggs') || [];
              var curvalue = realValue;
              for(let i=0;i<newEggs.length;i++){
                curvalue = curvalue + newEggs[i].number*newEggs[i].price;
              }
              setRealValue(curvalue)
              setEggVisible(false);
            }
          }}
        >
          <Form {...layout} name="basicForm" onFinish={onFinish}>
            <Form.Item name="date-picker" label="日期" required={true}>
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
            <Form.Item name="categories" label="商品种类" rules={[{ required: true, message: '请选择商品种类' }]}>
              <Select options={categories} onChange={handleChange} />
            </Form.Item>
            <Form.Item
              label="已输入商品列表"
              shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
            >
              {({ getFieldValue }) => {
                const chicken = getFieldValue('chicken') || [];
                const eggs = getFieldValue('eggs') || [];
                const chickenText = chicken.length ? (
                  <ul>
                    {chicken.map((chick, index) => (
                      <Typography.Text className="ant-form-text" type="secondary">
                        <SmileOutlined /> {chick.chicken} - {chick.price}
                      </Typography.Text>
                    ))}
                  </ul>
                ) : (
                  <Typography.Text className="ant-form-text" type="secondary">
                     <SmileOutlined /> 还未输入禽类商品 
                  </Typography.Text>
                );
                const eggText = eggs.length ? (
                  <ul>
                    {eggs.map((egg, index) => (
                      <Typography.Text className="ant-form-text" type="secondary">
                        <SmileOutlined /> {egg.eggs} - {egg.number} 
                      </Typography.Text>
                    ))}
                  </ul>
                ):(
                  <Typography.Text className="ant-form-text" type="secondary">
                   <SmileOutlined /> 还未输入蛋类商品 
                  </Typography.Text>
                )
                return <><span>{chickenText}{eggText}</span></>
              }}
            </Form.Item>
            <Row>
              <Col  {...addIcontLayout}>
                <Form.Item>

                      <Button type="dashed" onClick={cate===1 ? showEggModal : showChickenModal} block icon={<PlusOutlined />}>
                        添加商品
                      </Button>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="订单优惠金额" name="discount">
              <InputNumber onChange={deductRealValue}/>
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
            <Form.Item label="订单应收金额" name="real-sum">
              {realValue}
            </Form.Item>
            <Row>
              <Col {...addIcontLayout}>
                <Form.Item  >
                  <Button type="primary" htmlType="submit">
                    提交
                  </Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
  
          <ModalChickenForm visible={chickvisible} onCancel={hideChickModal} />
          <ModalEggForm visible={eggvisible} onCancel={hideEggModal} />

        </Form.Provider>
      </>
    )
}
export default InputPage;