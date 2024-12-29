import Image from "next/image";
import Footer from "./components/footer";
import FadeIn from "./components/fade_in";
export default function Home() {
  return (
    <FadeIn>
      <div className="py-8">
        <h1 className="text-5xl">
          <span className="block py-2">hi! i&apos;m kristel,</span>
          <span className="block py-2">a software engineer based in nyc.</span>
        </h1>
        <Image
          src="/home.png"
          alt="homepage-image"
          width={1063}
          height={308}
          className="ml-auto w-[600px]"
        />
      </div>
      <Footer />
    </FadeIn>
  );
}
