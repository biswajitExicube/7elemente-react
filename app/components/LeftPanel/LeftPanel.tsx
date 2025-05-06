import { useEffect, useState } from "react";
import RightPanelTop from "../RightPanel/RightPanelTop";
import RightPanelBottom from "../RightPanel/RightPanelBottom";

interface Props {
    leftPanelClickedIndex: any,
    leftPanelOpenValue: number | null,
    isLeftPanelOpen: boolean;
}

export default function LeftPanel({ isLeftPanelOpen = false, leftPanelClickedIndex = () => { }, leftPanelOpenValue = null }: Props) {
    // const {leftPanelClickedIndex} = props;
    const [open, setOpen] = useState(null);

    const toggle = (name: string, index: any) => {
        setOpen(open === index ? null : index);
        const element = document.getElementById(name);
        if (element)
            if (element.style.width && element.style.width !== '0px') {
                element.style.width = '0px';
            } else {
                // element.style.width = '100%';
            }

    };

    useEffect(() => {
        leftPanelClickedIndex(open)
    }, [open])

    return (
        <div className={`h-[100vh]`}>
            {/* <div>LeftPanel</div> */}
            {/* <div className="flex justify-start items-center flex-row h-[87vh]">
                <div className="rotate-[-90deg]">
                    Panel 1
                    </div>
                <div className="rotate-[-90deg]">Panel 2</div>
                <div className="rotate-[-90deg]">Panel 3</div>
            </div> */}
            <div className="flex justify-start items-start flex-row h-full relative">
                {[
                    { title: 'Retail & Manufacturing', content: 'Empowering retail and manufacturing brands with tech solutions that streamline operations and boost revenue.', bgColor: '#56cbd4' },
                    { title: 'Healthcare', content: 'Delivering secure and user-friendly platforms that improve digital healthcare experiences for providers and patients.', bgColor: '#ffb58e' },
                    { title: 'Education', content: 'Creating interactive, scalable digital tools for modern learning, administration, and student engagement.', bgColor: '#ff6688' },
                ].map((item, index) => (
                    <>
                        <div className={`flex justify-start items-center h-full  relative cursor-pointer overflow-hidden transition-all duration-500 ease-in-out border-[1px] border-l-0 border-[#ccc] ${open && open === index ? '' : ''} ${open !== null ? 'w-30' : 'w-[33.333%] '}`} style={{ background: item.bgColor }} onClick={() => toggle(item.title.toLowerCase().replace(" ", ''), index)} key={index}>
                            <div key={index} className={`rotate-[-90deg] w-full absolute left-0`}>
                                <button

                                    className="w-[200px] cursor-pointer"
                                >
                                    {item.title}
                                    <span>{open === index ? '▲' : '▼'}</span>
                                </button>
                            </div>
                        </div>
                        {/* {open === index && */}
                        <div className={` overflow-hidden transition-all duration-500 ease-in-out  h-[100vh] ${open === index ? 'w-full ' : 'w-0 p-0'} `} style={{ background: item.bgColor }} id={item.title.toLowerCase().replace(" ", '')}>
                            {/* <div className={`flex justify-start overflow-hidden items-start flex-col text-center w-full self-stretch transition-all duration-700 ease-in-out ${leftPanelOpenValue !== null ? 'h-[10%]' : 'h-[50%]'} `}>
                                <RightPanelTop isLeftPanelOpen={isLeftPanelOpen} leftPanelOpenValue={leftPanelOpenValue} />
                            </div>
                            <div className="h-[70%] p-3 border-[1px] border-[#938d8d]"> */}
                            {item.content} 
                            {/* </div> */}
                            {/* <div className={`flex justify-start items-start flex-row gap-2 overflow-hidden w-full transition-all duration-700 ease-in-out  ${leftPanelOpenValue !== null ? 'h-[10%]' : 'h-[50%]'} `}>
                                <RightPanelBottom  isLeftPanelOpen={isLeftPanelOpen} leftPanelOpenValue={leftPanelOpenValue} />
                            </div> */}
                        </div>
                        {/* }  */}

                        {/* <div className={`flex justify-start items-center h-full w-10 relative cursor-pointer ${open === index?'':''}`} style={{ background: item.bgColor }} onClick={() => toggle(index)} key={index}>
                            <div className={`rotate-[-90deg] w-full absolute left-0 `}>
                                <button

                                    className="w-[200px] cursor-pointer"
                                >
                                    {item.title}
                                    <span>{open === index ? '▲' : '▼'}</span>
                                </button>
                            </div>
                        </div>
                        {open === index && (
                            <div className={` w-full h-full p-10 border-l-2 border-amber-300`} style={{ background: item.bgColor }} id={index}>{item.content}</div>
                        )} */}
                    </>
                ))}
            </div>
        </div>
    )
}