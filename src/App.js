import React, { useState } from "react";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 
import MainHome from "./pages/MainHome";
import QuestionList from "./pages/QuestionList";
import QuestionResult from "./pages/QuestionResult";
import Story from "./pages/Story";
import StoryResult from './pages/StoryResult';
import TestStoryGo from "./pages/TestStoryGo";

export default function App() {
  return (
    <div>
     <BrowerRouter>
     <Router>
          <Route exact path="/" element={<MainHome/>}/>
     
          {/* <Route exact path="/question" element={  <QuestionList/>}/> */}
        
          <Route exact path="/story" element={<Story/>}/>
          
          {/* <Route exact path="/storyresult" element={<StoryResult/>}/> */}
  
          {/* <Route exact path="/questionresult" element={<QuestionResult/>}/> */}
        
          <Route exact path="/start" element={ <TestStoryGo/>}/>
          </Router>
        </BrowerRouter>
    </div>
  );
}
