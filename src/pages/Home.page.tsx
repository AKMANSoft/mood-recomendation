import HeaderComponent from "@/components/HeaderComponent";


const circumference = 2 * 22 / 7 * 120;


export default function HomePage() {


    return (
        <div className="bg-primary pb-10 min-h-screen">
            <HeaderComponent />
            <div className="mx-5 max-w-screen-xl xl:mx-auto">
                {/* title */}
                <div className="pt-5 md:pt-10">
                    <h1 className="text-2xl font-extrabold text-white md:text-5xl">
                        Mirror webapp reccomandation music
                    </h1>
                </div>
                {/* 3 main section */}
                <div className="flex lg:flex-row  flex-col justify-between mt-10 gap-2">
                    {/* section 1 Mice  */}
                    <div className="lg:w-[30%] border px-2 pb-20 relative">
                        {/* mice component */}
                        <div className="flex flex-col gap-5 pt-10">
                            <div className="flex flex-col gap-4 justify-between  lg:flex-row ">
                                <div className="flex flex-col items-center justify-center gap-10">
                                    <div>
                                        <img src="/images/screen.JPG" className="w-20 h-auto object-center object-contain" alt="" />
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <h1 className="text-xl text-white/80 font-extrabold flex text-center justify-center items-center lg:w-[150px]">
                                            Hi Stefeano! How do you feel physically
                                        </h1>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-10">
                                    <div>
                                        <img src="/images/screen.JPG" className="w-20 h-auto object-center object-contain" alt="" />
                                    </div>
                                    <div className="flex items-center justify-center ">
                                        <h1 className="text-xl text-white/80 font-extrabold flex text-center justify-center items-center lg:w-[150px]">
                                            Hi Stefeano! How do you feel physically
                                        </h1>
                                    </div>
                                </div>


                                {/* music string */}
                            </div>
                            <div className="flex text-center justify-center items-center">
                                <img src="/images/music-string.png" alt="" className="w-1/2 h-auto object-contain object-center" />
                            </div>
                            <div className="flex items-center justify-center">
                                <img src="/images/manlogo.png" alt="" className="w-auto h-24 aspect-square object-contain object-center" />
                            </div>
                            <div className="text-2xl text-white/80 font-extrabold  text-center pb-2">
                                I'm super fine thank you...
                            </div>

                        </div>
                        <div className=" border flex items-center justify-center w-full bg-white absolute bottom-0 right-0">
                            <p className="text-xl font-bold text-red-700 py-2">
                                Questions
                            </p>
                        </div>
                    </div>
                    {/* section 2 Results and data */}
                    <div className="lg:w-[30%] border px-3 relative pb-20">
                        <div className="pt-10 ">
                            <div className="flex  gap-7 flex-col lg:flex-col md:flex-row">
                                <div className="flex lg:flex-row flex-col items-center justify-center gap-3">
                                    <div className="flex flex-wrap items-center justify-center text-center gap-8 border lg:w-1/2 py-4">
                                        <h1 className="text-2xl text-white/80 font-extrabold">
                                            Mental Keywords
                                        </h1>
                                        <h3 className="text-xl text-white font-bold max-w-[150px]">
                                            Super fine Relaxed Concentrated
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-center text-center gap-8 border lg:w-1/2 py-4">
                                        <h1 className="text-2xl text-white/80 font-extrabold">
                                            Physical Keywords
                                        </h1>
                                        <h3 className="text-xl text-white font-bold max-w-[150px]">
                                            Super fine Relaxed Concentrated
                                        </h3>
                                    </div>
                                </div>


                                <div className="flex justify-between gap-3 w-full flex-col xl:flex-row pb-1">
                                    <div className="flex flex-col items-center text-center justify-center xl:w-1/2">
                                        <h1 className="text-2xl text-white/70 font-extrabold flex text-center">
                                            Your mental State
                                        </h1>
                                        <div className="flex items-center justify-center relative ">
                                            <svg className="transform -rotate-90 ">
                                                <circle cx="145" cy="80" r="60" stroke="currentColor" strokeWidth="20" fill="transparent" className="text-white" />
                                                <circle cx="145" cy="80" r="60" stroke="currentColor" strokeWidth="20" fill="transparent"
                                                    strokeDasharray={''}
                                                    strokeDashoffset={circumference - ((0) / 100 * circumference)}
                                                    className="text-blue-900 " />
                                            </svg>
                                            <span className="absolute text-4xl left-1/2 -translate-x-1/2 ml-2 text-white"> 30%</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center xl:w-1/2">
                                        <h1 className="text-2xl text-white/70 font-extrabold  text-center">
                                            Your physical State
                                        </h1>
                                        <div className="flex items-center justify-center relative">
                                            <svg className="transform -rotate-90 ">
                                                <circle cx="145" cy="80" r="60" stroke="currentColor" strokeWidth="20" fill="transparent" className="text-white" />
                                                <circle cx="145" cy="80" r="60" stroke="currentColor" strokeWidth="20" fill="transparent"
                                                    strokeDasharray={''}
                                                    strokeDashoffset={circumference - ((0) / 100 * circumference)}
                                                    className="text-blue-900 " />
                                            </svg>
                                            <span className="absolute text-4xl left-1/2 -translate-x-1/2 ml-2 text-white"> 30%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" border flex items-center justify-center w-full bg-white absolute bottom-0 right-0">
                                    <p className="text-xl font-bold text-red-700 py-2">
                                        Results and data
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* 3rd */}
                    <div className="lg:w-[30%] border px-4 relative">
                        <div className="pt-10 pb-20">
                            <div className="flex flex-col gap-5 md:gap-10">
                                <div className="flex items-center justify-center">
                                    <h1 className="text-2xl text-white/80 font-extrabold text-center">
                                        These tracks can help you feeling better
                                    </h1>
                                </div>
                                <div className="flex text-center justify-center items-center rounded-full">
                                    <img src="/images/music-string.png" alt="" className="w-1/2 h-auto object-contain object-center" />
                                </div>
                                {/* mp3 shape */}
                                <div className="flex flex-col  gap-1 items-center justify-center md:flex-wrap">
                                    <div className="flex justify-between items-center relative w-full bg-slate-400 max-w-4xl">
                                        <div className="flex gap-5">
                                            <div>
                                                <img src="/images/mp3.jpeg" alt="" className="w-24 h-auto aspect-square object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-base text-primary font-bold">Surface Next</p>
                                                <img src="/images/music-string.png" alt="" className="md:w-32 w-24 h-16 object-contain object-center" />
                                            </div>
                                        </div>
                                        {/* play button and xmark icon */}
                                        <div className="">
                                            <i className="fa-solid fa-xmark text-white/70 text-xl absolute top-3 right-5 md:right-6  -translate-y-1/2 translate-x-1/2"></i>
                                            <i className="fa-solid fa-circle-play text-white text-3xl absolute bottom-2  md:right-3 right-1"></i>
                                        </div>

                                    </div>

                                    <div className="flex justify-between items-center relative w-full bg-slate-300 max-w-4xl ">
                                        <div className="flex gap-5">
                                            <div>
                                                <img src="/images/mp3.jpeg" alt="" className="w-24 h-auto aspect-square object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-base text-primary font-bold">
                                                    Surface Next
                                                </p>
                                                <img src="/images/music-string.png" alt="" className="md:w-32 w-24 h-16 object-contain object-center" />
                                            </div>
                                        </div>
                                        {/* play button and xmark icon */}
                                        <div className="">
                                            <i className="fa-solid fa-xmark text-white/70 text-xl absolute top-3 right-5 md:right-6  -translate-y-1/2 translate-x-1/2"></i>
                                            <i className="fa-solid fa-circle-play text-white text-3xl absolute bottom-2  md:right-3 right-1"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=" border flex items-center justify-center w-full bg-white absolute bottom-0 right-0">
                            <p className="text-xl font-bold text-red-700 py-2">
                                Music Recommendation
                            </p>
                        </div>

                    </div>


                </div>
            </div>

        </div >

    )
}