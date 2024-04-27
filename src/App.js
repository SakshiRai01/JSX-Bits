import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button secondary>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button rounded success>
          Buy now!
        </Button>
      </div>
      <div>
        <Button>
          <GoCloudDownload />
          See Deal!
        </Button>
      </div>
      <div>
        <Button>
          Hey there!
        </Button>
      </div>
      <div>
        <Button>
          <GoDatabase />
          Welcome!
        </Button>
      </div>
    </div>
  );
}

export default App;
