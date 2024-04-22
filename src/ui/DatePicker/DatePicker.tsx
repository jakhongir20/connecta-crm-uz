import React from 'react'
// import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };

export default function UseDatePicker({type,name}:{type:unknown,name:string}) {
  return (
    <DatePicker  picker={type} name={name} required />
  )
}
