import React, {useState,useEffect} from 'react';
import './index.scss'
import Header from 'Components/header/Header'
import {Footer} from 'Components/footer/index'
import { MainContent } from 'Components/main-content';
export default function HomePage() {

  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}