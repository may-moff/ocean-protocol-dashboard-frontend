const Card = ({ additionalClasses, children }) => {
  return (
    <div
<<<<<<< HEAD
      className={`max-w-sm m-20 p-4 bg-bwhite rounded-lg shadow-default text-center ${
        additionalClasses || ""
=======
      className={`bg-background-content rounded-md shadow-lg transform hover:-translate-y-1 w-1/5 h-52 p-12${
        additionalClasses || ''
>>>>>>> 0247ced0f6dd8f886669a4b6d8cba6a36c57c471
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
