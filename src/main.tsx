import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import {Provider} from "react-redux";
import {store} from "./store/store";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <ChakraProvider>
              <BrowserRouter>
                  <div className='bg-[#131313]'>
                      <App/>
                  </div>
              </BrowserRouter>
          </ChakraProvider>
      </Provider>
  </React.StrictMode>
)
