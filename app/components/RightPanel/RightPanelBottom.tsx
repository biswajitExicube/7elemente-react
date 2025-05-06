import { useEffect, useState } from "react";

interface Props {
    rightPanelBottomClickedIndex?: any,
    isLeftPanelOpen: boolean,
    leftPanelOpenValue: number | null
}

export default function RightPanelBottom({ rightPanelBottomClickedIndex = () => { },isLeftPanelOpen=false,leftPanelOpenValue = null }: Props) {

    const [openService, setOpenService] = useState(null);
    const [toggleServicesClicked, setToggleServicesClicked] = useState(false);

    const toggleServices = (name: string, index: any) => {
        setOpenService(openService === index ? null : index);
        const element = document.getElementById(name);
        setToggleServicesClicked(true);
        console.log("element", element, index)
        if (element)
            if (element.style.maxHeight && element.style.maxHeight !== '0px') {
                element.style.maxHeight = '0px';
            } else {
                element.style.maxHeight = '100%';
            }
    };
    useEffect(() => {
        // console.log("rightPanelTopClickedIndexGet rightPanelTopClickedIndex", "leftPanelOpen isLeftPanelOpen",isLeftPanelOpen)
        rightPanelBottomClickedIndex(openService)
    }, [openService,isLeftPanelOpen])
    return (
        <>
            <div className="h-full w-full self-stretch transition-all p-0 duration-500 overflow-hidden">

                <div className={`flex justify-start items-start flex-row overflow-hidden  w-full h-full relative`}>
                    {/* <div className="flex justify-start items-start flex-col text-center w-full"> */}
                    {[
                        { title: 'Strategy Consultant', content: 'Partnering with leadership to define digital roadmaps, market entry, and transformation strategies.', bgColor: '#fff7b6' },
                        { title: 'Tech Development', content: 'End-to-end development of websites, apps, and systems built for performance, security, and scale.', bgColor: '#aef1c8' },
                        { title: 'Customer Experience', content: 'Designing seamless, personalized experiences that convert users and strengthen brand loyalty.', bgColor: '#c6ddff' },
                        { title: 'Acquisition & Retention', content: 'Driving user growth and engagement through data-backed marketing and retention strategies.', bgColor: '#dfdbff' },
                        { title: 'Data Analysis', content: 'Turning user data into actionable insights for smarter decisions and continuous optimization.', bgColor: '#ffe0de' },
                    ].map((item, index) => (
                        <>
                            <div className={`h-full transition-all p-0 duration-500 ease-in-out hover:shadow-2xl  hover:z-30 overflow-hidden border-[1px] border-l-0 border-[#e9bebe] ${toggleServicesClicked ? '' : ''} ${openService === index ? 'w-full openService' : 'relative z-10 '} ${openService !== null ? 'w-0 p-3 allService' : 'w-full hover:scale-105'}`} style={{ background: item.bgColor }} key={index}>
                                <div key={index} className={`flex justify-center items-center w-full transition-all p-0 duration-500 ease-in-out cursor-pointer  ${openService === index ? 'h-10' : 'h-full p-6 '} ${isLeftPanelOpen?'break-all':''}`} onClick={() => toggleServices(item.title.toLowerCase().replace(" ", ''), index)}>
                                    <div className="flex justify-center items-center flex-row gap-3 text-center">
                                        {item.title}
                                        {openService !== null &&
                                            <button className="cursor-pointer absolute top-2 right-4" onClick={() => toggleServices(item.title.toLowerCase().replace(" ", ''), index)}>X</button>
                                        }
                                        {/* <span>{openService === index ? '▲' : '▼'}</span> */}
                                    </div>
                                </div>
                                {openService === index &&
                                    <div className={` h-full overflow-hidden transition-all p-0 duration-500 ease-in-out w-full ${openService === index ? 'h-full ' : 'h-0 '} `} style={{ background: item.bgColor }} id={item.title.toLowerCase().replace(" ", '')} >
                                        <div className="relative p-6">
                                            {item.content} 
                                        </div>
                                    </div>
                                }
                            </div>
                        </>
                    ))}
                    {/* </div> */}
                    {/* <div>Strategy Consultant</div>
                    <div>Tech Development</div>
                    <div>Customer Experience</div>
                    <div>Acquisition & Retention</div>
                    <div>Data Analysis</div> */}
                </div>
            </div>
        </>
    )
}