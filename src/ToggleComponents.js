import * as React from 'react';

console.log('App.js loaded!');

function Toggle() {

  console.log('Toggle Rendered!');
  return <h2>Toggle Rendered</h2>;

}

function App() {
  const [toggle, setToggle] = React.useState(false);
  console.log('App Component rendered!');
  return (
    <div>
    <h1>Hello World</h1>
    <button onClick={() => {
      console.log('button clicked');
      setToggle(!toggle);
    }}>Toggle Component</button>
    {toggle && <Toggle/> }
    </div>
  );
}

export default App;