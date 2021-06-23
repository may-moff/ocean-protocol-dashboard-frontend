const Card = ({ additionalClasses, children }) => {
  return (
    <div
      className={`rounded-md box-border w-80  shadow-xl border border border-gray-300 transform hover:-translate-y-0.5 duration-300 ${
        additionalClasses || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
