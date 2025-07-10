const RowCard = ({ image, title, subtitle, onRemove, index }) => {
    return (
        <div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden p-4 mb-4">
            {/* Image */}
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                />
            )}

            {/* Title + Subtitle */}
            <div className="flex-1">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">{subtitle}</p>
            </div>

            {/* {Quantity} */}
            <div>
                <h2 className="text-lg font-semibold"></h2>
            </div>

            {/* X / Remove Button */}
            <button
                onClick={onRemove}
                className="text-red-500 hover:text-red-700 text-xl font-bold ml-4"
                title="Remove"
            >
                ✕
            </button>
        </div>
    );
};

export default RowCard;
