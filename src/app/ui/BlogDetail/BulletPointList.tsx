"use client";

import * as React from "react";
import BulletPoint from "./BulletPoint";

const BulletPointList: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <ul className="list-none p-0 m-0 space-y-4">
        <BulletPoint>
          Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây
          yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc
          này hay không.
        </BulletPoint>

        <BulletPoint>
          Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng
          ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển
          khai 5S.
        </BulletPoint>

        <BulletPoint>
          Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy
          động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung
          của tổ chức, của doanh nghiệp.
        </BulletPoint>
      </ul>

      <p className="mt-6 text-base font-medium leading-6 text-stone-800">
        Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
        các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
        khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
        ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
        phát triển, cải tiến vượt bậc trong tương lai.
      </p>
    </section>
  );
};

export default BulletPointList;
