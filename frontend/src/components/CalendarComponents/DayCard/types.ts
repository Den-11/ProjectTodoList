import { MonthDataType } from 'domain/types';

export type DayType = {
  day: MonthDataType;
  rowIndex: number;
}

export type DayCardProps = {
  row: boolean;
}