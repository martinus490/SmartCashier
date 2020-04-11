import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import './WebView.css';
import $ from 'jquery';

class WebView extends Component{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    otp = () => {
        $('.digit-group').find('input').each(function() {
            $(this).attr('maxlength', 1);
            $(this).on('keyup', function(e) {
                var parent = $($(this).parent());
                
                if(e.keyCode === 8 || e.keyCode === 37) {
                    var prev = parent.find('input#' + $(this).data('previous'));
                    
                    if(prev.length) {
                        $(prev).select();
                    }
                } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                    var next = parent.find('input#' + $(this).data('next'));

                    if(next.length) {
                        $(next).select();
                    }
                }
            });
        });
    }

    otpValidation = (otpInput) => {
        if(isNaN(otpInput)){
            alert("OTP Must Be Numberic!");
            return;
        }

        return this.props.history.push({
            pathname: '/PostSubmit',
            state : { OTP: otpInput }
        });
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            var otpInput =  document.getElementById('digit-1').value +
                            document.getElementById('digit-2').value +
                            document.getElementById('digit-3').value +
                            document.getElementById('digit-4').value;
            if(otpInput.length!==4) 
                return alert("Please Insert OTP");
            
            this.otpValidation(Number(otpInput));
        }
    }

    handleOnClick = () => {
        var otpInput =  document.getElementById('digit-1').value +
                        document.getElementById('digit-2').value +
                        document.getElementById('digit-3').value +
                        document.getElementById('digit-4').value;
        if(otpInput.length!==4) 
            return alert("Please Insert OTP");

        this.otpValidation(Number(otpInput));
    }

    render() {
        return (
            <div className="App" onKeyPress={this.handleKeyPress}>
                <div id="Title">SMART CASHIER</div>
                <div id="Instruction">Please Insert OTP</div>
                <div id="OTPBox">
                    <div id="OTP">
                        <form method="get" className="digit-group" data-group-name="digits" autoComplete="off">
                            <input ref={this.textInput} type="text" id="digit-1" name="digit-1" data-next="digit-2" onKeyPress={this.otp}/>
                            <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" onKeyPress={this.otp}/>
                            <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" onKeyPress={this.otp}/>
                            <input type="text" id="digit-4" name="digit-4" data-previous="digit-3" />
                        </form>
                    </div>
                    <div id="submitBtn" onClick={this.handleOnClick}>Submit</div>
                </div>
            </div>
        );
    }
}

export default withRouter(WebView)