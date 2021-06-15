const Card = ({ additionalClasses, children }) => {
  return (
    <div
      className={`max-w-sm m-20 p-4 bg-bwhite rounded-lg shadow-default text-center ${
        additionalClasses || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
