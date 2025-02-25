import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './routes/Routes';
import { canisterId, idlFactory } from './declarations/backend';
import './styles/App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);