
import { GlassCard } from "./GlassCard";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface Practice {
  title: string;
  description: string;
}

interface BestPracticesProps {
  practices: Practice[];
  title?: string;
  icon?: ReactNode;
}

const BestPractices = ({ practices, title = "Boas Práticas", icon }: BestPracticesProps) => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
          >
            Desenvolvimento
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold mb-6 flex items-center justify-center gap-3"
          >
            {icon && <span>{icon}</span>}
            {title}
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {practices.map((practice, index) => (
            <GlassCard key={index} delay={index} className="hover:border-bradesco-red/20 transition-colors">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-bradesco-red" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
