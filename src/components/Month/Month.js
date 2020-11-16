import React from 'react';
import Day from '../Day/Day';
import moment from 'moment';
import './Month.css';

const Month = ({ month, year }) => {
    const currentMonthDate = moment([year, month]);
    const monthName = currentMonthDate.format("MMMM");
    const firstDayOfMonth = currentMonthDate.startOf("month").format("d");

    const weekDays = moment.weekdaysShort();

    const calculateWeekDay = (currentDay) => weekDays[(currentDay + +firstDayOfMonth) % weekDays.length];

    const displayDays = () => {
        let days = [];
        const numberOfDays = currentMonthDate.daysInMonth();
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<Day key={i} hidden />)
        }
        for (let i = 1; i <= numberOfDays; i++) {
            days.push(<Day key={i + firstDayOfMonth} date={i} weekDay={calculateWeekDay(i - 1)} />)
        }

        return days;
    }

    return (
        <div>
            <div className="MonthName">{monthName}</div>
            <div className="DaysOfMonth">{displayDays()}</div>
        </div>
    )
}

export default Month;