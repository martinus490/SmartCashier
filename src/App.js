import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <div id="Title">SMART CASHIER</div>
        <div id="OTPBox">
          <div id="OTP">
            <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">
              <input type="text" id="digit-1" name="digit-1" data-next="digit-2" />
              <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />
              <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />
              <input type="text" id="digit-4" name="digit-4" data-previous="digit-3" />
            </form>
          </div>
          <div id="Instruction">Please Insert OTP</div>
        </div>
    </div>
  );
}

export default App;
