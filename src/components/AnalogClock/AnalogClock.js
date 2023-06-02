import React, { useEffect, useState } from 'react';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';
import './AnalogClock.css'

function AnalogClock() {
  const [value, setValue] = useState(new Date().toLocaleTimeString());

	setInterval(() => {
		setValue(new Date().toLocaleTimeString())
	},1000)

  return (
    <div>
      <p>Current time:</p>
      <Clock value={value} />
    </div>
  );
}

export default AnalogClock;