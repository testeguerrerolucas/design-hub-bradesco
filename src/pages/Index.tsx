
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import PageTransition from "../components/PageTransition";
import { Users, Code, GitMerge, Server } from "lucide-react";

const Index = () => {
  const [isIntersecting, setIsIntersecting] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <PageTransition>
      <Header />
      <Hero
        title="Low Code Hub - Equipe de Orquestração"
        subtitle="Conheça a equipe de orquestração de processos da Engenharia de Plataforma do Bradesco"
        primaryButtonText="Conheça nossos projetos"
        primaryButtonLink="#projetos"
        secondaryButtonText="Nossa equipe"
        secondaryButtonLink="#equipe"
      />

      <section id="equipe" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
            >
              Nossa Equipe
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Conheça os integrantes da nossa squad
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Nossa equipe é formada por profissionais dedicados que trabalham na orquestração
              de processos para a Engenharia de Plataforma do Bradesco.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Elson Soares"
              role="Product Owner"
              description="Responsável por definir a direção estratégica e prioridades da squad"
              image="/placeholder.svg"
            />
            <TeamMemberCard
              name="Viviane Gaspar"
              role="Scrum Master"
              description="Facilita os processos ágeis e remove impedimentos para o time"
              image="/placeholder.svg"
            />
            <TeamMemberCard
              name="Bruno"
              role="Desenvolvedor"
              description="Especialista em automação e desenvolvimento de soluções"
              image="/placeholder.svg"
            />
            <TeamMemberCard
              name="Ana"
              role="Desenvolvedora"
              description="Foco em integração e orquestração de sistemas"
              image="/placeholder.svg"
            />
            <TeamMemberCard
              name="Pedro"
              role="Desenvolvedor"
              description="Expertise em fluxos de trabalho e processos automatizados"
              image="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
            >
              Nossos Projetos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Projetos realizados pela equipe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Conheça alguns dos projetos de orquestração que nossa equipe desenvolveu para
              o Bradesco.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Orquestração de CI/CD"
              description="Sistema de integração e entrega contínua para a Engenharia de Plataforma"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="Automação de Processos Internos"
              description="Fluxos de automação para processos administrativos da equipe"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="Central de Gerenciamento"
              description="Dashboard unificado para monitoramento de processos e sistemas"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="Integração de APIs"
              description="Sistema de orquestração de APIs para serviços internos"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="Monitoramento de SLAs"
              description="Ferramenta para acompanhamento de acordos de nível de serviço"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="Pipeline de Deployment"
              description="Sistema automatizado para implantação de aplicações"
              image="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
              >
                Nossa Missão
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-semibold mb-6"
              >
                Como apoiamos a Engenharia de Plataforma
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 mb-8"
              >
                Nossa squad é especializada em orquestrar processos que facilitam o trabalho dos
                desenvolvedores, automatizando fluxos e oferecendo soluções que melhoram
                a produtividade da equipe de Engenharia de Plataforma do Bradesco.
              </motion.p>

              <div className="space-y-2">
                <Feature
                  icon={<Server className="h-5 w-5 text-bradesco-red" />}
                  title="Orquestração de Processos"
                  description="Identificamos e orquestramos processos operacionais, liberando tempo dos desenvolvedores para tarefas de maior valor."
                  delay={0}
                />
                <Feature
                  icon={<Code className="h-5 w-5 text-bradesco-red" />}
                  title="Automação de Fluxos"
                  description="Desenvolvemos soluções que automatizam fluxos de trabalho e aceleram a entrega de valor."
                  delay={1}
                />
                <Feature
                  icon={<GitMerge className="h-5 w-5 text-bradesco-red" />}
                  title="Integração Contínua"
                  description="Criamos pipelines e ferramentas que facilitam a integração e entrega contínua de software."
                  delay={2}
                />
                <Feature
                  icon={<Users className="h-5 w-5 text-bradesco-red" />}
                  title="Colaboração entre Equipes"
                  description="Facilitamos a comunicação e colaboração entre as diferentes equipes da Engenharia de Plataforma."
                  delay={3}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-bradesco-red/20 to-bradesco-darkred/20 blur-xl opacity-70" />
              <div className="relative bg-white rounded-2xl p-8 shadow-elevated">
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-subtle transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">Nossa Visão</h3>
                    <p className="text-gray-600 text-sm">
                      Ser referência em orquestração de processos para a Engenharia de Plataforma,
                      facilitando o trabalho dos desenvolvedores e aumentando a produtividade do time.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-subtle transition-shadow">
                    <h3 className="text-lg font-semibold mb-2">Nossos Valores</h3>
                    <p className="text-gray-600 text-sm">
                      Colaboração, Inovação, Comprometimento, Qualidade e Foco no Usuário são os
                      valores que guiam nosso trabalho diário.
                    </p>
                  </div>
                  
                  <div className="bg-bradesco-red rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Entre em contato</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Converse com nosso time para conhecer mais sobre nosso trabalho
                    </p>
                    <button className="bg-white text-bradesco-red px-4 py-2 rounded-lg text-sm font-medium">
                      Fale Conosco
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMemberCard = ({ name, role, description, image }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-elevated transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-bradesco-red/20">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-bradesco-red font-medium mb-3">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Index;
