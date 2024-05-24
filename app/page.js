import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="heroSection">
        <video loop autoPlay muted preload="none">
          <source src="../Omniverse.mp4" type="video/mp4" />
        </video>
        <div className="h-screen relative  mx-auto pt-20 z-10 flex flex-col justify-between items-center">
          <div className="container mainData text-center">
            <h1 className="font-main mb-20 text-white sm:text-3xl text-[16px]">PRESERVING NATURE and<br></br> ELEVATING HUMAN CONSCIOUSNESS</h1>
            <p className="font-main text-white sm:text-2xl text-[29px] mt-10">The</p>
            <img className="mainLogo" src="../../logo.png" />
            <p className="text-[#9E9B9D] font-second sm:text-3xl text-[22px] font-[600] mt-20">Advancing Humanity with Web3 Technologies and Ecosystems.</p>
            <p className="text-[#9E9B9D] font-second sm:text-2xl text-[22px] font-[600] mt-10">Experience The Togetherative</p>
          </div>
          <section className="titleBar w-full z-30">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="sm:w-1/12 w-2/12 text-right">
              <img src="../../grad-1.png" alt="Image 1" className="w-full" />
            </div>
            <div className="w-8/12 text-center">
              <h2 className="sm:text-3xl text-[16px] font-bold font-third text-white">2 token bound nft WORLDS</h2>
            </div>
            <div className="sm:w-1/12 w-2/12 text-left">
              <img src="../../grad-2.png" alt="Image 2" className="w-full" />
            </div>
          </div>
        </div>
      </section>
        </div>
      
      </section>
 


      <section className="secondSection relative">
        <img src="../../atriumCentered.png" className="sm:block hidden centeredLogo" />
        <div className=" h-screen flex justify-center items-center twiceRow sm:flex-nowrap flex-wrap">
          <div className="sm:w-6/12 w-full relative">
            <video loop autoPlay muted preload="none">
              <source src="../trees-stars.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center flex justify-center flex-col">
              <h3 className="text-white font-main sm:text-3xl text-[18px] font-[600] mt-10 ">STARHOLDERS</h3>
              <div className="flex items-center justify-center">
                <div className="col-12 text-center">
                  <p className="text-white font-third sm:text-2xl font-[600] mb-2 mt-10">ON</p>
                  <img className="brandLogo" src="../polygon.png" />
                </div>
              </div>
              <div className="flex justify-center">
                <Link href="#">
              
                  <button className="custom-btn-join mt-20 mb-10 font-third">Join <br/> the dad</button>
                </Link>
              </div>
              <div className="sm:flex flex-col justify-center">
                <p className="text-white text-2xl mb-3">Mint an Actual Unique Star</p>
              
              </div>
              <div className="flex w-6/12 mx-auto mt-10 flex-row justify-between">
                <p className="text-white text-[22px] mb-3">Claim a FREE </p>
                <p className="text-white text-[22px] mb-3">$250 USDC NFT</p>
              </div>
              <div className="flex flex-col mt-[-50px] justify-center items-center">
                <img className="battleLogo" src="../battle-logo.png" />
                <img className="joinBtn" src="../moonizens.png" />
              </div>
            </div>
          </div>
          <div className="sm:w-6/12 w-full relative">
            <video loop autoPlay muted preload="none">
              <source src="../universewithin.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center flex justify-center flex-col">
              <h3 className="text-white font-main sm:text-3xl text-[18px] font-[600] mt-10 ">JOURNEYBOUND</h3>
              <div className="flex justify-center">
                <div className="w-6/12 text-center">
                  <p className="text-white font-third sm:text-2xl font-[600] mb-2 mt-10">ON</p>
                  <img className="baseLogo" src="../baseLogo.png" />
                </div>
              </div>
              <div className="flex justify-center sm:mt-0 mt-5">
                <Link href="#">
                
                  <button className="cuton-btn-journey mt-20 mb-10 font-third">Join <br/> The Journey</button>
                </Link>
              </div>
              <div className="flex items-end">
                <div className="w-6/12 text-left">
                  <p className="text-white text-xl text-custom-width">Receive<br></br>$1500 USDC</p>
                  <p className="text-white text-xl text-custom-width">or</p>
                  <p className="text-white sm:text-left sm:mb-0 mb-10 text-left text-xl">Qualify for an Actual Journey at</p>
                  <img className="brandLogo mt-5" src="../brainLogo.png" />
                </div>
                <div className="w-6/12 text-right flex justify-end">
                  <img className="brandLogo_s" src="../boyndLogo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="thirdSection py-8 relative">
        <img src="../../linesCenter.png" className="centeredLogo" />
        <div className="h-screen flex justify-center sm:flex-nowrap flex-wrap gap-20 items-stretch twiceRow relative z-10">
          <div className="sm:w-6/12 w-full relative text-center">
            <div className="bannerWidthWrapper">
              <img className="bannerWidth" src="../../thirdOne.png" />
              <img className="vectorleft" src="../../vector.png" />
              <img className="mt-10 d-block" src="../../halo.png" />
            </div>
            <Link href="#">
            <button className="custom-btn-join-start mt-10 mb-10 font-third">Starholders</button>
         
            </Link>
            <img className="my-10 d-block mx-auto" src="../../spaceBtn.png" />
            <div className="flex items-start justify-center">
              <img className="max-w-32" src="../../nft.png" />
              <p className="text-white font-second text-3xl font-[600]">Marketplace</p>
            </div>
          </div>


          <div className="sm:w-6/12 w-full relative text-center">
            <div className="bannerWidthWrapper">
              <img className="bannerWidth" src="../../thirdTwo.png" />
              <img className="vectorright" src="../../vector.png" />
              <img className="d-block opacity-0" src="../../halo.png" />
            </div>
            <Link href="#">
           
              <button className="cuton-btn-journey-2 mt-20 mb-10 font-third">JOURNEYBOUND</button>
            </Link>
            <div className="flex items-center justify-center gap-2 px-10 mt-16 section-thied-image">
              <img className="w-4/12" src="../../nftCard1.png" />
              <img className="w-4/12 -mt-32" src="../../nftCard2.png" />
              <img className="w-4/12" src="../../nftCard3.png" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-16">
        <div className="container mx-auto">
          <div className="flex sm:flex-nowrap flex-wrap justify-center gap-4 footer-border">
            <div className="sm:w-6/12 w-fu;;">
              <img src="../../logo.png" />
            </div>

            <div className="sm:w-2/12 w-full sm:border-b-0 border-b">
              <h4 className="text-white font-second font-bold">Connect</h4>
              <ul className="mt-6">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="mailto:welcome@atrium.earth">welcome@atrium.earth</Link>
                </li>
              </ul>
            </div>

            <div className="sm:w-2/12 w-full sm:border-b-0 border-b">
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

            <div className="sm:w-2/12 w-full sm:border-b-0 border-b">
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
          <p className="mt-5 text-[#9E9B9D] font-bold sm:text-left text-center">
            Copyright 2024 The Atrium, LCA. | All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
