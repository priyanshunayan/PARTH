import React from 'react';
import logo from './logo.svg';
import { Header} from './components/header'
import { Navigation } from './components/navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/about/about';
import { Story } from './components/story/story';
import { Whatwedo } from './components/whatwedo/whatwedo';
import { Corevalues } from './components/corevalues/corevalues';
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Story />
      <Whatwedo />
      <Corevalues />
    </div>
  );
}

export default App;
