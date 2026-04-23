"use client";

import Footer from "../footer";
import Slider from "../Slider1/page";
import Imageslide from "../imageslide/page";
import Slider2 from "../slider2/page";
import Digital from "../digital/page";
import IndexNavbar from "@/navbar/IndexNavbar";
import IndexNavbar2 from "@/navbar/IndexNavbar2";
import BannerSlider2 from "../bannerslider2/page";

export default function AboutPage() {


  return (
      <section>

        <div className="xl:block lg:block md:hidden hidden ">
          <IndexNavbar />
        </div>
        <div className="xl:hidden lg:hidden md:block block ">
          <IndexNavbar2 />
        </div>
          <div>
            <BannerSlider2 />
          </div>
<div>
<Imageslide/>
</div>
<div>  <Slider/>
</div>
<div><Slider2/></div>
<div>
  <Digital/>
</div>
<Footer/>
         
        </section>

  );
}