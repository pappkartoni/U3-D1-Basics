import logo from './logo.svg';
import './App.css';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent class="nervous-image" src="https://cf.geekdo-images.com/2ZEjHL5YTZ2PT5fF24QtyA__imagepagezoom/img/mqv0-CdenwDfy6xTfPQCAmvLOT0=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6366852.jpg" alt="some image"></ImageComponent>
        <p>
          I didn't want to style the <code>buttons</code>...
        </p>
        <div className="buttons">
          <ButtonComponent label="Click me!"></ButtonComponent>
          <ButtonComponent label="Click me too!"></ButtonComponent>
        </div>
      </header>
    </div>
  );
}

export default App;
