const Card = ({ additionalClasses, children }) => {
  return (
    <div
      className={`bg-background-content rounded-md shadow-lg transform hover:-translate-y-1 w-1/5 h-52 p-12${
        additionalClasses || ''
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
