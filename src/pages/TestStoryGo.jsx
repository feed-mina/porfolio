import React from 'react'
import '../css/question.css'
import { Link } from 'react-router-dom'
const TestStoryGo = () => {
  return (
    <>
    <div className='background'>
        <header className='header'>
            <Link to='/' id='header_link'>
                <img className='logo' src='../image/로고.png' alt='logo'/>
                <h3 id="header_text">&nbsp;CLICK YOUR TASTE!</h3>
            </Link>
        </header>
        <main>
        <section id="content">
            <div className="main">
                <div className="title">
                    <h2 className="title_text">입맛 테스트</h2>
                </div>

                <div>
                    <div id="circle"></div>
                    <img className="rabbit" src="../image/엘리스토끼_조리복국자(밑에 둥금).png" alt="rabbit"/>
                </div>

                <div className="Buttonbox">
                    <Link to='/question' id="button">
                        <p>시작하기</p>
                    </Link>
                </div>
            </div>
        </section>
        </main>
    </div>
    </>
  )
}

export default TestStoryGo