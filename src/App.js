import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  const handleClick = () =>
  {
    console.log('Click!');
    }
  return (
    <div>
      <div>
        <Button secondary outline rounded className='mb-5' onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button rounded success onMouseEnter={handleClick}>
          Buy now!
        </Button>
      </div>
      <div>
        <Button outline warning onMouseOver={handleClick}>
          <GoCloudDownload />
          See Deal!
        </Button>
      </div>
      <div>
        <Button outline primary>
          Hey there!
        </Button>
      </div>
      <div>
        <Button outline rounded success>
          <GoDatabase />
          Welcome!
        </Button>
      </div>
    </div>
  );
}

export default App;
