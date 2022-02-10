import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../src/pages/home/index'
import Article from './routes/article';
import Introduce from './routes/introduce.jsx';
// import './utils/flicker'

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="notfound" element={<div>404</div>}/>
            <Route path="article" element={<Article/>}/>
            <Route path="introduce" element={<Introduce/>}/>         
        </Routes>
    </Router>,
    document.getElementById('root'), 
)
