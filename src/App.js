import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";

const apiData = [
  {
    id: 255,
    consultant_id: 135,
    from_time: 1661212800,
    to_time: 1661214600,
    day: "Sunday",
    created_at: 1648592886,
    updated_at: 1655342085,
    resource_url:
      "https://api.staging.pat-rec.com/admin/consultant/135/schedules/255",
  },
  {
    id: 258,
    consultant_id: 135,
    from_time: 1661212800,
    to_time: 1661214600,
    day: "Tuesday",
    created_at: 1648593740,
    updated_at: 1655342085,
    resource_url:
      "https://api.staging.pat-rec.com/admin/consultant/135/schedules/258",
  },
  {
    id: 263,
    consultant_id: 135,
    from_time: 1661212800,
    to_time: 1661214600,
    day: "Thursday",
    created_at: 1649893469,
    updated_at: 1655342085,
    resource_url:
      "https://api.staging.pat-rec.com/admin/consultant/135/schedules/263",
  },
];
function App() {
  const [date, changeDate] = useState(new Date());
  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={date}
          onChange={changeDate}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
