/* eslint-disable import/no-anonymous-default-export */
import { Row, Col } from 'antd';
import {Link} from "react-router-dom";
import { GithubOutlined, TwitterOutlined,InstagramOutlined } from '@ant-design/icons';
export default function() {
    return (
        <div >
            <Row>
                <Col span={24} style={{textAlign:'center'}} >
                    <p  style={{ fontSize:'0.6rem'}}>
                    Copyright © {new Date().getFullYear()}{' '}

                    伊犁荣业农业发展有限公司.{' '}
                    All rights reserved
                    </p>
                </Col>

            </Row>
        </div>
    );
}