import React, { useState, useEffect } from 'react';
import './index.scss';
export default function Header() {
  return (
    <header>
      <h1>Knowledge Share</h1>
      <div className="personal-block">
        <img src="https://tvax3.sinaimg.cn/crop.0.0.996.996.180/006aaG0Rly8gvx9bbc7prj30ro0ro40q.jpg?KID=imgbed,tva&Expires=1639115185&ssig=w1PB4RaUeO" />
        <div className="meta-block">
          <span className="meta-message">
            <a href="https://weibo.com/u/5647105133">赵治中</a>的个人博客
          </span>
          <span className="meta-message">知识的个人分享</span>
        </div>
      </div>
    </header>
  )
}