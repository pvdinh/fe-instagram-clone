import './index.scss';
import LoginComponent from "./screens/LoginPage";
import React from "react";
import AppRouter from "./components/AppRouter";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <AppRouter />
  );
}

export default App;
