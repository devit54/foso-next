import { Header } from "./ui/Header/Header";
import BlogHeader from "./ui/BlogHeader/BlogHeader";
import WhyChooseUs from "./ui/WhyChoose/WhyChooseUs";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Header />
      <BlogHeader />
      <WhyChooseUs />
    </main>
  );
}
