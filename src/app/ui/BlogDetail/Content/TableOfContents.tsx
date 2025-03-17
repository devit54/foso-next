import React from "react";

const TableOfContents = () => {
  return (
    <section className="self-stretch w-full max-md:max-w-full">
      <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-2xl font-extrabold leading-10 capitalize text-zinc-950">
          Nội dung bài viết
        </h2>
        <button className="flex justify-center items-center self-stretch p-1 my-auto w-8 rounded-[40px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e61a56c1872728873a36c0c90f15d475873cf36615f720fc20672d3befddda0?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
            alt="Toggle table of contents"
            className="object-contain self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </header>

      <div className="mt-6 text-lg font-medium leading-9 text-gray-700 max-md:max-w-full">
        <p>
          <span style={{ fontWeight: 700, color: "rgba(21,170,122,1)" }}>
            1.{" "}
          </span>
          <span style={{ fontWeight: 700, color: "rgba(21,170,122,1)" }}>
            Quy trình 5S là gì?
          </span>
          <br />
          2. Lợi ích quy trình 5S đem lại
          <br />
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3.1 Cải thiện rõ nét môi trường làm việc
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3.2 Tiết kiệm thời gian đáng kể
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3.3 Tăng năng suất làm việc
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3.4 Tiết kiệm chi phí
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;3.5 Tăng chất lượng sản phẩm
          <br />
          4. Quy trình 5S gồm các bước:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4.1 Seiri (Ngăn nắp)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4.2 Seiton (Sắp xếp)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4.3 Seiso (Vệ sinh)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4.4 Seiketsu (Tiêu chuẩn hóa)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;4.5 Shitsuke (Kỷ luật)
          <br />
          5. Quy trình được thực hiện như sau:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5.1 Giai đoạn chuẩn bị
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5.2 Triển khai rộng rãi
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5.4 Sàng lọc, sắp xếp và đánh giá
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;5.5 Đánh giá
          <br />
          6. Quy trình 5S có giống với Kaizen?
          <br />
          7. Đối tượng nào nên áp dụng 5S?
          <br />
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </p>
      </div>
    </section>
  );
};

export default TableOfContents;
