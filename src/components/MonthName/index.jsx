import React from 'react';
import styled from 'styled-components';
import "./index.css";

const MonthNameContainer = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;
    background-color: #B2E1AA;
    padding: 16px;
`;

const CalendarButton = styled.div `
`;

const ButtonClick = styled.button `
    cursor: pointer;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;: 8px;
    border-width: 1px;
    border: none;
    background-color: #ADE3B6;
    box-shadow: 0px 0px 8px 6px rgba(34, 60, 80, 0.1);
`;

const CalendarInfo = styled.div `
`;

const Text = styled.span `
    font-size: 35px;
`;

const TextMonth = styled(Text) `
    font-weight: bold;
    margin-right: 8px;
`;

const MonthName = ({today, lastMonthClick, nextMonthClick, todayClick}) => {
    return (
        <MonthNameContainer>
            <CalendarButton>
                <ButtonClick onClick={lastMonthClick} className='ButtonClickHover'>Last Month</ButtonClick>
                <ButtonClick onClick={todayClick} className='ButtonClickHover'>Today</ButtonClick>
                <ButtonClick onClick={nextMonthClick} className='ButtonClickHover'>Next Month</ButtonClick>
            </CalendarButton>
            <CalendarInfo>
                <TextMonth>{today.format('MMMM')}</TextMonth>
                <Text>{today.format('YYYY')}</Text>
            </CalendarInfo>
        </MonthNameContainer>
    );
};

export default MonthName;