import React from 'react'

export default function ReportComponent() {
  return (
    <>
  {/* Report */}
  <div className="techwave_fn_report">
    <a href="#" className="fn__closer fn__icon_button">
      <img src="svg/close.svg" alt="" className="fn__svg" />
    </a>
    <div className="report__closer" />
    <div className="report__content">
      <h3 className="title">Report Item</h3>
      <h3 className="subtitle">What is the main reason for your report?</h3>
      <input className="reason_field" type="text" placeholder="Type here..." />
      <div className="btns">
        <a href="#" className="report techwave_fn_button">
          <span>Report</span>
        </a>
        <a href="#" className="cancel techwave_fn_button">
          <span>Cancel</span>
        </a>
      </div>
    </div>
  </div>
  {/* !Report */}
</>

  )
}
