import './style.css';

export const IconButton = ({ label, onSelectName }) => {

  const handleClick = () => {
    onSelectName(label)
  }
  return (
    <button onClick={handleClick} className="icon-button">
      <img className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
