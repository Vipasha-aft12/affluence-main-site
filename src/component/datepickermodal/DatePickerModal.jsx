'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function DatePickerModal() {
  const [show, setShow] = useState(false);
  const [departDate, setDepartDate] = useState(undefined);

  const handleSelect = (date) => {
    setDepartDate(date);
  };

  return (
    <>
      {/* Trigger */}
      <div
        className="main-box-date"
        style={{ maxWidth: 280, cursor: 'pointer' }}
        onClick={() => setShow(true)}
      >
        <div className="main-box-date-placeholder">
          {departDate ? departDate.toDateString() : 'DD/MM/YYYY'}
        </div>
      </div>

      {/* Modal */}
      {show && (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ zIndex: 1055 }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">

                {/* Header */}
                <div className="modal-header">
                  <h5 className="modal-title">
                    Select the Date
                  </h5>
                  <button
                    className="btn-close"
                    onClick={() => setShow(false)}
                  >Clear Date</button>
                </div>

                {/* Body */}
                <div className="modal-body d-flex justify-content-center">
                  <DayPicker
                    mode="single"
                    numberOfMonths={2}
                    pagedNavigation
                    selected={departDate}
                    onSelect={handleSelect}
                    defaultMonth={new Date()}
                  />
                </div>

                {/* Footer */}
                <div className="modal-footer">
                  <button
                    className="btn btn-primary w-100"
                    disabled={!departDate}
                    onClick={() => setShow(false)}
                  >
                    Confirm Dates
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Backdrop (CLICKABLE) */}
          <div
            className="modal-backdrop fade show"
            style={{ zIndex: 1050 }}
            onClick={() => setShow(false)}
          />
        </>
      )}
    </>
  );
}
