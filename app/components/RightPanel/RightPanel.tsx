import { useEffect, useState } from "react";
import RightPanelTop from "./RightPanelTop";
import RightPanelBottom from "./RightPanelBottom";

interface Props {
    isLeftPanelOpen: boolean;
    isRightPanelClicked?: any,
    leftPanelData: any | [],
    leftPanelOpenValue: number | null
}

export default function RightPanel({ isLeftPanelOpen = false, isRightPanelClicked = () => { }, leftPanelData = [], leftPanelOpenValue = null }: Props) {
    const [rightPanelTopClickedIndex, setRightPanelTopClickedIndex] = useState(false);
    const [rightPanelBottomClickedIndex, setRightPanelBottomClickedIndex] = useState(false);
    const rightPanelTopClickedIndexGet = (value: number) => {
        console.log("rightPanelTopClickedIndexGet", value);
        setRightPanelBottomClickedIndex(false);
        if (value !== null) {
            setRightPanelTopClickedIndex(true);
        } else {
            setRightPanelTopClickedIndex(false);
        }
    }

    const rightPanelBottomClickedIndexGet = (value: number) => {
        console.log("rightPanelBottomClickedIndexGet", value);
        setRightPanelTopClickedIndex(false);
        if (value !== null) {
            setRightPanelBottomClickedIndex(true);
        } else {
            setRightPanelBottomClickedIndex(false);
        }
    }
    useEffect(() => {
        console.log("leftPanelOpenValue ", leftPanelOpenValue)
    }, [rightPanelTopClickedIndex, isLeftPanelOpen, leftPanelOpenValue])
    return (
        <>
            <div className="h-[100vh] w-full overflow-hidden">
                {/* <div>RightPanel</div> */}

                <div className={`flex justify-start overflow-hidden items-start flex-col text-center w-full self-stretch transition-all duration-700 ease-in-out ${rightPanelTopClickedIndex ? 'h-[90%]' : 'h-[50%]'} ${rightPanelBottomClickedIndex ? 'hidden relative z-20' : ''}`}>
                    <RightPanelTop rightPanelTopClickedIndex={rightPanelTopClickedIndexGet} isLeftPanelOpen={isLeftPanelOpen} />
                </div>
                {/* {leftPanelData.map((item: any, index: number) => (
                    <>
                        {leftPanelOpenValue !== null && leftPanelOpenValue === index &&
                            <div className={` overflow-hidden transition-all duration-500 ease-in-out w-full  h-[80%] ${leftPanelOpenValue === index ? 'w-full p-10 ' : 'w-0 p-0'} `} style={{ background: item.bgColor }} id={item.title.toLowerCase().replace(" ", '')}>{item.content}</div>

                        }
                    </>
                ))} */}
                <div className={`flex justify-start items-start flex-row gap-2 overflow-hidden w-full transition-all duration-700 ease-in-out  ${rightPanelTopClickedIndex || leftPanelOpenValue !== null ? 'h-[10%]' : 'h-[50%]'} ${rightPanelBottomClickedIndex ? 'h-full relative z-40 scale-100' : ''}`}>
                    <RightPanelBottom rightPanelBottomClickedIndex={rightPanelBottomClickedIndexGet} isLeftPanelOpen={isLeftPanelOpen} leftPanelOpenValue={leftPanelOpenValue} />
                </div>




                {/* <div className={`flex justify-start overflow-hidden items-start flex-col text-center w-full self-stretch transition-all duration-700 ease-in-out ${leftPanelOpenValue !==null ? 'h-[10%]' : 'h-[50%] dfdf'} ${rightPanelBottomClickedIndex ? 'hidden relative z-20' : ''}`}>
                    <RightPanelTop rightPanelTopClickedIndex={rightPanelTopClickedIndexGet} isLeftPanelOpen={isLeftPanelOpen} leftPanelOpenValue={leftPanelOpenValue} />
                </div>
                
                <div className={`flex justify-start items-start flex-row gap-2 overflow-hidden w-full transition-all duration-700 ease-in-out  ${rightPanelTopClickedIndex ? 'h-[10%]' : 'h-[50%]'} ${rightPanelBottomClickedIndex ? 'h-full relative z-40 scale-100' : ''}`}>
                    <RightPanelBottom rightPanelBottomClickedIndex={rightPanelBottomClickedIndexGet} isLeftPanelOpen={isLeftPanelOpen} leftPanelOpenValue={leftPanelOpenValue} />
                </div> */}



                {/* <div className="flex justify-start items-start flex-col text-center w-full self-stretch h-[50%]">
                    {[
                        { title: 'Websites', content: 'We design fast, accessible, and scalable websites that elevate digital presence and user engagement.', bgColor: '#ffe0de' },
                        { title: 'Application Development', content: 'We build secure, high-performance web and mobile applications tailored to complex business workflows.', bgColor: '#56cbd4' },
                        { title: 'E-commerce', content: 'From storefront to checkout, we create complete e-commerce ecosystems that drive sales and scale with your growth.', bgColor: '#ff6688' },
                    ].map((item, index) => (
                        <>
                            <div className={`h-full w-full relative cursor-pointer p-10 ${open === index ? '' : ''}`} style={{ background: item.bgColor }} onClick={() => toggle(item.title.toLowerCase().replace(" ", ''), index)} key={index}>
                                <div key={index} className={`w-full`}>
                                    <button

                                        className=""
                                    >
                                        {item.title}
                                        <span>{open === index ? '▲' : '▼'}</span>
                                    </button>
                                </div>
                                <div className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out w-full ${open === index ? 'h-full p-10' : 'h-0'} `} style={{ background: item.bgColor }} id={item.title.toLowerCase().replace(" ", '')}>{item.content}</div>
                            </div>
                        </>
                    ))}

                    {/* <div className="bg-[#ffe0de] block w-full cursor-pointer" onClick={() => toggleAccordion('accordion1')}>
                        <button className="">
                            Websites
                            <span className="ml-2">▼</span>
                        </button>
                        <div id="accordion1" className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                            <div className="px-4 pt-2 text-gray-700 delay-200">
                                We design fast, accessible, and scalable websites that elevate digital presence and user engagement.
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#56cbd4] block w-full cursor-pointer" onClick={() => toggleAccordion('accordion2')}>
                        <button className="">
                            Application Development
                            <span className="ml-2">▼</span>
                        </button>
                        <div id="accordion2" className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                            <div className="px-4 pt-2 text-gray-700 delay-200">
                                We build secure, high-performance web and mobile applications tailored to complex business workflows.
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#ff6688] block w-full cursor-pointer" onClick={() => toggleAccordion('accordion3')}>
                        <button className="">
                            E-commerce
                            <span className="ml-2">▼</span>
                        </button>
                        <div id="accordion3" className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                            <div className="px-4 pt-2 text-gray-700 delay-200">
                                From storefront to checkout, we create complete e-commerce ecosystems that drive sales and scale with your growth.
                            </div>
                        </div>
                    </div> *
                </div> */}
                {/* <div className="flex justify-start items-start flex-row gap-2  w-full h-[50%]">
                    {[
                        { title: 'Strategy Consultant', content: 'Partnering with leadership to define digital roadmaps, market entry, and transformation strategies.', bgColor: '#fff7b6' },
                        { title: 'Tech Development', content: 'End-to-end development of websites, apps, and systems built for performance, security, and scale.', bgColor: '#aef1c8' },
                        { title: 'Customer Experience', content: 'Designing seamless, personalized experiences that convert users and strengthen brand loyalty.', bgColor: '#c6ddff' },
                        { title: 'Acquisition & Retention', content: 'Driving user growth and engagement through data-backed marketing and retention strategies.', bgColor: '#dfdbff' },
                        { title: 'Data Analysis', content: 'Turning user data into actionable insights for smarter decisions and continuous optimization.', bgColor: '#ffe0de' },
                    ].map((item, index) => (
                        <>
                            <div className={`h-full w-full relative cursor-pointer p-10 ${openService === index ? '' : ''}`} style={{ background: item.bgColor }} onClick={() => toggleServices(item.title.toLowerCase().replace(" ", ''), index)} key={index}>
                                <div key={index} className={`w-full`}>
                                    <button

                                        className=""
                                    >
                                        {item.title}
                                        <span>{openService === index ? '▲' : '▼'}</span>
                                    </button>
                                </div>
                            </div>
                            {openService === index &&
                                <div className={`absolute top-0 left-0 z-20 h-full overflow-hidden transition-all p-0 duration-500 ease-in-out w-full ${openService === index ? 'h-full ' : 'h-0 '} `} style={{ background: item.bgColor }} id={item.title.toLowerCase().replace(" ", '')} onClick={() => toggleServices(item.title.toLowerCase().replace(" ", ''), index)}>
                                    <div className="relative p-6">
                                        {item.content} {openService}
                                        <button className="cursor-pointer absolute top-1 right-1" onClick={() => toggleServices(item.title.toLowerCase().replace(" ", ''), index)}>X</button>
                                    </div>
                                </div>
                            }
                        </>
                    ))}
                 
                </div> */}
            </div >
        </>
    )
}