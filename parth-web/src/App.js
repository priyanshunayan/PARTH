import React from 'react';
import logo from './logo.svg';
import { Header} from './components/header'
import { Navigation } from './components/navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/about/about';
import { Story } from './components/story/story';
import { Whatwedo } from './components/whatwedo/whatwedo';
import { Corevalues } from './components/corevalues/corevalues';
import {Products} from './components/products/products'
import { Team } from './components/team/team';
import { Proposal } from './components/proposal/proposal';
function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <About />
      <Story />
      <Whatwedo />
      <Products />
      <Corevalues />
      <Team />
      <Proposal />
    </div>
  );
}

export default App;
