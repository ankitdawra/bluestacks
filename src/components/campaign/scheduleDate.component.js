import React from 'react';

const ScheduleDate = (({onClick, path}, ref) => {
  return (
    <div className="schedule-datw"
         onClick={onClick}>
      <img src={`${path}/Group/calendar.png`}
            height="20"
            className="half-breathing-space right-only"/>
      Schedule Again
    </div>
  )
})

export default React.forwardRef(ScheduleDate);
