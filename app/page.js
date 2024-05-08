import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="heroSection">
        <video loop autoPlay muted preload="none">
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
            <div className="w-1/12 text-right">
              <img src="../../grad-1.png" alt="Image 1" className="w-full" />
            </div>
            <div className="w-8/12 text-center">
              <h2 className="text-3xl font-bold font-third text-white">2 token bound nft WORLDS</h2>
            </div>
            <div className="w-1/12 text-left">
              <img src="../../grad-2.png" alt="Image 2" className="w-full" />
            </div>
          </div>
        </div>
      </section>


      <section className="secondSection relative">
        <img src="../../atriumCentered.png" className="centeredLogo" />
        <div className="flex justify-center items-stretch twiceRow">
          <div className="w-6/12 relative">
            <video loop autoPlay muted preload="none">
              <source src="../trees-stars.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center">
              <h3 className="text-white font-main text-3xl font-[600] mt-10 ">STARHOLDERS</h3>
              <div className="flex items-center justify-center">
                <div className="col-12 text-center">
                  <p className="text-white font-third text-2xl font-[600] mt-10">ON</p>
                  <img className="brandLogo" src="../polygon.png" />
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="#">
                  <img className="joinBtn" src="../joinBtn.png" />
                </Link>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-white text-2xl mb-3">Mint an Actual Unique Star</p>
                <p className="text-white text-2xl mb-3">Claim a FREE $250 USDC NFT</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img className="battleLogo" src="../battle-logo.png" />
                <img className="joinBtn" src="../moonizens.png" />
              </div>
            </div>
          </div>
          <div className="w-6/12 relative">
            <video loop autoPlay muted preload="none">
              <source src="../universewithin.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center">
              <h3 className="text-white font-main text-3xl font-[600] mt-10 ">JOURNEYBOUND</h3>
              <div className="flex justify-center">
                <div className="w-6/12 text-center">
                  <p className="text-white font-third text-2xl font-[600] mt-10">ON</p>
                  <img className="baseLogo" src="../baseLogo.png" />
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="#">
                  <img className="joinBtn" src="../journeyBtn.png" />
                </Link>
              </div>
              <div className="flex items-end">
                <div className="w-6/12">
                  <p className="text-white text-xl">Receive<br></br>$1500 USDC</p>
                  <p className="text-white text-xl">or</p>
                  <p className="text-white text-xl">Qualify for an Actual Journey at</p>
                  <img className="brandLogo mt-2" src="../brainLogo.png" />
                </div>
                <div className="w-6/12 text-right">
                  <img className="brandLogo" src="../boyndLogo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="thirdSection py-8 relative">
        <img src="../../linesCenter.png" className="centeredLogo" />
        <div className="flex justify-center gap-20 items-stretch twiceRow relative z-10">
          <div className="w-6/12 relative text-center">
            <div className="bannerWidthWrapper">
              <img className="bannerWidth" src="../../thirdOne.png" />
              <img className="vectorleft" src="../../vector.png" />
              <img className="my-10 d-block" src="../../halo.png" />
            </div>
            <Link href="#">
              <img className="my-10 mx-auto d-block" src="../../DAOBtn.png" />
            </Link>
            <img className="my-10 d-block mx-auto" src="../../spaceBtn.png" />
            <div className="flex items-center justify-center">
              <img className="max-w-32" src="../../nft.png" />
              <p className="text-white font-second text-2xl font-[600]">Marketplace</p>
            </div>
          </div>


          <div className="w-6/12 relative text-center">
            <div className="bannerWidthWrapper">
              <img className="bannerWidth" src="../../thirdTwo.png" />
              <img className="vectorright" src="../../vector.png" />
              <img className="my-10 d-block opacity-0" src="../../halo.png" />
            </div>
            <Link href="#">
              <img className="my-10 d-block max-w-96 mx-auto" src="../../journeyBtn.png" />
            </Link>
            <div className="flex items-center justify-center gap-2 px-10 mt-16">
              <img className="w-4/12" src="../../nftCard1.png" />
              <img className="w-4/12 -mt-32" src="../../nftCard2.png" />
              <img className="w-4/12" src="../../nftCard3.png" />
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
