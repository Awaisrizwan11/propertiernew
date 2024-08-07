import { FaCheckCircle } from "react-icons/fa";

const categories = [
  "Ceiling Fans",
  "Exhaust Fans",
  "Tower Fans",
  "Pedestal Fans",
  "Floor Fans",
  "Table Fans",
  "Wall Mount Fans",
  "Bladeless Fans",
];

const Tags = () => {
  return (
    <div className="container mx-auto mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center space-x-2">
            <FaCheckCircle className="text-yellow-400" />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
