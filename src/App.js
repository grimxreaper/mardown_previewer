import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: ""
    }
  }

handleChange = (event) => {
  //when text is entered into the editor element
  this.setState({
    markdown: event.target.value //update preview element
    
  })
}



  render() {
    const { markdown } = this.state; //what does this do again?

    return(
    <div>
      <h1 className="text-center mt-4">Convert your markdown!</h1>
      <div className="row">
        <div className="col-6">
          <h5>Enter your markdown here:</h5>

      <textarea
        className="form-control"
        id="editor"
        value={markdown}
        onChange={this.handleChange}

        //trigger a change event here, and update the state of preview to render
        //what was written in the editor as html

      ></textarea>
      </div>
      {/* When I enter text into the #editor element, the #preview element
is updated as I type to display the content of the textarea. */}

      {/* When I enter GitHub flavored markdown into the #editor element,
the text is rendered as HTML in the #preview element as I type. */}

      <div
        id="preview"
        className="col-6 preview"
      >
        <h5>See the result:</h5>
        <div className="preview">
          <p> dfsdfsdfsf </p>
        </div>


      </div>
    </div>
    </div>


    )}

}

ReactDOM.render(<App/>, document.getElementById('app'));
export default App;
