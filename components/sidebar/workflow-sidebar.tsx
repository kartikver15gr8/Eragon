"use client";
import { RAW_ICONS } from "@/utils/raw-icons";
import SVGIcon from "@/lib/svg-icon";
import Image from "next/image";
import applogotwo from "@/public/app-logo.svg";
import OptionLabel from "./option-label";
import { BottomOptionsTile } from "./bottom-options-tile";
import { WorkflowTab } from "./workflow-tab";
import { useState } from "react";
import { usePathname } from "next/navigation";

const TabActive = "rounded  bg-[#0F1111] border border-[#2E3035] ";

interface CollapsedState {
  teams: boolean;
  workspace: boolean;
}

export default function WorkflowSidebar() {
  const [workspaceCollapsed, setWorkspaceCollapsed] = useState(false);
  const [featuresCollapsed, setFeaturesCollapsed] = useState(false);

  const pathname = usePathname();

  const toggleWorkspaceCollapse = () => {
    setWorkspaceCollapsed(!workspaceCollapsed);
  };

  const toggleFeatureCollapse = () => {
    setFeaturesCollapsed(!featuresCollapsed);
  };

  const [collapsed, setCollapsed] = useState<CollapsedState>({
    teams: false,
    workspace: false,
  });

  const toggleSection = (section: keyof CollapsedState) => {
    setCollapsed((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-64 min-h-screen hidden md:block px-2 border-r relative">
      <WorkflowTab />

      <div className="mt-4 flex flex-col gap-y-2">
        <div className="flex items-center rounded-md h-8 px-2 gap-x-[5px] cursor-pointer hover:bg-[#C7C7C7] transition-all duration-200 ">
          <SVGIcon className="flex w-4" svgString={RAW_ICONS.Search} />
          <p>Search</p>
        </div>
        <div className="flex items-center rounded-md h-8 px-2 gap-x-[5px] cursor-pointer hover:bg-[#C7C7C7] transition-all duration-200 ">
          <SVGIcon className="flex w-4" svgString={RAW_ICONS.Settings} />
          <p>Settings</p>
        </div>
      </div>
      <div className=" mt-4">
        {/* Workspace Content */}

        <p className="text-sm mb-2 text-[#484848]">Workspace</p>
        <OptionLabel
          optName="Dashboard"
          svg={RAW_ICONS.Archive}
          redirect="/workflow/dashboard"
        />
        <OptionLabel
          optName="Companies"
          svg={RAW_ICONS.Company}
          redirect="/workflow/companies"
        />
        <OptionLabel
          optName="Opportunities"
          svg={RAW_ICONS.Target}
          redirect="/workflow/opportunities"
        />
        <OptionLabel optName="Tasks" svg={RAW_ICONS.Issue} />
        <OptionLabel optName="Notes" svg={RAW_ICONS.Docs} />
      </div>
    </div>
  );
}
