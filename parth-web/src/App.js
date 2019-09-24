import React from 'react';
import logo from './logo.svg';
import { Header} from './components/header'
import { Navigation } from './components/navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/about/about';
import { Story } from './components/story/story';
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Story />
    </div>
  );
}

export default App;
