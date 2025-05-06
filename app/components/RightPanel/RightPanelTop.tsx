import { useEffect, useState } from "react";

interface Props{
    rightPanelTopClickedIndex?: any,
    isLeftPanelOpen: boolean,
    leftPanelOpenValue?: number | null
}

export default function RightPanelTop({rightPanelTopClickedIndex = () => {},isLeftPanelOpen=false,leftPanelOpenValue = null}:Props) {
    const [open, setOpen] = useState(null);
    
    const toggle = (name: string, index: any) => {
        setOpen(open === index ? null : index);
        const element = document.getElementById(name);
        console.log("element", element)
        if (element)
            if (element.style.maxHeight && element.style.maxHeight !== '0px') {
                element.style.maxHeight = '0px';
            } else {
                element.style.maxHeight = element.scrollHeight + 'px';
            }
    };
    
    useEffect(() => {
        // console.log("rightPanelTopClickedIndexGet rightPanelTopClickedIndex", "leftPanelOpen isLeftPanelOpen",isLeftPanelOpen)
        rightPanelTopClickedIndex(open)
        },[open,isLeftPanelOpen])
    return (
        <>
            <div className="h-full self-stretch">
                {/* <div>RightPanel</div> */}
                <div className={`h-full flex overflow-hidden justify-start items-start ${leftPanelOpenValue!==null?'flex-row ':'flex-col'} self-stretch transition-all duration-500 ease-in-out`}>
                    {[
                        { title: 'Websites', subTitle:'(small-to-medium businesses)', content: 'We design fast, accessible, and scalable websites that elevate digital presence and user engagement.', bgColor: '#ffe0de' },
                        { title: 'Mobile Apps & Web Applications',subTitle:'(larger scale, custom builds)', content: 'We build secure, high-performance web and mobile applications tailored to complex business workflows.', bgColor: '#56cbd4' },
                        { title: 'eCommerce Platforms',subTitle:'(B2C & B2B)', content: 'From storefront to checkout, we create complete e-commerce ecosystems that drive sales and scale with your growth.', bgColor: '#ff6688' },
                    ].map((item, index) => (
                        <>
                            <div className={` w-full transition-all duration-500 ease-in-out relative cursor-pointer border-[1px] border-l-0 border-[#938d8d] last:border-b-0 ${open === index || leftPanelOpenValue !==null ? 'h-full p-6' : 'p-10'}  ${open !== null ? '' : 'h-[100%] '}`} style={{ background: item.bgColor }} onClick={() => toggle(item.title.toLowerCase().replace(" ", ''), index)} key={index}>
                                <div key={index} className={`w-full`}>
                                    <div

                                        className=""
                                    >
                                        {item.title}
                                        <span>{open === index ? '▲' : '▼'}</span>
                                    </div>
                                    <div>{item.subTitle}</div>
                                </div>
                                <div className={`max-h-0 overflow-hidden transition-all duration-500 ease-in-out w-full ${open === index ? 'h-full p-10 absolute top-20 left-0 ' : 'h-0 relative'} `} style={{ background: item.bgColor }} id={item.title.toLowerCase().replace(" ", '')}>{item.content}</div>
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
                    </div> */}
                </div>

               
            </div>
        </>
    )
}