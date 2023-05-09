import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <ChakraProvider>
                  <BrowserRouter>
                      <div className='bg-[#131313]'>
                          <App/>
                      </div>
                  </BrowserRouter>
              </ChakraProvider>
          </PersistGate>
      </Provider>
  </React.StrictMode>
)
