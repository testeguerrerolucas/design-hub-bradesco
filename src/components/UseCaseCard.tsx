
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  solution: string;
  platformPath: string;
  delay?: number;
}

const UseCaseCard = ({
  title,
  description,
  icon,
  solution,
  platformPath,
  delay = 0
}: UseCaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-subtle border border-gray-200 hover:shadow-lg hover:border-bradesco-red/20 transition-all group"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-bradesco-red/10 w-12 h-12 rounded-full flex items-center justify-center text-bradesco-red">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-sm font-medium text-gray-500 mb-2">Solução recomendada:</p>
          <p className="text-bradesco-red font-semibold">{solution}</p>
        </div>
        <Link 
          to={platformPath} 
          className="flex items-center text-bradesco-red font-medium mt-4 group-hover:underline"
        >
          Ver detalhes
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};

export default UseCaseCard;
