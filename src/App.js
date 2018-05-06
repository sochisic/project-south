import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button1disabled: false,
      button2disabled: true,
      button3disabled: true,
      button4disabled: true,
      dialogOpen: false,
      dialogText: 'Ну с богом!'
    }
    this.func = this.func.bind(this);
  }

  func(e) {
    console.log(e, e.currentTarget);
    let target = e.currentTarget.id;
    switch (target) {
      case '1':
        this.setState({
          button2disabled: false,
          button1disabled: true
        });
        break;
      case '2':
        this.setState({
          button3disabled: false,
          button2disabled: true
        });
        break;
      case '3':
        this.setState({
          button4disabled: false,
          button3disabled: true
        });
        break;
      case '4':
        this.setState({
          dialogOpen: true
        })
        break;
    }

  }

  handleOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({
      button1disabled: false,
      button2disabled: true,
      button3disabled: true,
      button4disabled: true,
      dialogOpen: false,
      dialogText: 'Ну с богом!'
    })
  };

  render() {
    const actions = [
      <FlatButton
        label="Ненадо!"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Поехали!!!"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div className="App">
        <MuiThemeProvider>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="buttCont">
            <RaisedButton label="Вы готовы дети??" id="1" onClick={this.func} disabled={this.state.button1disabled} />
            <RaisedButton label="Да капитан!" id="2" onClick={this.func} disabled={this.state.button2disabled} />
            <RaisedButton label="Я не слышу!" id="3" primary={true} onClick={this.func} disabled={this.state.button3disabled} />
            <RaisedButton label="ДА КАПИТАН!!!" id="4" secondary={true} onClick={this.func} disabled={this.state.button4disabled} />
            <Dialog
              open={this.state.dialogOpen}
              title=""
              actions={actions}
              modal={false}
              onRequestClose={this.handleClose}
            >
              {this.state.dialogText}
            </Dialog>
          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
