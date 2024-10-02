import Button from './components/Button'
import GlobalStyle from "./components/GlobalStyle"

function App() {
  return (
    <GlobalStyle>
      <div style={{ padding: '10px 30px'}}>
        <Button primary />
        <Button />
      </div>
    </GlobalStyle>
  );
}

export default App;
