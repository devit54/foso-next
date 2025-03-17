export const SearchSection: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-extrabold leading-10 capitalize text-zinc-950">
        Tìm kiếm
      </h2>
      <div className="flex gap-10 justify-between items-center py-3 pr-2 pl-6 mt-6 w-full bg-white rounded-xl shadow-lg min-h-[72px] max-md:pl-5">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          className="self-stretch my-auto text-base font-medium text-slate-400 bg-transparent border-none outline-none flex-1"
        />
        <button className="flex items-center self-stretch p-3 my-auto w-12 h-12 bg-emerald-500 rounded-xl">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f818655d6b8160a1ac40bedfe1dd465bcb151c8b89fa19f220d8e00750327fb?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
            alt="Search icon"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </section>
  );
};
