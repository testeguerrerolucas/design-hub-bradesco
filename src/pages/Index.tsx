
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PlatformCard from "../components/PlatformCard";
import Feature from "../components/Feature";
import PageTransition from "../components/PageTransition";
import { Cpu, Zap, Lock, Code, Users, GitMerge, Bot, Cloud, Settings } from "lucide-react";

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
        title="Low Code Hub da Engenharia de Plataforma"
        subtitle="Automatizando e facilitando o trabalho dos desenvolvedores da tribo de Engenharia de Plataforma do Bradesco"
        primaryButtonText="Conheça nossas plataformas"
        primaryButtonLink="/power-automate"
        secondaryButtonText="Sobre a squad"
        secondaryButtonLink="/"
      />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
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
              Automatizando processos e simplificando o desenvolvimento
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              A squad Low Code Hub é responsável por automatizar processos, facilitar o trabalho 
              dos desenvolvedores e cuidar das principais plataformas de Low Code da organização.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PlatformCard
              title="Power Automate"
              description="Crie fluxos automatizados entre aplicativos e serviços para sincronizar arquivos, receber notificações e coletar dados."
              icon={<Zap className="h-6 w-6" />}
              to="/power-automate"
            />
            <PlatformCard
              title="Automation Anywhere"
              description="Plataforma de automação robótica de processos (RPA) que usa bots de software para automatizar tarefas repetitivas."
              icon={<Bot className="h-6 w-6" />}
              to="/automation-anywhere"
            />
            <PlatformCard
              title="ServiceNow"
              description="Plataforma cloud de gestão de serviços que automatiza fluxos de trabalho de TI e melhora a experiência operacional."
              icon={<Cloud className="h-6 w-6" />}
              to="/service-now"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
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
                O que fazemos
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
                Nossa squad é especializada em oferecer soluções que diminuem a carga operacional
                dos desenvolvedores, automatizando processos repetitivos e oferecendo ferramentas
                que facilitam o desenvolvimento de aplicações.
              </motion.p>

              <div className="space-y-2">
                <Feature
                  icon={<Cpu className="h-5 w-5 text-bradesco-red" />}
                  title="Automação de Processos"
                  description="Identificamos e automatizamos processos repetitivos, liberando tempo dos desenvolvedores para tarefas de maior valor."
                  delay={0}
                />
                <Feature
                  icon={<Code className="h-5 w-5 text-bradesco-red" />}
                  title="Soluções Low Code"
                  description="Desenvolvemos e mantemos soluções utilizando plataformas low code que aceleram a entrega de valor."
                  delay={1}
                />
                <Feature
                  icon={<GitMerge className="h-5 w-5 text-bradesco-red" />}
                  title="Integração Contínua"
                  description="Criamos pipelines e ferramentas que facilitam a integração e entrega contínua de software."
                  delay={2}
                />
                <Feature
                  icon={<Lock className="h-5 w-5 text-bradesco-red" />}
                  title="Segurança e Compliance"
                  description="Garantimos que nossas automações sigam os mais rígidos padrões de segurança do Bradesco."
                  delay={3}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-bradesco-red/20 to-bradesco-darkred/20 blur-xl opacity-70" />
              <div className="relative bg-white rounded-2xl p-8 shadow-elevated">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-subtle transition-shadow">
                    <Users className="h-8 w-8 text-bradesco-red mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Squad Dedicada</h3>
                    <p className="text-gray-600 text-sm">
                      Time multidisciplinar focado em soluções de automação
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-subtle transition-shadow">
                    <Settings className="h-8 w-8 text-bradesco-red mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Plataformas Low Code</h3>
                    <p className="text-gray-600 text-sm">
                      Especialistas em Power Automate, Automation Anywhere e ServiceNow
                    </p>
                  </div>
                  
                  <div className="col-span-2 bg-bradesco-red rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Aumente a produtividade da sua equipe</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Converse com nosso time para identificar oportunidades de automação
                    </p>
                    <button className="bg-white text-bradesco-red px-4 py-2 rounded-lg text-sm font-medium">
                      Entre em contato
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent" />
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-bradesco-red/5 blur-3xl" />
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-bradesco-red/5 blur-3xl" />
        
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
            >
              Nossas Plataformas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              Conheça as tecnologias que utilizamos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Trabalhamos com as principais plataformas de automação do mercado, oferecendo
              soluções completas para as necessidades da tribo de Engenharia de Plataforma.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div
              id="platform-1"
              className={`animate-on-scroll ${
                isIntersecting["platform-1"] ? "animate-visible" : ""
              }`}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-subtle h-full hover:shadow-elevated transition-all">
                <div className="bg-gradient-to-r from-[#0066FF] to-[#2B88D8] w-16 h-16 rounded-2xl mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Power Automate</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Automação de processos</li>
                  <li>• Integração com Microsoft 365</li>
                  <li>• Templates prontos para uso</li>
                  <li>• Fluxos personalizados</li>
                </ul>
              </div>
            </div>

            <div
              id="platform-2"
              className={`animate-on-scroll ${
                isIntersecting["platform-2"] ? "animate-visible" : ""
              }`}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-subtle h-full hover:shadow-elevated transition-all">
                <div className="bg-gradient-to-r from-[#00B4E5] to-[#00D8B1] w-16 h-16 rounded-2xl mb-6 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Automation Anywhere</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Automação robótica</li>
                  <li>• Bots inteligentes</li>
                  <li>• Processos complexos</li>
                  <li>• Analytics avançado</li>
                </ul>
              </div>
            </div>

            <div
              id="platform-3"
              className={`animate-on-scroll ${
                isIntersecting["platform-3"] ? "animate-visible" : ""
              }`}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-subtle h-full hover:shadow-elevated transition-all">
                <div className="bg-gradient-to-r from-[#81B5A1] to-[#69B0CB] w-16 h-16 rounded-2xl mb-6 flex items-center justify-center">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">ServiceNow</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Gestão de serviços</li>
                  <li>• Workflows automatizados</li>
                  <li>• Integrações</li>
                  <li>• Base de conhecimento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
};

export default Index;
