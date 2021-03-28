import React, { useState } from 'react';
import { Switch } from 'antd';
import { Container, SwitchCont} from './index.styled';
import '../../styles/switcher.less';

const TestComponent: React.FC = () => {

  const [checked_1, setChecked_1] = useState(false);
  // const handleChange_1 = nextChecked => {
  //   setChecked_1(nextChecked);
  // };

  const [checked_2, setChecked_2] = useState(true);
  // const handleChange_2 = nextChecked => {
  //   setChecked_2(nextChecked);
  // };

  return <Container>
    <SwitchCont>
      <span className='title'>{checked_1 ? 'Да' : 'Нет'}</span>
      <Switch onChange={nextChecked => setChecked_1(nextChecked)}/>
    </SwitchCont>
    <SwitchCont>
    <span className='title'>{checked_2 ? "Да" : "Нет"}</span>
      <Switch defaultChecked onChange={nextChecked => setChecked_2(nextChecked)}/>
    </SwitchCont>
  </Container>;

};

export default TestComponent;