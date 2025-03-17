export const SidebarBanner: React.FC = () => {
  return (
    <section className="overflow-hidden mt-8 max-w-full rounded-3xl w-[366px]">
      <div className="flex relative flex-col justify-center py-10 w-full aspect-[0.563]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/842916d77fbae9c81f6596d8f622438a34d97746724f146fdfa9d325b320187e?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
          alt="Banner background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-between py-6 w-full min-h-[575px]">
          <div className="z-0 self-center px-2 w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32aa7b19a3351bf76e380c578bb2191723e9b02912ae0a4d3efb0031510a284c?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
              alt="Banner content"
              className="object-contain z-10 mt-0 -mb-2 w-full aspect-[1.37]"
            />
          </div>
          <div className="flex z-0 flex-col justify-center items-end w-full">
            <h3 className="text-xl font-bold text-white">Miễn phí dùng thử</h3>
            <div className="flex flex-col items-end px-16 pb-6 mt-3 max-w-full text-xs font-semibold leading-none text-white whitespace-nowrap rounded-none w-[155px] max-md:pl-5">
              <span className="gap-2.5 self-stretch px-1 py-0.5 rounded-sm shadow-[1px_1px_2px_rgba(0,0,0,0.25)]">
                Beta
              </span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0645104e243d62696dc98994c7d4cfbaa7bcd2d727fdcc6bb2b2df5e9309f46b?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
            alt="Decorative element"
            className="object-contain absolute z-0 max-w-full aspect-square bottom-[131px] h-[136px] left-[18px] w-[136px]"
          />
          <button className="flex z-0 gap-10 justify-between items-center px-6 py-2 w-full border-solid border-[1.5px] border-white rounded-[40px] max-md:px-5">
            <span className="self-stretch my-auto text-sm font-bold text-white capitalize">
              Trải nghiệm ngay
            </span>
            <div className="flex items-center self-stretch p-2 my-auto rounded-[40px] w-[34px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/95abbc5f9651051492375989bab7c4a05c46fd22ab5646ae1074dca2000af198?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
                alt="Arrow right"
                className="object-contain self-stretch my-auto aspect-square w-[18px]"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
