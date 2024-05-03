import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="heroSection">
        <video autoPlay muted preload="none">
          <source src="../Omniverse.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto z-10 flex flex-column justify-center items-center">
          <div className="mainData text-center">
            <h1 className="font-main text-white text-3xl">PRESERVING NATURE and<br></br> ELEVATING HUMAN CONSCIOUSNESS</h1>
            <p className="font-main text-white text-3xl mt-10">The</p>
            <img className="mainLogo" src="../../logo.png" />
            <p className="text-[#9E9B9D] font-second text-3xl font-[600] mt-10">Advancing Humanity with Web3 Technologies and Ecosystems.</p>
            <p className="text-[#9E9B9D] font-second text-2xl font-[600] mt-10">Experience The Togetherative</p>
          </div>
        </div>
      </section>
      <section className="titleBar">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-1/12 text-center">
              <img src="../../grad-1.png" alt="Image 1" className="w-full" />
            </div>
            <div className="w-10/12 text-center">
              <h2 className="text-3xl font-bold font-third text-white">2 token bound nft WORLDS</h2>
            </div>
            <div className="w-1/12 text-center">
              <img src="../../grad-2.png" alt="Image 2" className="w-full" />
            </div>
          </div>
        </div>
      </section>



      <footer className="bg-black py-16">
        <div className="container mx-auto">
          <div className="flex gap-4">
            <div className="w-6/12">
              <img src="../../logo.png" />
            </div>

            <div className="w-2/12">
              <h4 className="text-white font-second font-bold">Connect</h4>
              <ul className="mt-6">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="mailto:welcome@atrium.earth">welcome@atrium.earth</Link>
                </li>
              </ul>
            </div>

            <div className="w-2/12">
              <h4 className="text-white font-second font-bold">Explore</h4>
              <ul className="mt-6">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">Media</Link>
                </li>
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">Education</Link>
                </li>
              </ul>
            </div>

            <div className="w-2/12">
              <h4 className="text-white font-second font-bold">Legal</h4>
              <ul className="mt-6">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">NFT Purchase Agreement</Link>
                </li>
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <p className="mt-5 text-[#9E9B9D] font-bold">
            Copyright 2024 The Atrium, LCA. | All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
