import Header from './components/Header';
import Card from './components/Card';
import Input from './components/Input';  // Import the Input component
import data from './data';

function App() {
  return (
    <>
      <Header />
      <div className='input'>
      <Input />

      </div>
      <div className='cards'>
        <Card name={data[0].name} title={data[0].title} />
        <Card name={data[1].name} title={data[1].title} />
        <Card name={data[2].name} title={data[2].title} />
        <Card name={data[3].name} title={data[3].title} />
        <Card name={data[4].name} title={data[4].title} />
        <Card name={data[5].name} title={data[5].title} />
      </div>
    </>
  );
}

export default App;