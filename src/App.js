import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Description from './Components/Description';
import Price from './Components/Price';
import Image from './Components/Image';
import product from './JSON/product';
import Card from 'react-bootstrap/Card';

function App({name}) {
  let myname= name ||"there !";
  return (
    <div className="App" style={{ width:"100%",height:"100vh",display:"flex" ,flexDirection:"column", justifyContent:"center" ,alignItems:"center"}}>

      <Card style={{ width: '80%' }}>
      <Card.Body>
        <Card.Title>  <Name name={product.name} /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
        <Card.Text>
        <Description description={product.description} />
        <Image imageUrl={product.image} altText={product.name} />
        <Price price={product.price} />
        </Card.Text>
      </Card.Body>
    </Card>

      <p>Hello, {myname}</p>
    </div>
  );
}

export default App;
