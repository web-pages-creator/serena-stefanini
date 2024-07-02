import { useState } from 'react';
import './App.css';
import Top from './components/Top';
import { sections } from './metadata/sections';
import Lavori from './pages/Lavori';
import Contatti from './pages/Contatti';

function App() {
  const [activeTab, setActiveTab] = useState('lav')
  console.log('activet', activeTab)
  return (
    <div className="App">
      <Top onClicked={(id) => { console.log('aaa',id); setActiveTab(id)}}></Top>
      {activeTab == 'lav' && <Lavori />}
      {activeTab == 'sta' && <div>statement</div>}
      {activeTab == 'bio' && <div>biografia</div>}
      {activeTab == 'did' && <div>didattica</div>}
      {activeTab == 'sho' && <div>shop</div>}
      {activeTab == 'con' && <Contatti />}

      
    </div>
  );
}

export default App;
