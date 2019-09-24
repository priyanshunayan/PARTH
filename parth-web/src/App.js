import React from 'react';
import logo from './logo.svg';
import { Header} from './components/header'
import { Navigation } from './components/navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/about/about';
import { Story } from './components/story/story';
import { Whatwedo } from './components/whatwedo/whatwedo';
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Story />
      <Whatwedo />
    </div>
  );
}

export default App;
