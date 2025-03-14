
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface Tab {
  id: string;
  label: string;
  path: string;
}

interface PlatformTabsProps {
  basePath: string;
  tabs: Tab[];
  className?: string;
}

const PlatformTabs = ({ basePath, tabs, className }: PlatformTabsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  // Determine which tab is active
  const activeTab = tabs.find((tab) => 
    currentPath === `${basePath}/${tab.path}` || 
    (currentPath === basePath && tab.path === "")
  )?.id || tabs[0].id;

  const handleTabChange = (value: string) => {
    const selectedTab = tabs.find((tab) => tab.id === value);
    if (selectedTab) {
      if (selectedTab.path === "") {
        navigate(basePath);
      } else {
        navigate(`${basePath}/${selectedTab.path}`);
      }
    }
  };

  // Add console logging to debug navigation
  useEffect(() => {
    console.log("Current path:", currentPath);
    console.log("Base path:", basePath);
    console.log("Active tab:", activeTab);
  }, [currentPath, basePath, activeTab]);

  return (
    <Tabs 
      defaultValue={activeTab} 
      value={activeTab} 
      onValueChange={handleTabChange} 
      className={cn("w-full", className)}
    >
      <TabsList className="w-full max-w-3xl mx-auto bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.id} 
            value={tab.id}
            className="flex-1 data-[state=active]:bg-bradesco-red data-[state=active]:text-white"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default PlatformTabs;
