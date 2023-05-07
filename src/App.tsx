import React from 'react';
import { Spin } from 'antd';
import { shallowEqual } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { useAppSelector } from './store';
import router from './routes';

/**
 * Entry Component for the app
 * @returns
 */
function App() {
  const loadingStack = useAppSelector(
    (store) => store.ui.loaderStack,
    shallowEqual
  );
  return (
    <div id="app-entry1">
      <Spin tip="loading" spinning={loadingStack.length !== 0}>
        <RouterProvider router={router} />
      </Spin>
    </div>
  );
}

export default App;
