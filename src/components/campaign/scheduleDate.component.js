import React from 'react';
import { useTranslation } from 'react-i18next';

const ScheduleDate = (({onClick, path}, ref) => {
  const {t} = useTranslation();
  return (
    <div className="pointer"
         onClick={onClick}>
      <img src={`${path}/Group/calendar.png`}
            height="20"
            className="half-breathing-space right-only"/>
      {t('SCHEDULE_AGAIN')}
    </div>
  )
})

export default React.forwardRef(ScheduleDate);
