import {useState} from 'react';
import {Timeline, Tween} from 'react-gsap';
import {Row,Col} from 'antd';
import {
    ClockCircleOutlined,
} from "@ant-design/icons";
function MainPage() {
    const [angle,setAngle] = useState(0);
    const [dura,setDura] = useState(1000);
    const onMouseEnter = () => {
        console.log("Mouse in and ")
        setAngle(90)
    }
    const onMouseLeave = () => {
        setAngle(0)
    }
    return (
        <Row>
            <Col span={24}>
                <Tween to={{ rotation: angle }} position="+=1">
                    <ClockCircleOutlined onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ fontSize: '20px'}} />
                </Tween>
            </Col>
        </Row>

    )
}
export default MainPage;