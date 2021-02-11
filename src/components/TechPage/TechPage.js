import {Collapse} from 'antd';
import { faUserEdit,faBook,faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TechPage() {

    function callback(key) {
        console.log(key);
      }

    const { Panel } = Collapse;
    return (
        <div >
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header={<><FontAwesomeIcon icon={faUserEdit} /><span style={{paddingLeft: '10px'}}>录单</span></>} key="1">
                <p>
                    
                </p>
                </Panel>
                <Panel header={<><FontAwesomeIcon icon={faBook} /><span style={{paddingLeft: '10px'}}>销售计划</span></>} key="2">
                <p>
                </p>
                </Panel>
                <Panel header={<><FontAwesomeIcon icon={faChartLine} /><span style={{paddingLeft: '10px'}}>统计报告</span></>}key="3">
                <p>
                </p>
                </Panel>
            </Collapse>
        </div>

    )
}
export default TechPage;