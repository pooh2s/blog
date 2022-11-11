import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Layout, Menu } from "antd";

const { Header } = Layout;
function App() {
  const [time, setTime] = useState(new Date());
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  return (
    <Layout className="layout">
      <h3>현재 시간 : {time.toLocaleTimeString()}</h3>
      <h3>현재 시간 : {time.toString()}</h3>
      <Router>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: 1,
                label: <Link to="/"> HOME</Link>,
              },
              { key: 2, label: "이력서" },
              { key: 3, label: "포트폴리오" },
            ]}
          />
          <nav>
            <ul>
              <li>
                <Link to="/"> HOME</Link>
              </li>
              <li>
                <Link to="/resume"> 이력서</Link>
              </li>
              <li>
                <Link to="/portfolio"> 포트폴리오</Link>
              </li>
            </ul>
          </nav>
        </Header>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/" element={<HOME />} />
        </Routes>
      </Router>
    </Layout>
  );
}

const HOME = () => {
  return <>홈페이지</>;
};

const Resume = () => {
  return (
    <>
      <div>
        <h1>자기소개</h1>
        <h3>이름 : 이승후(27)</h3>
        <h3>학력</h3>
        <>
          <li>우신고등학교</li>
          <li>동양미래대학교</li>
        </>
        <h3>경력</h3>
        <>
          <li>SKT</li>
        </>
      </div>
    </>
  );
};

const Portfolio = () => {
  return <></>;
};

export default App;
