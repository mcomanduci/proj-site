import CpuIcon from "./helper/CpuIcon";
import IconBox from "./helper/IconBox";
import TimeIcon from "./helper/TimeIcon";
import ShieldIcon from "./helper/ShieldIcon";
import FolderIcon from "./helper/FolderIcon";

function Description() {
  return (
    <div className="bg-[#1B1D20]">
      <section className="max-w-[1200px] mx-auto py-32 px-10 grid grid-cols-2 gap-y-20 gap-x-10 relative">
        <IconBox icon={<CpuIcon />} />
        <IconBox icon={<ShieldIcon />} />
        <div className="h-[460px] w-0.5 bg-[#9932f8] opacity-20 top-32 left-[600px] absolute"></div>
        <IconBox icon={<TimeIcon />} />
        <IconBox icon={<FolderIcon />} />
      </section>
    </div>
  );
}

export default Description;
