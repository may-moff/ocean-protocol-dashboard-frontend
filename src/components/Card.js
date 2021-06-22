const Card = ({ additionalClasses, children }) => {
  return (
    <div
      className={`bg-background-content rounded-md shadow-lg transform hover:-translate-y-0.5 duration-300 ${
        additionalClasses || ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
