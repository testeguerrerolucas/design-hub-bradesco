
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  downloadUrl?: string;
  previewUrl?: string;
  delay?: number;
}

const TemplateCard = ({
  title,
  description,
  image,
  downloadUrl,
  previewUrl,
  delay = 0,
}: TemplateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <div className="flex gap-2 mt-auto">
            {previewUrl && (
              <Button variant="outline" className="flex-1" asChild>
                <a href={previewUrl} target="_blank" rel="noopener noreferrer">
                  <Eye size={16} /> Visualizar
                </a>
              </Button>
            )}
            {downloadUrl && (
              <Button className="flex-1 bg-bradesco-red hover:bg-bradesco-darkred" asChild>
                <a href={downloadUrl} download>
                  <Download size={16} /> Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TemplateCard;
