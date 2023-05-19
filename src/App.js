import "./App.css";
import StyledText from "./components/styled-text/styled-text";
import Button from "./components/button/button";

const showMessage = (label) => {
  alert(`A label desse botão é ${label}`);
};

function App() {
  return (
    <>
      <StyledText text="Isso é um parágrafo" />
      <Button
        label="Baixar cv"
        showMessage={showMessage}
      />
    </>
  );
}

export default App;
