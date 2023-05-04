import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Home() {
  return(
    <section style={{
      width: '100vw',
      height: 'calc(100vh - 70px)',
      background: "url('https://i1.wp.com/www.animefeminist.com/wp-content/uploads/2022/10/eminence6.jpg?fit=1920%2C1080&ssl=1')",
      backgroundPosition: 'top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }}>
      <span style={{
        position: 'absolute',
        fontSize: '2.5rem',
        fontWeight: '600',
        left: '50%',
        bottom: '2rem',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        textTransform: 'uppercase',
        letterSpacing: '3px'

    }}>welcome</span>
    </section>
  );
}

function About() 
{
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/about')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setData(json)
    });
  }, []);

  return (
    <section style={{
      width: '100%',
      maxWidth: '1250px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '1.5rem 1rem'
    }}>
      <div style={{
        marginBottom: '1rem'
    }}>
        <h2 style={{
         textTransform: 'uppercase'
        }}>
          About
        </h2>
      </div>
      <div>
        <p style={{
          fontSize: '1.6rem',
          lineHeight: '150%',
          letterSpacing: '1px',
          textAlign: 'justify'
        }}>
          {data}
        </p>
      </div>
    </section>
  );
}

function News()
{
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/news')
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setData(json)
    });
  }, []);

  return (
    <section className="s-News"> 
      <div className="content">
        <div className="destaque">
          <ul>
              <h4>Featured News</h4>
              {data && data.principais.map((item) => (
              <li className="card">
                <img src={item.image} />
                <p>{item.titulo}</p>
              </li>
            ))}
          </ul>
        </div>
      
        <div className='pricipais'>
          <ul>
              <h4>Most Recent</h4>
              {data && data.recentes.map((item) => (
              <li className="card">
                <img src={item.image} />
                <p>{item.titulo}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <nav style={{
      width: '100%',
      height: '70px',
      backgroundColor: '#333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    }}>
        <ul style={{
          display: 'flex'
        }}>
          <li 
            style={{
              marginRight: '1rem'
            }}>
            <Link 
              to="/" 
              style={{
                 color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                Home
            </Link>
          </li>
          <li 
            style={{
              marginRight: '1rem'
            }}>
            <Link 
              to="/news" 
              style={{
                 color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                News
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              style={
                {color: '#fff'
                ,transition: 'color 0.2s ease-in-out'
                ,textTransform: 'uppercase'
                ,fontWeight: 'bold'
              }}>
                About
            </Link>
          </li>
        </ul>
      </nav>
  );
}

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;