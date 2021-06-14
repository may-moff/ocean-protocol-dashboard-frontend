const Card = ({ additionalClasses, children }) => {
  return (
    <div
      className={`bg-background-content rounded-md shadow-lg ${
        additionalClasses || ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
