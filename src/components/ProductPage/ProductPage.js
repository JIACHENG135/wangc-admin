import {useState} from 'react';
import {Timeline, Tween} from 'react-gsap';
import {Row,Col, Switch} from 'antd';
import {
    ClockCircleOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import InputPage from './InputPage';
function ProductPage() {
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
        <div >
            <Link to="/product/input">输入</Link>
        </div>

    )
}
export default ProductPage;