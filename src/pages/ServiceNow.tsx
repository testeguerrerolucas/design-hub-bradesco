
import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Code, Bookmark, BarChart, ClipboardCheck, FileText } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlatformTabs from "../components/PlatformTabs";
import PlatformBreadcrumb from "../components/PlatformBreadcrumb";
import BestPractices from "../components/BestPractices";
import GlassCard from "../components/GlassCard";
import UseCaseCard from "../components/UseCaseCard";
import ApiCard from "../components/ApiCard";
import TemplateCard from "../components/TemplateCard";
import PageTransition from "../components/PageTransition";

const PLATFORM_NAME = "ServiceNow";
const PLATFORM_PATH = "/service-now";

const ServiceNow = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Visão Geral", path: "" },
    { id: "use-cases", label: "Casos de Uso", path: "use-cases" },
    { id: "templates", label: "Templates", path: "templates" },
    { id: "best-practices", label: "Boas Práticas", path: "best-practices" },
    { id: "apis", label: "APIs", path: "apis" },
  ];

  const bestPractices = [
    {
      id: "1",
      title: "Utilize Business Rules",
      description:
        "Crie business rules para automatizar processos e garantir a consistência dos dados em toda a plataforma.",
      type: "do" as const,
    },
    {
      id: "2",
      title: "Implemente UI Policies",
      description:
        "Use UI Policies para controlar dinamicamente a visibilidade, obrigatoriedade e valores de campos nos formulários.",
      type: "do" as const,
    },
    {
      id: "3",
      title: "Evite JavaScript Client Scripts pesados",
      description:
        "Scripts complexos no cliente podem degradar a performance. Prefira logic-server side quando possível.",
      type: "dont" as const,
    },
    {
      id: "4",
      title: "Utilize OOB features primeiro",
      description:
        "Antes de customizar, verifique se há funcionalidades nativas (Out of Box) que atendam à necessidade.",
      type: "tip" as const,
    },
    {
      id: "5",
      title: "Implemente Data Policies",
      description:
        "Use Data Policies para garantir a integridade dos dados inseridos em tabelas específicas.",
      type: "tip" as const,
    },
    {
      id: "6",
      title: "Evite queries complexas em background scripts",
      description:
        "Otimize suas consultas e evite operações pesadas em scripts de background para não impactar a performance.",
      type: "dont" as const,
    },
  ];

  const templates = [
    {
      id: "1",
      title: "Catálogo de Serviços de TI",
      description:
        "Modelo pronto de catálogo de serviços de TI com fluxos de aprovação e SLAs configurados.",
      category: "ITSM",
      complexity: "Média",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Gestão de Incidentes",
      description:
        "Template para gestão de incidentes com classificação automática e notificações integradas.",
      category: "ITSM",
      complexity: "Média",
      image: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Knowledge Base Avançada",
      description:
        "Base de conhecimento com workflow de aprovação, categorização e feedback dos usuários.",
      category: "Knowledge",
      complexity: "Baixa",
      image: "/placeholder.svg",
    },
    {
      id: "4",
      title: "Dashboard de Performance",
      description:
        "Dashboard interativo para acompanhamento de métricas de desempenho de serviços e SLAs.",
      category: "Analytics",
      complexity: "Alta",
      image: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Onboarding de Colaboradores",
      description:
        "Fluxo de trabalho para onboarding de novos colaboradores com integração multi-departamental.",
      category: "HR",
      complexity: "Alta",
      image: "/placeholder.svg",
    },
    {
      id: "6",
      title: "Gestão de Mudanças",
      description:
        "Template para gerenciamento de mudanças com avaliação de impacto e aprovações configuradas.",
      category: "Change Management",
      complexity: "Média",
      image: "/placeholder.svg",
    },
  ];

  const useCases = [
    {
      title: "Central de Serviços Unificada",
      description:
        "Necessidade de unificar o atendimento de demandas de TI, RH e Facilities em um único portal.",
      icon: <Cloud className="h-6 w-6" />,
      solution:
        "Portal ServiceNow customizado para integrar requisições de múltiplos departamentos, com workflows específicos para cada área.",
      platformPath: PLATFORM_PATH,
      delay: 0,
    },
    {
      title: "Gerenciamento de Incidentes",
      description:
        "Dificuldade em gerenciar incidentes críticos e garantir respostas dentro dos SLAs estabelecidos.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      solution:
        "Implementação do módulo de Incident Management com alertas automáticos e escalação baseada em SLAs.",
      platformPath: PLATFORM_PATH,
      delay: 1,
    },
    {
      title: "Base de Conhecimento Técnico",
      description:
        "Conhecimento técnico disperso em diversos sistemas e documentos, dificultando o acesso pela equipe.",
      icon: <FileText className="h-6 w-6" />,
      solution:
        "Knowledge Base centralizada no ServiceNow com taxonomia personalizada, workflows de aprovação e integração com incidentes.",
      platformPath: PLATFORM_PATH,
      delay: 2,
    },
    {
      title: "Governança de TI",
      description:
        "Controle insuficiente sobre ativos de TI e dificuldade em manter compliance com políticas internas.",
      icon: <BarChart className="h-6 w-6" />,
      solution:
        "Implementação dos módulos de CMDB e Compliance para mapeamento de ativos, relacionamentos e conformidade.",
      platformPath: PLATFORM_PATH,
      delay: 3,
    },
  ];

  const apis = [
    {
      title: "Table API",
      description:
        "API para operações CRUD em qualquer tabela do ServiceNow.",
      endpoint: "/api/now/table/{tableName}",
      authType: "Basic/OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Import Set API",
      description:
        "API para importação em massa de dados para o ServiceNow.",
      endpoint: "/api/now/import",
      authType: "Basic/OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Attachment API",
      description:
        "API para gerenciar anexos de registros no ServiceNow.",
      endpoint: "/api/now/attachment",
      authType: "Basic/OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Service Catalog API",
      description:
        "API para interagir com itens e pedidos do catálogo de serviços.",
      endpoint: "/api/sn_sc/servicecatalog",
      authType: "Basic/OAuth 2.0",
      docsUrl: "#",
    },
  ];

  return (
    <PageTransition>
      <Header />
      <main className="pt-20 min-h-screen">
        <section className="py-10 px-6 bg-gray-50">
          <div className="container mx-auto">
            <PlatformBreadcrumb
              platform={PLATFORM_NAME}
              platformPath={PLATFORM_PATH}
            />
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="bg-gradient-to-r from-[#81B5A1] to-[#69B0CB] w-12 h-12 rounded-full flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold">
                  {PLATFORM_NAME}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-3xl"
              >
                Plataforma cloud de gestão de serviços que automatiza fluxos de trabalho de TI, melhora a experiência operacional e integra diversos processos empresariais em uma única interface.
              </motion.p>
            </div>

            <PlatformTabs
              basePath={PLATFORM_PATH}
              tabs={tabs}
              className="mb-8"
            />

            <div className="py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4">
                      O que é o ServiceNow?
                    </h2>
                    <div className="prose max-w-none mb-8">
                      <p>
                        ServiceNow é uma plataforma de nuvem que automatiza fluxos de trabalho de TI e empresariais. 
                        Foi projetada para gerenciar serviços digitais em toda a empresa, conectando pessoas, funções e sistemas.
                        A plataforma unifica e simplifica o gerenciamento de serviços, operações de TI, desenvolvimento de software, 
                        segurança, recursos humanos e outros processos de negócios.
                      </p>
                      <p>
                        Com uma abordagem low-code/no-code, o ServiceNow permite que as empresas criem aplicativos personalizados
                        rapidamente para atender às suas necessidades específicas, conectando-se a sistemas legados e modernos
                        através de integrações robustas.
                      </p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">
                      Como utilizamos no Bradesco
                    </h2>
                    <div className="prose max-w-none mb-8">
                      <p>
                        No Bradesco, o ServiceNow é utilizado como plataforma central para gerenciamento de serviços de TI,
                        orquestração de processos corporativos e automação de workflows de diversas áreas. A plataforma
                        se tornou um hub essencial para unificar solicitações, incidentes e processos em uma única interface.
                      </p>
                      <p>
                        A squad Low Code Hub fornece suporte especializado, desenvolvendo aplicações customizadas, 
                        integrações com sistemas internos e automações que ampliam o valor da plataforma. Também mantemos
                        uma biblioteca de componentes reutilizáveis e dashboards analíticos para facilitar a gestão.
                      </p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">
                      Principais recursos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <GlassCard>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Cloud className="h-5 w-5 text-bradesco-red" />
                            IT Service Management
                          </h3>
                          <p className="text-gray-600">
                            Gerenciamento de incidentes, problemas, mudanças e ativos de TI em uma plataforma unificada.
                          </p>
                        </div>
                      </GlassCard>
                      <GlassCard>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Code className="h-5 w-5 text-bradesco-red" />
                            App Engine
                          </h3>
                          <p className="text-gray-600">
                            Desenvolvimento low-code de aplicações personalizadas para necessidades específicas de negócio.
                          </p>
                        </div>
                      </GlassCard>
                      <GlassCard>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <ClipboardCheck className="h-5 w-5 text-bradesco-red" />
                            Automação de Workflows
                          </h3>
                          <p className="text-gray-600">
                            Automação de processos empresariais com fluxos de trabalho configuráveis e integrações.
                          </p>
                        </div>
                      </GlassCard>
                      <GlassCard>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <BarChart className="h-5 w-5 text-bradesco-red" />
                            Analytics & Dashboards
                          </h3>
                          <p className="text-gray-600">
                            Visualização de dados em tempo real e métricas de performance para tomada de decisões.
                          </p>
                        </div>
                      </GlassCard>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-subtle border border-gray-100">
                      <h3 className="text-xl font-semibold mb-4">
                        Links Rápidos
                      </h3>
                      <ul className="space-y-3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-bradesco-red hover:underline"
                          >
                            <Bookmark className="h-4 w-4" />
                            Portal ServiceNow
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-bradesco-red hover:underline"
                          >
                            <Bookmark className="h-4 w-4" />
                            Documentação Técnica
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-bradesco-red hover:underline"
                          >
                            <Bookmark className="h-4 w-4" />
                            Solicitação de Acesso
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-bradesco-red hover:underline"
                          >
                            <Bookmark className="h-4 w-4" />
                            Knowledge Base
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-bradesco-red hover:underline"
                          >
                            <Bookmark className="h-4 w-4" />
                            Treinamentos
                          </a>
                        </li>
                      </ul>

                      <div className="mt-8 bg-bradesco-red text-white p-4 rounded-lg">
                        <h4 className="font-medium mb-2">
                          Precisa de suporte?
                        </h4>
                        <p className="text-sm mb-4 text-white/90">
                          Nossa equipe está disponível para auxiliar com implementações, integrações e solução de problemas.
                        </p>
                        <a
                          href="#"
                          className="bg-white text-bradesco-red px-3 py-1.5 rounded text-sm font-medium inline-block"
                        >
                          Fale Conosco
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                  Casos de Uso
                </h2>
                <p className="text-gray-600 mb-8">
                  Conheça alguns exemplos de como o ServiceNow tem sido
                  utilizado para resolver desafios reais no Bradesco.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {useCases.map((useCase, index) => (
                    <UseCaseCard key={index} {...useCase} />
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                  Templates Prontos
                </h2>
                <p className="text-gray-600 mb-8">
                  Acelere o desenvolvimento de suas soluções com nossos
                  templates pré-configurados para o ServiceNow.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates.map((template) => (
                    <TemplateCard key={template.id} {...template} />
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                  Boas Práticas
                </h2>
                <p className="text-gray-600 mb-8">
                  Recomendações para desenvolvimento eficiente e seguro de
                  aplicações e workflows no ServiceNow.
                </p>

                <BestPractices practices={bestPractices} />
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">
                  APIs Disponíveis
                </h2>
                <p className="text-gray-600 mb-8">
                  Integre programaticamente com o ServiceNow usando estas
                  APIs REST.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {apis.map((api, index) => (
                    <ApiCard key={index} {...api} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default ServiceNow;
