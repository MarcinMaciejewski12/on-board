import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import {
  AllMeetings,
  CalendarBackground,
  CalendarComponent,
  CalendarContainer,
  MeetingsContainer,
} from "./CalendarCompStyle";

const CalendarComp = () => {
  const [value, setValue] = useState(() => dayjs(new Date()));
  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));
  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };
  return (
    <CalendarComponent>
      <CalendarBackground>
        <h1>Kalendarz wydarzeń</h1>
        <CalendarContainer>
          <Calendar
            fullscreen={false}
            value={value}
            onSelect={onSelect}
            onPanelChange={onPanelChange}
          />
        </CalendarContainer>
      </CalendarBackground>
      <MeetingsContainer>
        <AllMeetings>
          <h1>
            {`Wydarzenia planszówkowe z dnia: ${selectedValue?.format(
              "YYYY-MM-DD"
            )}`}
          </h1>
        </AllMeetings>
      </MeetingsContainer>
    </CalendarComponent>
  );
};

export default CalendarComp;
