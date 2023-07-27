import Mice from "../components/mice";


const circumference = 2 * 22 / 7 * 120;



export default function HomePage() {


    return (
        <div>
            {/* section 1 */}
            <div className="bg-secondary pb-10">
                <div className="mx-5 max-w-screen-xl xl:mx-auto">
                    <div className="flex  justify-end  pt-5">
                        <img src="/images/logo.png" className="object-contain object-center h-7 md:h-12 w-auto" alt="" />
                    </div>
                    <div className="pt-10">
                        <h1 className="text-3xl font-extrabold text-primary md:text-5xl">
                            Mirror webapp reccomandation music
                        </h1>
                    </div>
                    {/* mice component */}
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-10 justify-between mt-10 md:mt-20 lg:flex-row">
                            <div className="flex items-center justify-center flex-col gap-10 p-10 border md:gap-16 ">
                                <div className="md:pt-7">
                                    <Mice />
                                </div>
                                <div>
                                    <h1 className="text-2xl text-primary font-extrabold  text-center w-[200px]">
                                        Hi Stefeano! How do you feel physically
                                    </h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center flex-col gap-10 p-10 border md:gap-16 ">
                                <div className="">
                                    <Mice />
                                </div>
                                <div>
                                    <h1 className="text-2xl text-primary font-extrabold  text-center w-[200px]">
                                        And How do you feel Mentally
                                    </h1>
                                </div>
                            </div>
          
                        </div>
                        {/* music string */}
                        <div className="flex text-center justify-center items-center">
                            <img src="/images/music-string.png" alt="" className="w-1/2 h-auto object-contain object-center" />
                        </div>
                        <div className="flex items-center justify-center">
                            <img src="/images/manlogo.png" alt="" />
                        </div>
                        <div className="text-2xl text-primary font-extrabold  text-center">
                            I'm super fine thank you...
                        </div>
                        <div className="rounded border flex items-center justify-center">
                            <p className="text-xl font-bold text-primary py-2">
                                2 Questions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2 */}
            <div className="max-w-screen-xl mx-5 xl:mx-auto">
                <div className="mt-10 md:mt-20">
                    <div className="flex flex-wrap gap-10">
                        <div className="flex flex-col items-center justify-between gap-3 w-full md:flex-row">
                            <div className="flex flex-wrap items-center justify-center text-center gap-8 p-10 border w-[290px] md:w-[300px]">
                                <h1 className="text-2xl text-primary font-extrabold w-[200px]">
                                    Mental Keywords
                                </h1>
                                <h3 className="text-xl text-primary font-bold w-[150px]">
                                    Super fine Relaxed Concentrated
                                </h3>
                            </div>
                            <div className="flex flex-wrap items-center justify-center text-center gap-8 p-10 border w-[290px] md:w-[300px]">
                                <h1 className="text-2xl text-primary font-extrabold w-[200px]">
                                    Physical Keywords
                                </h1>
                                <h3 className="text-xl text-primary font-bold w-[150px]">
                                    Super fine Relaxed Concentrated
                                </h3>
                            </div>
                        </div>
                        <div className="flex justify-between gap-3 w-full flex-col md:flex-row">
                            <div className="flex flex-col items-center justify-center gap-5">
                                <h1 className="text-2xl text-primary font-extrabold max-w-[200px] text-center">
                                    Your mental State
                                </h1>
                                <div className="flex items-center justify-center relative border py-5">
                                    <svg className="transform -rotate-90 w-72 h-72">
                                        <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-secondary" />
                                        <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                            strokeDasharray={''}
                                            strokeDashoffset={circumference - ((0) / 100 * circumference)}
                                            className="text-primary " />
                                    </svg>
                                    <span className="absolute text-5xl left-1/2 -translate-x-1/2 ml-2"> 30%</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-5">
                                <h1 className="text-2xl text-primary font-extrabold max-w-[200px] text-center">
                                    Your physical State
                                </h1>
                                <div className="flex items-center justify-center relative border py-5">
                                    <svg className="transform -rotate-90 w-72 h-72">
                                        <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent" className="text-secondary" />
                                        <circle cx="145" cy="145" r="120" stroke="currentColor" strokeWidth="30" fill="transparent"
                                            strokeDasharray={''}
                                            strokeDashoffset={circumference - ((0) / 100 * circumference)}
                                            className="text-primary " />
                                    </svg>
                                    <span className="absolute text-5xl left-1/2 -translate-x-1/2 ml-2"> 30%</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded border flex items-center justify-center w-full">
                            <p className="text-xl font-bold text-primary py-2">
                                Results and data
                            </p>
                        </div>
                    </div>


                </div>
                {/* section 3 */}
                <div className="mt-10 mb-32 md:mt-20">
                    <div className="flex flex-col gap-5 md:gap-10">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center justify-center">
                                <h1 className="text-2xl text-primary font-extrabold text-center">
                                    These tracks can help you feeling better
                                </h1>
                            </div>
                            <div className="flex text-center justify-center items-center rounded-full">
                                <img src="/images/music-string.png" alt="" className="w-1/2 h-auto object-contain object-center" />
                            </div>
                        </div>
                        {/* mp3 shape */}
                        <div className="flex flex-col  gap-1 items-center justify-center md:flex-wrap">
                            <div className="flex justify-between items-center relative w-full bg-slate-400 max-w-4xl">
                                <div className="flex gap-5 ">
                                    <div>
                                        <img src="/images/mp3.jpeg" alt="" className="w-24 h-auto aspect-square object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-base text-primary font-bold">
                                            Surface Next
                                        </p>
                                        <img src="/images/music-string.png" alt="" className="w-32 h-16 object-contain object-center" />
                                    </div>
                                </div>
                                {/* play button and xmark icon */}
                                <div className="">
                                    <i className="fa-solid fa-xmark text-white/70 text-xl absolute top-3 right-6  -translate-y-1/2 translate-x-1/2"></i>
                                    <i className="fa-solid fa-circle-play text-white text-3xl absolute bottom-2 right-3"></i>
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
                                        <img src="/images/music-string.png" alt="" className="w-32 h-16 object-contain object-center" />
                                    </div>
                                </div>
                                {/* play button and xmark icon */}
                                <div className="">
                                    <i className="fa-solid fa-xmark text-white/70 text-xl absolute top-3 right-6  -translate-y-1/2 translate-x-1/2"></i>
                                    <i className="fa-solid fa-circle-play text-white text-3xl absolute bottom-2 right-3"></i>
                                </div>
                            </div>
                        </div>
                        <div className="rounded border flex items-center justify-center mt-5 md:mt-10">
                            <p className="text-xl font-bold text-primary py-2">
                                Music Recommendation
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}


