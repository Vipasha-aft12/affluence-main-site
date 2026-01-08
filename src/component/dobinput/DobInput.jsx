'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DobInput.css';

export default function DobInput() {
  const [dob, setDob] = useState(null);

  // Prevent future dates
  const today = new Date();

  return (
    <div className="container p-0 w-100">
      <div className="row justify-content-center w-100">
        <div className="col-12 p-0">

          <div className="start fd-col w-100">
            <label className="form-label">Date of Birth</label>

            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              maxDate={today}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              placeholderText="DD/MM/YYYY"
              className="form-control dob-input w-100"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
