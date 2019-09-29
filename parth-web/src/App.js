import React from 'react';
import logo from './logo.svg';
import { Header} from './components/header/header'
import { Navigation } from './components/navigation/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/about/about';
import { Story } from './components/story/story';
import { Whatwedo } from './components/whatwedo/whatwedo';
import { Corevalues } from './components/corevalues/corevalues';
import {Products} from './components/products/products'
import { Team } from './components/team/team';
import { Proposal } from './components/proposal/proposal';
import { Chat } from './components/chatwithus/chatwithus';
import { Footer } from './components/footer/footer';
import ScrollToTop from 'react-scroll-up';
function App() {
  return (
    <div>
      <ScrollToTop showUnder={160} style={{color:'red'}}>
      <span>UP</span>
      </ScrollToTop>
      <Header />
      <Navigation />
      <About />
      <Story />
      <Whatwedo/>
      <Products />
      <Corevalues />
      <Team />
      <Proposal />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
