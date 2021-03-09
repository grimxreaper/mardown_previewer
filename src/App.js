import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import marked from "marked";

const initialState = `
  This is a paragraph
  **This is bolded text**

  # Heading 1
  ## Heading 2

  [choose a color here](https://flatuicolors.com/palette/ca)

  This is an inline \`<div></div>\`
  This is a block of code:

  \`\`\`
    let z = 'zahra';
    let y = 'yael';
    let f = z + y;
  \`\`\`

  - strawberry mochi
  - heart filled macaroons
    - coconut water

  ![Image](https://i.pinimg.com/564x/83/7c/c3/837cc3efb59ffe05d7b0ae7f3177151b.jpg)

  > When you give up, your dreams and everything else, they’re gone. Hard work is worthless for those that don’t believe in themselves. – Uzumaki Naruto


`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: initialState,
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h1 className="text-center mt-4">Convert Your Markdown!</h1>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter your markdown here:</h5>

            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-6">
            <h5 className="text-center">See the result:</h5>
            <div
              id="preview"
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
