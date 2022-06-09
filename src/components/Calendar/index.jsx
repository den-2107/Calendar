import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import "./index.css";
   
const GridCalendar = styled.div `
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: ${props => props.isHeader ? '#B2E1AA' : '#535c68'} ;
    border-bottom: 1px solid #535c68;
    grid-gap: 1px;
`;

const Cell = styled.div `
    min-width: 140px;
    min-height: 80px;
    background-color: ${props => props.isWeekend ? '#B7E5E8' : '#B1E5C9' } ;
    cursor: pointer;
    color: ${props => props.isSelectedMonth ? 'black' : '#B0B0B0'};
`;

const DateInCell = styled.div `
    display: flex;
    justify-content: flex-start;
    `;

const DayInCell = styled.div `
    display: flex;
    height: 33px;
    width: 33px;
    align-items: center;
    justify-content: center;
    margin: 2px;
    `;

const CurrentDay = styled.div `
    background-color: #B2E1AA;
    box-shadow: 0px 0px 8px 6px rgba(34, 60, 80, 0.1);
    height: 100%;
    width: 100%;
    border-radius: 8px;: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const CellWeek = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B2E1AA;
    min-height: 24px;
    min-width: 140px;
    `;

const Calendar = ({startDay, today}) => {
    const allDays = 42;
    const day = startDay.clone();
    const daysArray = [...Array(allDays)].map(() => day.add(1, 'day').clone());
    const weekArray = [...Array(7)]
    const isCurrentDay = (day) => moment().isSame(day, 'day');
    const isSelectedMonth = (day) => today.isSame(day, 'month');
    return (
        <>
            <GridCalendar isHeader>
                {weekArray.map((_, i) => (
                    <CellWeek>
                        {moment().day(i+1).format('ddd')}
                    </CellWeek>
                ))}
            </GridCalendar>
                <GridCalendar> 
                    {
                        daysArray.map((days) => (
                            <Cell className='DateInCellHover'
                                key={days.unix()}
                                isWeekend={days.day() === 6 || days.day() === 0}
                                isSelectedMonth={isSelectedMonth(days)}>
                                    <DateInCell >
                                        <DayInCell>
                                            {(!isCurrentDay(days)) ? days.format('D') : <CurrentDay>{days.format('D')}</CurrentDay>}
                                        </DayInCell>
                                    </DateInCell>
                            </Cell>
                        ))
                    }
                </GridCalendar>
            </>
    );
};

export default Calendar;