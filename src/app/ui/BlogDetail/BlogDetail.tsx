/** @format */

import React from "react";
import { SidebarBanner } from "../WhyChoose/SidebarBanner";
import ShareButtons from "../icons/ShareButtons";
import BlogPostHeader from "./BlogPostHeader";
import ImageDescription from "./ImageDescription";
import ProcessDescription from "./ProcessDescription";
import BenefitsSection from "./BenefitSection";
import { subsections, subsectionsProcess, subsectionsProcess2 } from "./sample.js";
import SectionTitle from "./SectionTitle";
import BlockQuote from "./BlockQuote";
import BulletPointList from "./BulletPointList";
import InThisArticle from "./Content/InThisArticle";
import ArticleReactionWidget from "./ArticleReactionWidget";
import { BlogArticleCard } from "../WhyChoose/BlogArticleCard";
const blogArticles = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/98a429cf0b575631d72ceb89632b738c235f329e08d0baac119964161d52287f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367",
    tag: "Quản Lý Sản Xuất",
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    date: "17/11/2022",
    readTime: "10 phút đọc",
  },
];

const BlogDetail = () => {
  return (
    <div>
      <main className="flex justify-start lg:px-20 md:px-15 max-md:px-2 py-10">
        <ShareButtons />
        <div className="w-full max-md:max-w-full">

          <div className="flex flex-col">
           
            <div className="w-full max-md:max-w-full flex flex-col">
            <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
              <section className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
                <h1 className="text-4xl font-extrabold capitalize leading-[72px] text-zinc-950 max-md:max-w-full">
                  Tất cả bài viết
                </h1>
                <BlogPostHeader />
                <ImageDescription 
                  url="https://cdn.builder.io/api/v1/image/assets/TEMP/41d33f9adbdc2fb1cd444fdc1b609b4670ae8268c5843124f8c8f6f76db639a2?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367" 
                  label="Quy trình 5s là gì?" />
                <div className="flex flex-row items-center text-base max-w-[900px] text-slate-500">
                  <blockquote className="text-8xl leading-6 text-emerald-500">
                      &quot;
                    </blockquote>
                    <p className="px-4 pt-3 pb-2 mx-auto w-full max-w-none text-xl italic font-medium leading-6 text-center text-gray-700 max-md:px-5 max-md:py-0 max-md:text-lg max-md:max-w-[991px] max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm max-sm:text-base">
                      đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.
                    </p>
                    <blockquote className="text-8xl leading-6 text-emerald-500">
                      &quot;
                    </blockquote>
                </div>
                {/* Mục 1 -2 */}
                <ProcessDescription />  
                <ImageDescription 
                  url="https://cdn.builder.io/api/v1/image/assets/TEMP/c663bf3307db2b6a3cf5b5ed21594994e392429a889634f05fabd4245ffeb387?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367" 
                  label="Tại sao doanh nghiệp cần quy trình 5S?" />
                  
                {/* Mục 3- Tại sao doanh nghiệp cần quy trình 5S */}
                  <BenefitsSection 
                    title="3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?"
                    description="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
                      toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính
                      hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa
                      chọn quy trình:" 
                      sub={subsections}
                    />;
                  <ImageDescription 
                    url="https://cdn.builder.io/api/v1/image/assets/TEMP/55b31cd53d1e72f0871225a41494a73acfe71a38f1e3060ba02c6bd5e9048dfd?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367" 
                    label="Quy trình 5s gồm các bước" />

                  {/* Mục 4  */}
                  <BenefitsSection 
                    title="4. Quy trình 5S gồm các bước"
                    description="5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:" 
                    sub={subsectionsProcess}
                    />;
                  <ImageDescription
                    url="https://cdn.builder.io/api/v1/image/assets/TEMP/1a385772cfe07ec903ac66fd5bdd297a7d9286e473546e1a13710c81efd2eca1?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367" 
                    label="Các bước thực hiện quy trình 5s"
                  />
                {/* Mục 5  */}
                <BenefitsSection 
                  title="5. Quy trình được thực hiện như sau:"
                  description="Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:" 
                  sub={subsectionsProcess2}
                  />
                {/* Mục 6 */}
                <section className="flex flex-col p-6 max-md:p-5 max-sm:p-4">
                  <SectionTitle title="6. Quy trình 5S có giống với Kaizen?" />
                  <p>
                    Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.
                  </p>
                    <BlockQuote>
                      Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh
                      nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên
                      tục và bền vững.
                    </BlockQuote>
                    <BlockQuote>
                      Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S 
                      tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi 
                      trường làm việc. 
                    </BlockQuote>
                    <p>
                    Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo. 
                  </p>
                </section>

                 {/* Mục 7 */}
                 <section className="flex flex-col p-6 max-md:p-5 max-sm:p-4">
                  <SectionTitle title="7. Đối tượng nào nên áp dụng 5S?" />
                  <p>Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.</p>
                  <p>Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.</p>
                 </section>
                 <ImageDescription
                    url="https://cdn.builder.io/api/v1/image/assets/TEMP/17c52731a7cd9dbc6ecfe369c529bf0c72a19582c5db40843fc8e33dfd0c028f?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367" 
                    label="Các yếu tố tạo nên thành công cho quy trình 5S"
                  />
                   {/* Mục 8 */}
                   <section className="flex flex-col p-6 max-md:p-5 max-sm:p-4">
                    <SectionTitle title="8. Các yếu tố tạo nên thành công cho quy trình 5S" />
                    <p>
                    Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:</p>
                    <BulletPointList />
                   </section>
                   <ArticleReactionWidget />

                  <h1 className="text-4xl font-extrabold capitalize leading-[72px] text-zinc-950 max-md:max-w-full">
                   Bài Viết Liên Quan
                  </h1>
                  <div className="flex flex-wrap gap-8 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
                    {blogArticles.map((article, index) => (
                      <BlogArticleCard key={index} {...article} />
                    ))}
                  </div>
              </section>

              <aside className="flex flex-col justify-center min-w-60 w-[366px]">
                <InThisArticle />
                <SidebarBanner />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/783a1a284ea345f473457e75b5df3b50f35d02bb69f092f5606df9c44e4969bd?placeholderIfAbsent=true&apiKey=511cf6dd74e14c2b9f28fb9aa0b18367"
                  alt="Additional banner"
                  className="object-contain mt-8 max-w-full rounded-3xl aspect-[0.56] w-[366px]"
                />
              </aside>
            </div>
          </div>
          </div>
         
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
