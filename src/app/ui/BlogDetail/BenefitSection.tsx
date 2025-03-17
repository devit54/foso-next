"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import SubsectionItem from "./SubSectionItem";

interface IBenefitsSectionProps {
    title: string,
    description: string,
    sub: {
        id: string,
        title: string,
        description: string
    }[]
}

const BenefitsSection: React.FC<IBenefitsSectionProps> = ({title, description, sub }) => {
  return (
    <section className="flex flex-col p-6 max-md:p-5 max-sm:p-4">
      {/* <SectionTitle title="3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?" /> */}
      <SectionTitle title={title} />

      {/* <p className="mb-6 text-base text-stone-800">
        Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
        toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính
        hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa
        chọn quy trình:
      </p> */}
      <p>{description}</p>

      <div className="flex flex-col gap-6">
        {sub.map((subsection) => (
          <SubsectionItem
            key={subsection.id}
            id={subsection.id}
            title={subsection.title}
            description={subsection.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
