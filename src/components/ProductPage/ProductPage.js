import {useState} from 'react';
import {Timeline, Tween} from 'react-gsap';
import {Row,Col} from 'antd';
import {
    ClockCircleOutlined,
} from "@ant-design/icons";
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
        <div>This is product page</div>

    )
}
export default ProductPage;