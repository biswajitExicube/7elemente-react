import type { Route } from "./+types/home";
import LeftPanel from '../components/LeftPanel/LeftPanel'
import RightPanel from "~/components/RightPanel/RightPanel";
import { useEffect, useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "7elemente IT Solutions – 7elemente IT Solutions" },
    { name: "description", content: "YOU FOCUS ON YOUR BUSINESS GOALS,WE WILL BE YOUR IT WING !! 7-Elemente IT solutions is a company solely dedicated to facilitate developing and supporting web applications and services for Social Initiatives and SME worldwide. We are driven to rationalise our thoughts creatively to provide timely and cost-effective solutions that facilitate our" },
  ];
}

export default function Home() {

  const [leftPanelOpen, setLeftPanelOpen] = useState<number | null>(null);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

  const leftPanelData: any = [
    { title: 'Retail & Manufacturing', content: 'Empowering retail and manufacturing brands with tech solutions that streamline operations and boost revenue.', bgColor: '#56cbd4' },
    { title: 'Healthcare', content: 'Delivering secure and user-friendly platforms that improve digital healthcare experiences for providers and patients.', bgColor: '#ffb58e' },
    { title: 'Education', content: 'Creating interactive, scalable digital tools for modern learning, administration, and student engagement.', bgColor: '#ff6688' },
]

  const leftPanelClickedIndexGet = (value: number) => {
    console.log("leftPanelClickedIndexGet value leftPanelOpen", value)
    setIsLeftPanelOpen(false);
    setLeftPanelOpen(value);
    if (value !== null) {
      setIsLeftPanelOpen(true);
    }
  }

  const rightPanelClicked = (value: number) => {
    console.log("rightPanelClicked value leftPanelOpen", value)
    
  }

  useEffect(() => {
    console.log("leftPanelOpen", isLeftPanelOpen)
  }, [isLeftPanelOpen])

  return (
    <div className="flex justify-start items-center flex-row relative transition-all duration-500 ease-in-out  h-[90vh]  overflow-hidden ">
      <div className={`${leftPanelOpen !== null ? 'basis-12/12' : 'relative basis-2/12'}  h-full  transition-all duration-500 ease-in-out bg-white overflow-hidden`}>
        <LeftPanel leftPanelClickedIndex={leftPanelClickedIndexGet} leftPanelOpenValue={leftPanelOpen} isLeftPanelOpen={isLeftPanelOpen} />
      </div>
      <div className={`flex justify-start items-start flex-col ${leftPanelOpen !== null ? 'basis-0/12 w-0' : ' relative px-0 basis-10/12'}  h-full transition-all duration-500 ease-in-out self-stretch relative`}>
        <RightPanel isRightPanelClicked={rightPanelClicked} isLeftPanelOpen={isLeftPanelOpen} leftPanelData={leftPanelData} leftPanelOpenValue={leftPanelOpen} />
      </div>
    </div>
  )
}
