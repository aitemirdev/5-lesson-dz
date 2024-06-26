import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import FrontendTab from '../src/components/FrontendTab';
import BackendTab from '../src/components/BackendTab';
import iOSTab from '../src/components/iOSTab';
import AndroidTab from '../src/components/AndroidTab';
import UXUITab from '../src/components/UXUITab';
const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/frontend">Frontend</Link>
                </li>
                <li>
                  <Link to="/backend">Backend</Link>
                </li>
                <li>
                  <Link to="/ios">iOS</Link>
                </li>
                <li>
                  <Link to="/android">Android</Link>
                </li>
                <li>
                  <Link to="/ux-ui">UX/UI</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/frontend" element={<FrontendTab />} />
              <Route path="/backend" element={<BackendTab />} />
              <Route path="/ios" element={<iOSTab />} />
              <Route path="/android" element={<AndroidTab />} />
              <Route path="/ux-ui" element={<UXUITab />} />
            </Routes>
          </div>
        </Router>
      </Provider>
  );
};

export default App;