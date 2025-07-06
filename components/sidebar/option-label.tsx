import SVGIcon from "@/lib/svg-icon";
import { usePathname } from "next/navigation";
import Link from "next/link";

type OptionLabelProps = {
  svg: string;
  optName: string;
  className?: string;
  redirect?: string;
};

export default function OptionLabel({
  svg,
  optName,
  className = "",
  redirect,
}: OptionLabelProps) {
  const pathname = usePathname();

  const content = (
    <>
      <div>
        <SVGIcon className="flex w-5" svgString={svg} />
      </div>
      <p>{optName}</p>
    </>
  );

  const baseClasses =
    "text-[#484848] cursor-pointer h-9 flex px-4 rounded items-center gap-x-2 hover:bg-[#eae9e9] transition-all duration-200";
  const activeClass =
    pathname.split("/")[2] === optName.toLowerCase()
      ? "bg-[#E5E5E5]"
      : "bg-inherit";

  const combinedClasses = `${className} ${baseClasses} ${activeClass}`;

  // Conditional rendering
  if (redirect) {
    return (
      <Link href={redirect} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return <div className={combinedClasses}>{content}</div>;
}
