import { useState } from "react";
import { FaReact } from "react-icons/fa";
import TabSwitch from "./TabSwitch.tsx";
import Checkbox from "./CustomListCheckbox.tsx";
import UploadTemplate from "./UploadTemplate.tsx";
import { motion } from "framer-motion";

const ConfigPanel = () => {
  const [uploadTab, setUploadTab] = useState("upload");
  const [uploadTemplate, setUploadTemplate] = useState("Default");

  return (
    <div className="flex flex-col bg-white mt-8 2xl:mr-4 sm:mr-[25%] mr-0 mb-8 2xl:ml-8 sm:ml-[25%] min-w-[50%] ml-0 p-6 rounded-none sm:rounded-2xl shadow-lg hover:shadow-xl transition-all">
      {/* Header section */}
      <div className="w-full rounded-2xl bg-primary flex justify-center">
        <div className="p-[2vw]">
          {/* Animated React icon */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 360 }}
            className="h-[10vh] flex items-center justify-center"
          >
            <FaReact className="w-full h-full" color="white" />
          </motion.div>
        </div>
      </div>

      {/* Radio buttons for selecting template for dropdown lists content */}
      <Checkbox onChange={(state) => setUploadTemplate(state)} />

      {/* Upload template for dropdown lists content */}
      <UploadTemplate isVisible={uploadTemplate} />

      {/* Switch to change form for entering new data or edit existing one accordingly */}
      <TabSwitch
        uploadTab={uploadTab}
        onSelectTab={(TabName) => setUploadTab(TabName)}
      />
    </div>
  );
};

export default ConfigPanel;
