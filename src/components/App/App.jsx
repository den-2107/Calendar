import React, { useState } from 'react';
import Header from '../Header'
import Calendar from '../Calendar';
import MonthName from '../MonthName';
import styled from 'styled-components';
import moment from "moment";

const CalendarContainer = styled.div `
  overflow: hidden;
  border-radius: 8px;
  border-top: 1px solid #f5f6fa;
  border-bottom: 1px solid #f5f6fa;
  border-left: 1px solid #f5f6fa;
  border-right: 1px solid #f5f6fa;
  box-shadow: 0px 0px 40px 37px rgba(180, 230, 219, 0.39);
`;



function App() {
  const [today, setToday] =useState(moment())
  const startDay = today.clone().startOf('month').startOf('week');

  const lastMonthClick = () => {
    setToday(last => last.clone().subtract(1, 'month'))
  }
  const nextMonthClick = () => {
    setToday(next => next.clone().add(1, 'month'))
  }
  
  const todayClick = () => setToday(moment()) 

  return (
    <CalendarContainer>
        <Header />
        <MonthName today={today} 
        lastMonthClick = {lastMonthClick}
        nextMonthClick = {nextMonthClick}
        todayClick = {todayClick}
        />
        <Calendar startDay={startDay} today={today} />
    </CalendarContainer>
  );
}

export default App;
