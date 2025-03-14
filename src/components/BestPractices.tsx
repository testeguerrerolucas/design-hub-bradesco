
import { Check, AlertCircle, Info } from "lucide-react";
import GlassCard from "./GlassCard";

interface BestPracticesProps {
  practices: {
    id: string;
    title: string;
    description: string;
    type: "do" | "dont" | "tip";
  }[];
}

const BestPractices = ({ practices }: BestPracticesProps) => {
  const getIcon = (type: "do" | "dont" | "tip") => {
    switch (type) {
      case "do":
        return <Check className="h-5 w-5 text-green-600" />;
      case "dont":
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "tip":
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getHeaderClass = (type: "do" | "dont" | "tip") => {
    switch (type) {
      case "do":
        return "bg-green-50 border-green-200";
      case "dont":
        return "bg-red-50 border-red-200";
      case "tip":
        return "bg-blue-50 border-blue-200";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {practices.map((practice) => (
        <GlassCard key={practice.id} className="h-full">
          <div
            className={`flex items-center gap-2 p-4 border-b ${getHeaderClass(
              practice.type
            )}`}
          >
            {getIcon(practice.type)}
            <h3 className="font-medium">{practice.title}</h3>
          </div>
          <div className="p-4">
            <p className="text-gray-600">{practice.description}</p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
};

export default BestPractices;
