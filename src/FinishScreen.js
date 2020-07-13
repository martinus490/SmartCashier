import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './FinishScreen.css';

class FinishScreen extends Component{

    constructor(props) {
        super(props);
        this.screen = React.createRef(); //for auto focus to screen
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            return this.props.history.push({pathname: '/'});
        }
    }

    componentDidMount() {
        this.screen.current.focus();
    }

    render(){
        return(
            <div id="mainScreen" onKeyPress={this.handleKeyPress} tabIndex="0" ref={this.screen}>
                <div id="body">
                    <div id="text">
                        Transaction Completed! <br/>
                        Press Enter To Continue...
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FinishScreen)