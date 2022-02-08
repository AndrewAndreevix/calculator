import { Pole } from "./component";


function Index() {
  return (
    <div className="App">
      <h1>Converter</h1>
      <Pole/>
    </div>
  );
}

function App() {
  return (
    <>
      <Index/>
      <h1 id="intro">calculator of rates</h1>
      <h2 id="desc">select your currency and currency that you want</h2>
    </>
  );
}



export default App;
