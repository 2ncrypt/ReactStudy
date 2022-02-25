import React from 'react';

function TestProps2({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
}

TestProps2.defaultProps = {
    name: '이름없음',
    color:'pink'
}

export default TestProps2;