import Header from './components/Header';
import Card from './components/Card';
import data from './data'

function App() {
  return (
    <>
      <Header />
      <Card name ={data[0].name} title={data[0].title} />
      <Card name ={data[1].name} title={data[1].title} />
      <Card name ={data[2].name} title={data[2].title} />
      <Card name ={data[3].name} title={data[3].title} />
      <Card name ={data[3].name} title={data[3].title} />


    </>
  );
}

export default App;