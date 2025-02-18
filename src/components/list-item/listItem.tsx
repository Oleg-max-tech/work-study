import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const items = [
  { id: 1, number: "01", title: "Назва" },
  { id: 2, number: "02", title: "Назва" },
];

const ListItem = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto  p-4 m-9 w-[874px] h-[268px]">
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex items-center justify-between p-4 border-b border-t cursor-pointer transition-all duration-200 ${
            selectedId === item.id
              ? "text-yellow-500 font-bold"
              : "text-black font-normal"
          }`}
          onClick={() => setSelectedId(item.id)}
        >
          <div className="flex items-center space-x-2">
            <span className="text-sm">{item.number}</span>
            <span className="text-lg">{item.title}</span>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
