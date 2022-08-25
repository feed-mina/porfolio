import React from 'react'
import { Link } from 'react-router-dom'

const Story = () => {
  
  return (
    <>
      <div id="body">
        <div className="background">
          <div className="header">
            <h3>
              <Link to="/" id="header_link">
                <img className="logo" src="../image/로고.png" alt="logo"/>
              </Link>
            </h3>
          </div>
          <div className="container">
            <div className="main">
              <div className="title">
                <span className="title_text">입맛 테스트</span>
              </div>
              <div className="Box">
                <div className="qBox">

                </div>
                <div className="answerBox">
                  <button className="answerBox1" onClick="goA()">
                    <span className="anserText">

                    </span>
                  </button>
                  <button className="answerBox1" onClick="goA()">
                    <span className="anserText">

                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
)
}

export default Story


 