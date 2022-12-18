import React, { FC, useMemo } from 'react'
import { MonthDataType, MonthMatrixType } from 'domain/types';
import DayCard from 'components/CalendarComponents/DayCard';

const RenderMonthMatrix: FC<MonthMatrixType> = ({ monthMatrix }): JSX.Element => {
  const getRenderDay = (rowIndex: number) => {
    return function renderDay (day: MonthDataType, dayIndex: number) {
      return (
        <DayCard day={day} key={dayIndex} rowIndex={rowIndex}/>
      )
    }
  }

  const renderRow = (row: MonthDataType[], rowIndex: number) => (
    <React.Fragment key={rowIndex}>
      {row.map(getRenderDay(rowIndex))}
    </React.Fragment>
  )

  const matrix = useMemo(() => {
    return monthMatrix.map(renderRow)
  }, [monthMatrix])

  return <>{matrix}</>
}

export default RenderMonthMatrix
