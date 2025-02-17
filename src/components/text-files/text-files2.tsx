import React, { useState } from "react";
import { CgArrowRight } from "react-icons/cg";

const TextFile2 = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Дякуємо за ваше звернення, ${name} ${surname}!`);
  };

  return (
    <div className="pl-10 pt-20 pb-20 lg:px-10 font-roboto">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold">
          Міркуєте, що обрати?
        </h2>
        <p className="text-lg mt-4">
          Досвідчені менеджери допоможуть вам із вибором найоптимальніших
          варіантів для вашої ніші бізнесу.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="mb-4 flex items-end gap-4">
          <div className="flex flex-col w-[35%]">
            <label htmlFor="name" className="block text-xl mb-2"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0"
              placeholder="Ім’я"
              required
            />
          </div>

          <div className="flex flex-col w-[35%]">
            <label htmlFor="surname" className="block text-xl mb-2"></label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0"
              placeholder="Прізвище"
              required
            />
          </div>

          <button
            type="submit"
            className="relative flex items-center text-xl  px-5 py-2"
          >
            <span className="absolute left-4 w-14 h-14 bg-yellow-400 rounded-full -z-10"></span>
            <span className="pl-4">Надіслати</span>
            <CgArrowRight className="ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextFile2;
