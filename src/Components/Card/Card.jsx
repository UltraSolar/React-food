
const Card = ({ image, title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden text-center p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
