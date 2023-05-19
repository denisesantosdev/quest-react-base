const Button = ({ label, showMessage }) => {
  return <button onClick={() => showMessage(label)}>{label}</button>;
};

export default Button;
