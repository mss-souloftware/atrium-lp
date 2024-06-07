import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="heroSection">
        <video loop autoPlay muted preload="none">
          <source src="../Omniverse.mp4" type="video/mp4" />
        </video>
        <div className="relative  mx-auto z-10 flex flex-col justify-between items-center">
          <div className="container mainData flex flex-col justify-evenly items-center px-5 text-center h-[90vh]">
            <div><h1 className="font-main text-white lg:text-4xl tracking-[6px] md:text-[22px] text-[16px] max-lg:tracking-[2px]">PRESERVING NATURE and<br></br> ELEVATING HUMAN CONSCIOUSNESS</h1></div>
            <div>
              <p className="font-main text-white sm:text-2xl text-[18px] mt-10">The</p>
              <img className="mainLogo" src="../../logo.png" />
            </div>
            <div>
              <p className="sm:text-[#9E9B9D] text-white font-second lg:text-3xl md:text-[22px] text-[18px] font-[600] ">Advancing Humanity with Web3 Technologies and Ecosystems.</p>
              <p className="sm:text-[#9E9B9D] text-white font-second lg:text-2xl md:text-[22px] text-[18px] font-[600] mt-10 max-lg:mt-5">Experience The Togetherative</p>
            </div>
          </div>
          <section className="titleBar h-[10vh] w-full z-30 flex items-center">
            <div className="container mx-auto">
              <div className="flex justify-center items-center">
                <div className="sm:w-1/12 w-2/12 text-right">
                  <img src="../../grad-1.png" alt="Image 1" className="w-full" />
                </div>
                <div className="w-8/12 text-center">
                  <h2 className="lg:text-3xl md:text-[16px] text-[12px] sm:font-bold font-medium font-third text-white">2 token bound nft WORLDS</h2>
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
        <div className="flex justify-center twiceRow lg:flex-nowrap flex-wrap">
          <div className="lg:w-6/12 w-full relative max-lg:h-screen">
            <video loop autoPlay muted preload="none">
              <source src="../trees-stars.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center flex justify-between flex-col max-sm:px-5 max:h-screen">
              <div>
                <h3 className="text-white font-main sm:text-3xl text-[18px] max-sm:font-normal mt-10 max-sm:mt-[60px] font-[600]">STARHOLDERS</h3>
              </div>
              <div className="flex items-center justify-center max-sm:flex-col">
                <div className="col-12 text-center">
                  <p className="text-white font-third sm:text-2xl font-[600] max-sm:font-normal mb-2 mt-5">ON</p>
                  <img className="brandLogo" src="../polygon.png" />
                  <div className="flex justify-center">
                    <Link href="#">
                      <button className="custom-btn-join mt-20 mb-10 max-sm:my-10 font-third">Join <br /> the dad</button>
                    </Link>
                  </div>
                </div>

              </div>

              <div className="max-sm:mb-[60px]">
                <div className="sm:flex sm:hidden flex-col justify-center">
                  <p className="text-white text-2xl max-sm:text-[16px] max-md:mt-3 max-sm:font-normal mb-3">Mint an Actual Unique Star</p>

                </div>
                <div className="sm:flex max-sm:hidden flex-col justify-center">
                  <p className="text-white text-2xl mb-3">Mint an Actual Unique Star</p>

                </div>
                <div className="flex w-6/12 max-sm:w-full mx-auto mt-10 flex-row justify-between">
                  <p className="text-white text-[22px] max-sm:text-[18px] max-sm:font-normal mb-3">Claim a FREE </p>
                  <p className="text-white text-[22px] max-sm:text-[18px] max-sm:font-normal mb-3">$250 USDC NFT</p>
                </div>
                <div className="flex flex-col mt-[-50px] justify-center items-center">
                  <img className="battleLogo" src="../battle-logo.png" />
                  <img className="joinBtn" src="../moonizens.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-lg:hidden lg:w-6/12 w-full max-lg:h-screen relative">
            <video loop autoPlay muted preload="none">
              <source src="../universewithin.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center flex justify-center flex-col max-sm:px-5">
              <h3 className="text-white font-main sm:text-3xl text-[18px]  max-sm:font-normal font-[600] mt-10 ">JOURNEYBOUND</h3>
              <div className="flex justify-center">
                <div className="w-6/12 text-center">
                  <p className="text-white font-third sm:text-2xl font-[600] max-sm:font-normal mb-2 mt-5">ON</p>
                  <img className="baseLogo" src="../baseLogo.png" />
                </div>
              </div>
              <div className="flex justify-center sm:mt-0 mt-5">
                <Link href="#">

                  <button className="cuton-btn-journey mt-20 mb-10 max-sm:my-5 font-third">Join <br /> The Journey</button>
                </Link>
              </div>
              <div className="flex items-end max-sm:mt-10">
                <div className="w-6/12 text-left">
                  <p className="text-white text-xl max-sm:text-[16px] text-custom-width">Receive<br></br>$1500 USDC</p>
                  <p className="text-white text-xl max-sm:text-[16px] text-custom-width">or</p>
                  <p className="text-white sm:text-left sm:mb-0 mb-10 max-sm:text-[16px] text-left text-xl">Qualify for an Actual Journey at</p>
                  <img className="ms-10 max-sm:ms-0 brandLogo mt-5" src="../brainLogo.png" />
                </div>
                <div className="w-6/12 text-right flex justify-end">
                  <img className="brandLogo_s" src="../boyndLogo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="thirdSection lg:py-8 max-sm:py-0 relative">
        <img src="../../linesCenter.png" className="centeredLogo" />
        <div className="flex justify-center lg:flex-nowrap flex-wrap gap-20 max-lg:gap-0 items-stretch twiceRow relative z-10">
          <div className="lg:w-6/12 w-full relative text-center max-lg:py-10 mobile-sky max-lg:px-5 max-lg:h-screen">
            <div className="bannerWidthWrapper">
              <img className="bannerWidth" src="../../thirdOne.png" />
              <div className="halo-vector">
                <img className="vector-halo" src="../../vector.png" />
                <img className="mt-10 max-sm:mt-5 d-block mob-hallo" src="../../halo.png" />
                <Link href="#">
                  <button className="custom-btn-join-start max-sm:text-[12px] mt-10 max-sm:mt-5 mb-10 font-third">Starholders</button>

                </Link>
              </div>
            </div>

            <img className="mb-10 sm:hidden d-block space-btn mx-auto" src="../../space-btn-mobile.png" />
            <img className="mb-10 max-sm:hidden d-block space-btn mx-auto" src="../../spaceBtn.png" />
            <div className="flex items-start justify-center max-lg:items-center max-lg:gap-5 custom-zindex">
              <img className="max-w-32 max-lg:max-w-20" src="../../nft.png" />
              <p className="text-white font-second text-3xl max-sm:text-[18px] font-[600]">Marketplace</p>
            </div>
          </div>
          <div className="lg:hidden lg:w-6/12 w-full max-lg:h-screen relative over-lay">
            <video loop autoPlay muted preload="none">
              <source src="../universewithin.mp4" type="video/mp4" />
            </video>
            <div className="textData text-center flex justify-between flex-col max-sm:px-5">
              <div>
                <h3 className="text-white font-main sm:text-3xl text-[18px]  max-sm:font-normal font-[600] mt-10 max-sm:mt-[60px]">JOURNEYBOUND</h3>
              </div>
              <div>
                <div className="flex justify-center">
                  <div className="w-6/12 text-center">
                    <p className="text-white font-third sm:text-2xl font-[600] max-sm:font-normal mb-2 mt-10">ON</p>
                    <img className="baseLogo" src="../baseLogo.png" />
                  </div>
                </div>
                <div className="flex justify-center sm:mt-0 mt-5">
                  <Link href="#">

                    <button className="cuton-btn-journey mt-20 mb-10 max-sm:my-10 font-third">Join <br /> The Journey</button>
                  </Link>
                </div>
              </div>
              <div className="flex items-end max-sm:mb-[60px]">
                <div className="w-6/12 text-left">
                  <p className="text-white text-xl max-sm:text-[20px] text-custom-width">Receive<br></br>$1500 USDC</p>
                  <p className="text-white text-xl max-sm:text-[20px] text-custom-width">or</p>
                  <p className="text-white sm:text-left sm:mb-0 mb-10 max-sm:mb-20 max-sm:text-[20px] text-left text-xl">Qualify for an Actual Journey at</p>
                  <img className="ms-10 max-sm:ms-0 brandLogo mt-5" src="../brainLogo.png" />
                </div>
                <div className="w-6/12 text-right flex justify-end">
                  <img className="brandLogo_s" src="../boyndLogo.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-6/12 w-full relative text-center mobile-sky-2 max-lg:py-20 max-lg:h-screen">
            <div className="bannerWidthWrapper">
              <img className="bannerWidth mob-benner-width" src="../../thirdTwo.png" />
              <img className="vectorright" src="../../vector.png" />

            </div>
            <Link href="#">

              <button className="cuton-btn-journey-2 mt-20  max-sm:text-[14px] max-sm:my-10 mb-10 font-third">JOURNEYBOUND</button>
            </Link>
            <div className="flex items-center hidden justify-center gap-2 px-10 mt-16 section-thied-image max-lg:z-20">
              <img className="w-4/12" src="../../nftCard1.png" />
              <img className="w-4/12 -mt-32" src="../../nftCard2.png" />
              <img className="w-4/12" src="../../nftCard3.png" />
            </div>
            <div className="flex items-center justify-center ">
              <img className="phonix-image md:hidden " src="phoenix.png" alt="image" />
              <img className="phonix-image max-sm:hidden" src="dektop-phoenix.png" alt="image" />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black px-10 py-16">
        <div className="container mx-auto">
          <div className="flex lg:flex-nowrap flex-wrap max-lg:text-center justify-center gap-4 footer-border">
            <div className="lg:w-6/12 w-full">
              <img src="../../logo.png" />
            </div>

            <div className="lg:w-2/12 max-sm:py-5 w-full sm:border-b-0 border-b">
              <h4 className="text-white font-second font-bold">Connect</h4>
              <ul className="mt-6 max-sm:mt-0">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="mailto:welcome@atrium.earth">welcome@atrium.earth</Link>
                </li>
              </ul>
            </div>

            <div className="lg:w-2/12 max-sm:py-5 w-full sm:border-b-0 border-b">
              <h4 className="text-white font-second font-bold">Explore</h4>
              <ul className="mt-6 max-sm:mt-0">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">Media</Link>
                </li>
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">Education</Link>
                </li>

              </ul>
              <div className="max-sm:hidden">

                <div className="flex gap-x-[10px]">
                  <a href="#">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>discord</title>
                      <path d="M20.992 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.050 0.005 0.109 0.005 0.168 0 1.523-1.191 2.768-2.693 2.854l-0.008 0zM11.026 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.048 0.005 0.104 0.005 0.161 0 1.525-1.19 2.771-2.692 2.862l-0.008 0zM26.393 6.465c-1.763-0.832-3.811-1.49-5.955-1.871l-0.149-0.022c-0.005-0.001-0.011-0.002-0.017-0.002-0.035 0-0.065 0.019-0.081 0.047l-0 0c-0.234 0.411-0.488 0.924-0.717 1.45l-0.043 0.111c-1.030-0.165-2.218-0.259-3.428-0.259s-2.398 0.094-3.557 0.275l0.129-0.017c-0.27-0.63-0.528-1.142-0.813-1.638l0.041 0.077c-0.017-0.029-0.048-0.047-0.083-0.047-0.005 0-0.011 0-0.016 0.001l0.001-0c-2.293 0.403-4.342 1.060-6.256 1.957l0.151-0.064c-0.017 0.007-0.031 0.019-0.040 0.034l-0 0c-2.854 4.041-4.562 9.069-4.562 14.496 0 0.907 0.048 1.802 0.141 2.684l-0.009-0.11c0.003 0.029 0.018 0.053 0.039 0.070l0 0c2.14 1.601 4.628 2.891 7.313 3.738l0.176 0.048c0.008 0.003 0.018 0.004 0.028 0.004 0.032 0 0.060-0.015 0.077-0.038l0-0c0.535-0.72 1.044-1.536 1.485-2.392l0.047-0.1c0.006-0.012 0.010-0.027 0.010-0.043 0-0.041-0.026-0.075-0.062-0.089l-0.001-0c-0.912-0.352-1.683-0.727-2.417-1.157l0.077 0.042c-0.029-0.017-0.048-0.048-0.048-0.083 0-0.031 0.015-0.059 0.038-0.076l0-0c0.157-0.118 0.315-0.24 0.465-0.364 0.016-0.013 0.037-0.021 0.059-0.021 0.014 0 0.027 0.003 0.038 0.008l-0.001-0c2.208 1.061 4.8 1.681 7.536 1.681s5.329-0.62 7.643-1.727l-0.107 0.046c0.012-0.006 0.025-0.009 0.040-0.009 0.022 0 0.043 0.008 0.059 0.021l-0-0c0.15 0.124 0.307 0.248 0.466 0.365 0.023 0.018 0.038 0.046 0.038 0.077 0 0.035-0.019 0.065-0.046 0.082l-0 0c-0.661 0.395-1.432 0.769-2.235 1.078l-0.105 0.036c-0.036 0.014-0.062 0.049-0.062 0.089 0 0.016 0.004 0.031 0.011 0.044l-0-0.001c0.501 0.96 1.009 1.775 1.571 2.548l-0.040-0.057c0.017 0.024 0.046 0.040 0.077 0.040 0.010 0 0.020-0.002 0.029-0.004l-0.001 0c2.865-0.892 5.358-2.182 7.566-3.832l-0.065 0.047c0.022-0.016 0.036-0.041 0.039-0.069l0-0c0.087-0.784 0.136-1.694 0.136-2.615 0-5.415-1.712-10.43-4.623-14.534l0.052 0.078c-0.008-0.016-0.022-0.029-0.038-0.036l-0-0z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 30 30" width="20px" height="20px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" /></svg>
                  </a>
                  <a href="#">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>linkedin</title>
                      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" /></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"  fill="#ffffff" width="20px" height="20px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                  </a>
                  <a href="#">
                    <svg width="20px" fill="#ffffff" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z" fill="#0F0F0F" />
                      <path d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z" fill="#0F0F0F" />
                      <path d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z" fill="#0F0F0F" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            <div className="lg:w-2/12 max-sm:py-5 w-full sm:border-b-0 border-b">
              <h4 className="text-white font-second font-bold">Legal</h4>
              <ul className="mt-6 max-sm:mt-0">
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">NFT Purchase Agreement</Link>
                </li>
                <li>
                  <Link className="text-[#9E9B9D] font-bold" href="#">Terms of Use</Link>
                </li>
                
              </ul>
              <div className="sm:hidden">
              <div className="flex gap-x-[10px] items-center justify-center mt-10">
                  <a href="#">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>discord</title>
                      <path d="M20.992 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.050 0.005 0.109 0.005 0.168 0 1.523-1.191 2.768-2.693 2.854l-0.008 0zM11.026 20.163c-1.511-0.099-2.699-1.349-2.699-2.877 0-0.051 0.001-0.102 0.004-0.153l-0 0.007c-0.003-0.048-0.005-0.104-0.005-0.161 0-1.525 1.19-2.771 2.692-2.862l0.008-0c1.509 0.082 2.701 1.325 2.701 2.847 0 0.062-0.002 0.123-0.006 0.184l0-0.008c0.003 0.048 0.005 0.104 0.005 0.161 0 1.525-1.19 2.771-2.692 2.862l-0.008 0zM26.393 6.465c-1.763-0.832-3.811-1.49-5.955-1.871l-0.149-0.022c-0.005-0.001-0.011-0.002-0.017-0.002-0.035 0-0.065 0.019-0.081 0.047l-0 0c-0.234 0.411-0.488 0.924-0.717 1.45l-0.043 0.111c-1.030-0.165-2.218-0.259-3.428-0.259s-2.398 0.094-3.557 0.275l0.129-0.017c-0.27-0.63-0.528-1.142-0.813-1.638l0.041 0.077c-0.017-0.029-0.048-0.047-0.083-0.047-0.005 0-0.011 0-0.016 0.001l0.001-0c-2.293 0.403-4.342 1.060-6.256 1.957l0.151-0.064c-0.017 0.007-0.031 0.019-0.040 0.034l-0 0c-2.854 4.041-4.562 9.069-4.562 14.496 0 0.907 0.048 1.802 0.141 2.684l-0.009-0.11c0.003 0.029 0.018 0.053 0.039 0.070l0 0c2.14 1.601 4.628 2.891 7.313 3.738l0.176 0.048c0.008 0.003 0.018 0.004 0.028 0.004 0.032 0 0.060-0.015 0.077-0.038l0-0c0.535-0.72 1.044-1.536 1.485-2.392l0.047-0.1c0.006-0.012 0.010-0.027 0.010-0.043 0-0.041-0.026-0.075-0.062-0.089l-0.001-0c-0.912-0.352-1.683-0.727-2.417-1.157l0.077 0.042c-0.029-0.017-0.048-0.048-0.048-0.083 0-0.031 0.015-0.059 0.038-0.076l0-0c0.157-0.118 0.315-0.24 0.465-0.364 0.016-0.013 0.037-0.021 0.059-0.021 0.014 0 0.027 0.003 0.038 0.008l-0.001-0c2.208 1.061 4.8 1.681 7.536 1.681s5.329-0.62 7.643-1.727l-0.107 0.046c0.012-0.006 0.025-0.009 0.040-0.009 0.022 0 0.043 0.008 0.059 0.021l-0-0c0.15 0.124 0.307 0.248 0.466 0.365 0.023 0.018 0.038 0.046 0.038 0.077 0 0.035-0.019 0.065-0.046 0.082l-0 0c-0.661 0.395-1.432 0.769-2.235 1.078l-0.105 0.036c-0.036 0.014-0.062 0.049-0.062 0.089 0 0.016 0.004 0.031 0.011 0.044l-0-0.001c0.501 0.96 1.009 1.775 1.571 2.548l-0.040-0.057c0.017 0.024 0.046 0.040 0.077 0.040 0.010 0 0.020-0.002 0.029-0.004l-0.001 0c2.865-0.892 5.358-2.182 7.566-3.832l-0.065 0.047c0.022-0.016 0.036-0.041 0.039-0.069l0-0c0.087-0.784 0.136-1.694 0.136-2.615 0-5.415-1.712-10.43-4.623-14.534l0.052 0.078c-0.008-0.016-0.022-0.029-0.038-0.036l-0-0z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 30 30" width="20px" height="20px"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" /></svg>
                  </a>
                  <a href="#">
                    <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <title>linkedin</title>
                      <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" /></svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"  fill="#ffffff" width="20px" height="20px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                  </a>
                  <a href="#">
                    <svg width="20px" fill="#ffffff" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 12C13 15.3137 10.3137 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C10.3137 6 13 8.68629 13 12Z" fill="#0F0F0F" />
                      <path d="M23 12C23 14.7614 22.5523 17 22 17C21.4477 17 21 14.7614 21 12C21 9.23858 21.4477 7 22 7C22.5523 7 23 9.23858 23 12Z" fill="#0F0F0F" />
                      <path d="M17 18C18.6569 18 20 15.3137 20 12C20 8.68629 18.6569 6 17 6C15.3431 6 14 8.68629 14 12C14 15.3137 15.3431 18 17 18Z" fill="#0F0F0F" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-sm:py-5  mx-auto">
          <p className="mt-5 text-[#9E9B9D] font-bold lg:text-left text-center">
            Copyright 2024 The Atrium, LCA. | All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
