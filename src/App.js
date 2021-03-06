import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)


  }
  render() {
    <div>
      <textarea
        id="editor"

        //react save textarea text

      ></textarea>
      {/* When I enter text into the #editor element, the #preview element
is updated as I type to display the content of the textarea. */}

      {/* When I enter GitHub flavored markdown into the #editor element,
the text is rendered as HTML in the #preview element as I type. */}
      <div
        id="preview"
      >
        {//result of preview
        }


      </div>
    </div>
  }
}




export default App;
