import React, { Component } from "react";
import './WebView.css';
import $ from 'jquery';

class WebView extends Component{
    otpValidation = () => {
        this.alert("asdasdasd");
        /*$('.digit-group').find('input').each(function() {
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
                    } else {
                        if(parent.data('autosubmit')) {
                            parent.submit();
                        }
                    }
                }
            });
        });*/
    }

    render() {
        return (
            <div className="App">
                <div id="Title">SMART CASHIER</div>
                <div id="Instruction">Please Insert OTP</div>
                <div id="OTPBox">
                    <div id="OTP">
                        <form method="get" class="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">
                        <input type="text" id="digit-1" name="digit-1" data-next="digit-2" onkeypress={this.otpValidation}/>
                        <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" onkeypress=""/>
                        <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" onkeypress=""/>
                        <input type="text" id="digit-4" name="digit-4" data-previous="digit-3" />
                        </form>
                    </div>
                    <div id="submitBtn">Submit</div>
                </div>
            </div>
        );
    }
}

export default WebView