import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph"
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <GlobalStyle>
      <div >
        <Heading />
        <Paragraph />
      </div>
      <div className="d-flex">
        <div>Item 1</div>
        <div>Item </div>
      </div>
    </GlobalStyle>
  );
}

export default App;
