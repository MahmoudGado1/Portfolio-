"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/MahmoudGado-Mern Stack.pdf";
    link.download = "MahmoudGado-Mern Stack.pdf";
    link.click();
  };
  return (
    <Button onClick={handleDownload} variant="outline" size="lg" className="uppercase flex items-center gap-2">
    <span>Download CV</span>
    <FiDownload className="text-xl"/>
  </Button>
  );
}

export default DownloadButton;
