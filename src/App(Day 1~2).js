import logo from './logo.svg';
import './App.css';
import Header from "./1st/Header";
import Hello from "./1st/hello";

import TestProps2 from "./1st/props2";
import TestProps from "./1st/props1";
import Wrapper from "./1st/Wrapper";
import Counter from "./1st/Counter";
import InputSample from "./2st/InputSample";
import MultiInputSample from "./2st/MultiInputSample";
import UseRefSample from "./2st/useRefSample";
import UserList from "./2st/UserList";

function AppDay12() {
    const name = "Hyunsul Kim";
    const style = {
        backgroundColor : 'black',
        color: 'aqua',
        fontSize :'24',
        padding :'1rem'

    }
  return (
      // <Header/>
      <Wrapper>
          {/*이렇게 2가지로 사용가능하고 이름만 넣어줘도 true로 인식*/}
          {/*<Hello name={"react"} color={"red"} isSpecial={true}/>*/}
          <Hello name={"react"} color={"red"} isSpecial/>
          <TestProps name={"react"} color={"blue"}/>
          <TestProps2 />
          <TestProps2 name={"react"} color={"blue"}/>
          <div style={style}>{name}</div>
          <div className="gray-box"/>
          <Counter/>
          <InputSample/>
          <MultiInputSample/>
          <UseRefSample/>
          <UserList/>
      </Wrapper>

  );
}

export default AppDay12;
