import React from 'react'
import logo from '../image/로고.png'
import rabbit from '../image/엘리스토끼_서있는.png'
import '../css/main.css'

const MainHome = () => {
  return (
          <>
         <div id="body">
            <header id="header">
              <h3>
               <Link to ='/' >
                  <img id="logo" src={logo} alt="logo"/>
                  <span id="header_text">&nbsp;CLICK YOUR TASTE!</span>
                </Link>
                </h3>
            </header>

          <div className="container">
            <main>
              <div className="all">
                <article className="box">   
                    <div className="text_background">
                        <div className="text_box">
                            <span className="text"></span>
                            <span className="blink">▼</span>
                        </div>

                    </div>
                     <div className="image">
                        <div id="circle"></div>
                        <img id="elice_rabbit_standing" src={rabbit} alt="Elice Rabbit"/>
                    </div>

                    <div>
                      <Link to="/situation">
                        <button className="button_random">
                          랜덤메뉴 추천
                        </button>
                      </Link>
                      <Link to="/start">
                        <button className="button_test">
                          입맛 테스트
                        </button>
                      </Link>
                    </div>
                </article>
            </div>
        </main>
      </div>
    </div> 
  </>
    )
}

export default MainHome