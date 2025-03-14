
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

interface ApiCardProps {
  title: string;
  description: string;
  endpoint?: string;
  docsUrl?: string;
  delay?: number;
}

const ApiCard = ({
  title,
  description,
  endpoint,
  docsUrl,
  delay = 0,
}: ApiCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card className="p-6 border border-gray-200 hover:border-bradesco-red/20 hover:shadow-md transition-all">
        <div className="flex items-start gap-4">
          <div className="bg-bradesco-red/10 p-3 rounded-lg">
            <Code className="h-6 w-6 text-bradesco-red" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
            {endpoint && (
              <div className="bg-gray-50 p-3 rounded-md mb-4 overflow-x-auto">
                <code className="text-sm text-gray-800 font-mono">{endpoint}</code>
              </div>
            )}
            
            {docsUrl && (
              <Button variant="outline" size="sm" className="mt-2" asChild>
                <a href={docsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink size={14} /> Documentação
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ApiCard;
