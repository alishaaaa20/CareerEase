import React from "react";
import icons02 from "../assets/images/icon02.png";
import icons03 from "../assets/images/icon03.png";
import icons04 from "../assets/images/khalti-logo.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import makeupArtist from "../assets/images/makeupArtist.png";
import ArtistList from "../components/Artists/ArtistList";
import homeImg from "../assets/images/font.jpg";
import aboutImg from "../assets/images/whyus.png";
import explore from "../assets/images/explore.png";
import ask from "../assets/images/ask.png";

const Home = () => {
  return (
    <>
      {/*-----hero section-----*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*-----hero content-----*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[39px] md:leading-[70px] text-black">
                  Discover Your Career
                </h1>
                <p className="text__para text-black md:text-[16px]">
                  Save time and leave the stress behind. Explore the best course
                  suitable according to your choice.
                </p>
                <Link to="/artists">
                  <button className="btn">Explore Your Career </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <img
            src={homeImg}
            alt=""
            height={600}
            width={900}
            style={{ float: "center" }}
          />
        </div>
      </section>

      {/*-----hero__section end ------*/}

      {/*-----how it works section-----*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center text-[40px] text-primaryColor">
              How CareerEase Works?
            </h2>
            <p className="text__para text-center">
              Just a few clicks away from knowning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={explore} alt="" height={180} width={180} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[22px] leading-9 text-headingColor font-[700] text-center">
                  Explore!!
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  We have a perfect mentor.
                </p>

                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icons03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[22px] leading-9 text-headingColor font-[700] text-center">
                  Choose!!
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Choose your preference.
                </p>

                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={ask} alt="" height={150} width={150} />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[22px] leading-9 text-headingColor font-[700] text-center">
                  Ask??
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Ask your Queries.
                </p>

                <Link
                  to="/services"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*-----how it works section end-----*/}

      {/*-----makeup artist register section-----*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/*-----makeup artist image-----*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
              <img src={aboutImg} alt="" height={500} width={500} />
            </div>

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
              <h2 className="heading text-primaryColor text-center mt-[30px]">
                Explore your Career with us
              </h2>
              <p className="text__para mt-[30px] text-[18px]">
                We provide a platform that serves as a guiding light for
                students exploring future career paths. <br />
              </p>
              <ul className="pl-6 mt-[30px]">
                <li className="text__para">
                  {" "}
                  1. Discover a comprehensive list of careers spanning fields.
                </li>
                <li className="text__para">
                  {" "}
                  2. Receive recommendations for colleges based on your career
                  path.
                </li>
                <li className="text__para">
                  {" "}
                  3. Engage in an open community where students can ask
                  questions.
                </li>
                <li className="text__para">
                  {" "}
                  4. Visualize career progression and potential pathways.
                </li>
              </ul>

              <Link to="/register">
                <button className="btn">Explore Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*-----makeup artist register section ends-----*/}

      <About />

      {/*-----services section starts-----*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-primaryColor">
              Our Servies
            </h2>
            <p className="text__para text-center">
              We provide Makeup Artists for all occasions. Have a Look and
              choose yours.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/*-----services section ends-----*/}

      {/*-----Artist section starts-----*/}

      {/*-----artist section ends-----*/}
    </>
  );
};

export default Home;
