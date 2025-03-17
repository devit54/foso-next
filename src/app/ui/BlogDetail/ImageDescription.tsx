"use client";
import * as React from "react";

interface IImage {
    url: string;
    label: string;
  }


const ImageDescription: React.FC<IImage> = ({label, url}) =>{
  return (
    <section className="flex flex-col items-center text-base max-w-[900px] text-slate-500">
      <img
        src={url}
        alt="5S Process Illustration"
        className="object-contain w-full rounded-lg aspect-[1.5] max-md:max-w-full"
      />
      <div className="flex gap-6 items-start mt-2">
        <h2 className="gap-2 self-stretch text-slate-500">
         {label}
        </h2>
      </div>
    </section>
  );
}

export default ImageDescription;
