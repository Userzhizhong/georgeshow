import React, {useState,useEffect} from 'react';
import './index.scss'
import Header from 'Components/header/Header'
import {Footer} from 'Components/footer/index'
import { MainContent } from 'Components/main-content';
import ReactLife from 'Components/test/test'
import Countdown from 'Components/countdown';
import {Link} from 'react-router-dom'
export default function HomePage() {
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://127.0.0.1:3000/index');
    xhr.setRequestHeader('X-PINGOTHER', 'pingpong');
    xhr.setRequestHeader('Content-Type', 'application/xml');
    xhr.onreadystatechange = () => {
      console.log('hhh')
    };
    xhr.send('<person><name>ABCD<name></person>')
  })
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
      <ReactLife/>
      <Countdown />
      <nav>
        <Link to="/article">article</Link>
        <Link to="/introduce">introduce</Link>
        <Link to="/notfound">404</Link>
      </nav>
    </div>
  )
}