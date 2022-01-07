import logo from './logo.svg';
import './App.css';
import Header from "./Day-1/Header";
import Hello from "./Day-1/hello";

import TestProps2 from "./Day-1/props2";
import TestProps from "./Day-1/props1";
import Wrapper from "./Day-1/Wrapper";
import Counter from "./Day-1/Counter";
import InputSample from "./Day-2/InputSample";
import MultiInputSample from "./Day-2/MultiInputSample";
import UseRefSample from "./Day-2/useRefSample";
import UserList from "./Day-2/UserList";

function App() {
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

export default App;
