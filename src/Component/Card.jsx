const Card = ({ url, name,price }) => {
  return (
    <div className="relative bg-[#F6F6F6] group overflow-hidden">
      <div>
        <img src={url} className="w-full h-auto object-cover mb-6" />
      </div>
      <div className="absolute bottom-2 left-6">
        <h3 className="text-gray-600 group-hover:translate-x-[6px] duration-300 ease-in-out">
          {name}
          <span className="ps-1">{price}</span>
        </h3>
      </div>
    </div>
  );
};
export default Card;