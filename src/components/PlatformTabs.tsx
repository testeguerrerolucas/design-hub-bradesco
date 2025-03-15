
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
  const [activeTab, setActiveTab] = useState(() => {
    // Check if the current path matches any tab path
    const pathMatch = tabs.find((tab) => {
      const tabFullPath = tab.path === "" ? basePath : `${basePath}/${tab.path}`;
      return currentPath === tabFullPath;
    });
    return pathMatch?.id || tabs[0].id;
  });

  // Update active tab when route changes
  useEffect(() => {
    console.log("Current path in PlatformTabs:", currentPath);
    console.log("Base path in PlatformTabs:", basePath);
    
    // Check if the current path matches any tab path
    const pathMatch = tabs.find((tab) => {
      const tabFullPath = tab.path === "" ? basePath : `${basePath}/${tab.path}`;
      console.log("Comparing with tab path:", tabFullPath);
      return currentPath === tabFullPath;
    });
    
    if (pathMatch) {
      console.log("Found matching tab:", pathMatch.id);
      setActiveTab(pathMatch.id);
    } else {
      console.log("No matching tab found, defaulting to first tab:", tabs[0].id);
      setActiveTab(tabs[0].id);
    }
  }, [currentPath, basePath, tabs]);

  const handleTabChange = (value: string) => {
    console.log("Tab change requested to:", value);
    const selectedTab = tabs.find((tab) => tab.id === value);
    
    if (selectedTab) {
      const newPath = selectedTab.path === "" ? basePath : `${basePath}/${selectedTab.path}`;
      console.log("Navigating to:", newPath);
      navigate(newPath);
    }
  };

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
      
      {/* The TabsContent elements are rendered in the respective page components */}
    </Tabs>
  );
};

export default PlatformTabs;
