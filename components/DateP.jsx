import React from 'react';
import { Calendar, DatePicker } from 'react-persian-datepicker';
import './../Assets/topkala_assets/date/jquery.md.bootstrap.datetimepicker.style.css'
export const DateP = () => (
  <div>
    <div>
      {/* Calendar Component */}
      <Calendar />
    </div>
    
    <div>
      {/* Date Picker Component */}
      <DatePicker />
    </div>
  </div>
);