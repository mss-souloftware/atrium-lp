import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="heroSection">
        <video autoPlay muted preload="none">
          <source src="../Omniverse.mov" type="video/mp4" />
        </video>
        <div className="container mx-auto z-10">
          <div className="bg-red-600 h-5 w-full"></div>
          <div className="bg-red-600 h-5 w-full"></div>
          <div className="bg-red-600 h-5 w-full"></div>
          <div className="bg-red-600 h-5 w-full"></div>
          <div className="bg-red-600 h-5 w-full"></div>
          <div className="bg-red-600 h-5 w-full"></div>
        </div>
      </section>
      <section className="titleBar">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-2/12">
              <img src="image1.jpg" alt="Image 1" className="w-full" />
            </div>
            <div className="w-8/12">
              <h2 className="text-2xl font-bold">Heading</h2>
            </div>
            <div className="w-2/12">
              <img src="image2.jpg" alt="Image 2" className="w-full" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
