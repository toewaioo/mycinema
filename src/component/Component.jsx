/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p3kpW0HJoQV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import BubbleBackground from "./BubleBackground";
import BubbleFlameEffect from "./BubleBackground";
import BubbleFlame from "./BubleFrame";

import ImageSlider from "./ImageSlider";
import logo from "/download.png";
import home from "/home.png";
import movies from "/movies.png";
import series from "/series.png";
import seriesDetail from "/series_detail.png";
import movieDetail from "/movies_detail.png";

export default function Component() {
  const images = [
    home,
    movies,
    series,
    movieDetail,
    seriesDetail,

    // Add more image URLs as needed
  ];

  return (
    // <section className="w-full h-[100dvh] py-6 md:py-12">
    //   <div className="container px-4 md:px-6">
    //     <div className="grid h-[100dvh] items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
    //       <div className="flex flex-col justify-center space-y-4">
    //         <div className="space-y-2">
    //           <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //             Streamline your workflow with integrated collaboration.
    //           </h3>
    //           <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
    //             The platform for rapid progress. Let your team focus on shipping
    //             features instead of managing infrastructure with automated
    //             CI/CD, built-in testing, and integrated collaboration.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="grid gap-4">
    //         <div className="aspect-video overflow-hidden rounded-xl relative">
    //           <img
    //             alt="Image"
    //             className="absolute inset-0 object-cover object-center"
    //             src="download.png"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <section id="home" className="flex h-screen relative">
        <div className="absolute inset-0">
          <BubbleFlame />
        </div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="grid items-center gap-1 lg:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 m-8 md:m-10 lg:m-16">
                <h2 className="text-yellow-400 text-4xl font-bold lg:text-left xsm:text-center tracking-tighter xsm:text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
                  BEST MOVIE APP
                </h2>
                <p className="align-text-top sm:text-center lg:text-left md:text-2xl lg:text-2xl">
                  <strong className="text-yellow-600">MyCinema App</strong> မှာ <strong className="text-yellow-600">ChannelMyanmar website</strong>၊  မှ
                  ရုပ်ရှင်များကို လွယ်ကူစွာ
                
                  တိုက်ရိုက်ကြည့်ရှုနိုင်ပြီး၊
              
                  Download လည်း ပြုလုပ်နိုင်ပါပြီ။
                  <br />
                  အခုပဲ Download လုပ်ပြီး ကြည့်ရှုလိုက်ပါ။
                </p>
                <div class="xsm:flex items-center gap-2 justify-center">
                  <a href="__black" >
                    <img
                      className="h-[1rem] bg-zinc-900 p-2 md:h-[40px] sm:h-[42px] xsm:h-[38px] rounded-md w-full"
                      src="https://static.cdnpure.com/www/static/imgs/logo_new.png"
                    />
                  </a>
                  <a href="https://file.azcoiner.com/azcoiner_release_v123.apk" className="lg:w-full">

                    <img
                      class="h-[3rem]"
                      src="https://iili.io/3EAbSNs.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-1 ">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
