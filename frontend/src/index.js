import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Skeleton from './Components/skeleton/Skeleton';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Skeleton/>}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
