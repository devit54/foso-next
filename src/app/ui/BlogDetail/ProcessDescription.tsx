"use client";
import * as React from "react";

// Component for section headings with consistent styling
const ProcessHeading = ({ number, text }: { number: number; text: string }) => {
  return (
    <h2 className="text-[20px] font-extrabold leading-[30px] text-[rgba(21,170,122,1)] mt-4 mb-2">
      {number}. {text}
    </h2>
  );
};

// Component for styled list items in the 5S process
const ProcessListItem = ({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) => {
  return (
    <li className="mb-1">
      <span className="font-bold text-[rgba(21,170,122,1)]">{term} </span>
      {definition}
    </li>
  );
};

function ProcessDescription() {
  return (
    <article className="pt-0 text-base font-medium leading-6 max-w-[900px] text-stone-800 max-md:max-w-full">
      <ProcessHeading number={1} text="Quy trình 5S là gì?" />

      <p className="mb-4">
        Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất.
        Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản.
      </p>

      <p className="mb-4">
        Quy trình{" "}
        <a
          href="https://vi.wikipedia.org/wiki/5S_(ph%C6%B0%C6%A1ng_ph%C3%A1p)"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          5S
        </a>{" "}
        hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu
        quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:
      </p>

      <ul className="mb-4 list-disc pl-5">
        <ProcessListItem term="Seiri" definition="(Ngăn nắp)" />
        <ProcessListItem term="Seiso" definition="(Sạch sẽ)" />
        <ProcessListItem term="Seiton" definition="(Trật tự)" />
        <ProcessListItem term="Shitsuke" definition="(Kỷ luật)" />
        <ProcessListItem term="Seiketsu" definition="(Tiêu chuẩn hóa)" />
      </ul>

      <ProcessHeading number={2} text="Lợi ích quy trình 5S đem lại" />

      <p className="mb-4">
        Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước
        của quy trình với mục đích cải tiến môi trường làm việc của doanh
        nghiệp.
      </p>

      <p className="mb-4">
        Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ
        tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc
        sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy
        định và dễ dàng tìm kiếm khi cần thiết.
      </p>

      <p>
        Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt
        cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh
        nghiệp tích cực.
      </p>
    </article>
  );
}

export default ProcessDescription;
