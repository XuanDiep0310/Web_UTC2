import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import App from "./App";
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
      <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root')
  );