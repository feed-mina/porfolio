import React , {useState, useEffect} from 'react'
import '../css/question.css'
import { Link, useNavigate } from 'react-router-dom'

// var select = [a, a, a, a, a]
// var aselect = a;
// var bselect = b;
// var cselect = c;
// var dselection = d;
// var eselect = e;
const QuestionList = () => {
  const [qtitle,SetQtitle] = useState("")
  const [atitle,SetAtitle] = useState("")
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(false);
  
  const questionlist = []
  const answerA = []
  const answerB = []
  useEffect(()=>{
    setTime(true)
  }, [time]);
   return (
      <>
        <div id="body">
          <header>
            <Link id="header_link" to="/">
              <img id="logo" src="../image/로고.png" alt="logo"/>
              <h3 id="header_text">CLiCK YOUR TASTE!</h3>
            </Link>
          </header>
          <div className="background">
             <div className="container">
              <div className="main">
                <div className="heading1">
                  <h2>상황고르기</h2>
                </div>
                <div className="situation">
                  <div className='situationItem_first' id='solo'>
                    <img src='../image/엘리스토끼_조리복국자(밑에 둥금).png'/>
                    <span className='buttontext'>혼밥</span>
                  </div>
                 
                  <div className='situationItem_second' id='family'>
                    <img src='../image/엘리스토끼_조리복국자(밑에 둥금).png'/>
                    <span className='buttontext'>가족</span>
                  </div>
                 
                
                  <div className='situationItem_third' id='lover'>
                    <img src='../image/엘리스토끼_조리복국자(밑에 둥금).png'/>
                    <span className='buttontext'>연인</span>
                  </div>
          
                  <div className='situationItem_third' id='friend'>
                    <img src='../image/엘리스토끼_조리복국자(밑에 둥금).png'/>
                    <span className='buttontext'>친구</span>
                  </div>
          
                  <div className='situationItem_third' id='club'>
                    <img src='../image/엘리스토끼_조리복국자(밑에 둥금).png'/>
                    <span className='buttontext'>모임</span>
                  </div>
                </div>     
                  
              </div>
            </div>
          </div>
        </div>

      </>
  )
}

export default QuestionList