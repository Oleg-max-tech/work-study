import React from "react";

const TextFile3 = () => {
  return (
    <div className="m-12 font-roboto flex flex-col md:flex-row justify-between items-center w-full md:w-[1444px] h-auto">
      {/* Лівий блок */}
      <div className="flex flex-col pl-4 md:pl-6 mb-6 md:mb-0">
        <h1 className="font-bold text-4xl mb-4">Ви отримаєте</h1>
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Врахування рекомендацій патентних бюро для успішної реєстрації
          торгової марки (в разі потреби)
        </h1>
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Вихідні файли логотипу: ai, cdr, eps (вектор) та psd, png (растрові)
        </h1>
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Логобук (pdf, ai, cdr)
        </h1>
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Підбір фірмових шрифтів
        </h1>
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Фірмовий паттерн (ті ж формати, що і логотип)
        </h1>
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Верстка та візуалізація вказаних фірмових елементів (pdf, ai, cdr)
        </h1>
      </div>

      {/* Чорна крапка між блоками */}
      <div
        className="relative px-4 mt-4 md:mt-0"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="w-4 h-4 rounded-full bg-black"></div>
      </div>

      {/* Правий блок */}
      <div className="p-10 flex-1">
        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Детальні маркетингові дослідження та рекомендації:
        </h1>

        <ul className="pl-8 list-disc leading-relaxed">
          <li className="pl-4">Опис аудиту ринку, конкурентів та споживачів</li>
          <li className="pl-4">Розробка позиціонування бренду</li>
          <li className="pl-4">Розробка стратегії просування бренду</li>
          <li className="pl-4">Створення комунікації бренду</li>
        </ul>

        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Допомога в реєстрації бренду як торгової марки
        </h1>

        <h1 className="pl-4 relative before:absolute before:left-[-20px] before:top-0 before:content-['+'] leading-relaxed">
          Знижка 10% на розробку веб-сайту або знижка 50% на налаштування
          таргетованої реклами в Facebook та Instagram
        </h1>
      </div>
    </div>
  );
};

export default TextFile3;
