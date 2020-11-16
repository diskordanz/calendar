import React, { useMemo } from 'react';
import Month from '../Month/Month';
import moment from 'moment';

const Calendar = () => {

    const currentMonthDate = useMemo(() => moment());

    const previousMonthDate = useMemo(() => moment().subtract(1, 'month'));
    const nextMonthDate = useMemo(() => moment().add(1, 'month'));

    return (
        <div>
            <Month month={previousMonthDate.month()} year={previousMonthDate.year()} />
            <Month month={currentMonthDate.month()} year={currentMonthDate.year()} />
            <Month month={nextMonthDate.month()} year={nextMonthDate.year()} />
        </div>
    )
}

export default Calendar;
