interface Category {
  name: string;
  count: number;
}

const categories: Category[] = [
  { name: "Tất cả", count: 108 },
  { name: "Thiết Kế Website", count: 36 },
  { name: "Thiết Kế App Mobile", count: 13 },
  { name: "Quản Lý Sản Xuất", count: 25 },
  { name: "Quản Lý Bán Hàng", count: 22 },
  { name: "Báo Chí Nói Về FOSO", count: 7 },
  { name: "Tin Tức FOSO", count: 5 },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="mt-8 w-full">
      <h2 className="text-2xl font-extrabold leading-10 capitalize text-zinc-950">
        Danh mục
      </h2>
      <nav className="flex flex-col justify-center mt-6 w-full text-lg font-medium">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`flex gap-10 justify-between items-center pb-2 ${
              index !== 0 ? "mt-4" : ""
            } w-full ${
              index !== categories.length - 1
                ? "border-b border-solid border-b-[#F1F5F7]"
                : ""
            }`}
          >
            <span className="self-stretch my-auto text-gray-700">
              {category.name}
            </span>
            <span className="self-stretch my-auto text-slate-500">
              {category.count}
            </span>
          </div>
        ))}
      </nav>
    </section>
  );
};
