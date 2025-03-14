
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Code, Bookmark, BarChart, ClipboardCheck, FileText } from "lucide-react";

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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

const PLATFORM_NAME = "Power Automate";
const PLATFORM_PATH = "/power-automate";

const PowerAutomate = () => {
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
      title: "Use conexões gerenciadas",
      description:
        "Utilize as conexões gerenciadas do Power Automate para manter as credenciais seguras e facilitar a manutenção.",
      type: "do" as const,
    },
    {
      id: "2",
      title: "Documente seus fluxos",
      description:
        "Adicione descrições claras aos fluxos e comentários nas etapas para facilitar a manutenção e colaboração.",
      type: "do" as const,
    },
    {
      id: "3",
      title: "Evite loops infinitos",
      description:
        "Sempre defina condições claras de saída para loops para evitar consumo excessivo de recursos e falhas.",
      type: "dont" as const,
    },
    {
      id: "4",
      title: "Utilize soluções para organização",
      description:
        "Agrupe fluxos relacionados em soluções para melhor organização e facilidade de exportação/importação.",
      type: "tip" as const,
    },
    {
      id: "5",
      title: "Implemente tratamento de erros",
      description:
        "Utilize ações de scope com configuração de tratamento de erros para tornar seus fluxos mais robustos.",
      type: "tip" as const,
    },
    {
      id: "6",
      title: "Evite fórmulas complexas",
      description:
        "Para expressões complexas, divida a lógica em várias etapas para facilitar a depuração e manutenção.",
      type: "dont" as const,
    },
  ];

  const templates = [
    {
      id: "1",
      title: "Aprovação de Documentos",
      description:
        "Fluxo de aprovação de documentos com notificações por email e registro em SharePoint.",
      category: "Aprovações",
      complexity: "Baixa",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Consolidação de Dados",
      description:
        "Extrai dados de múltiplas fontes, consolida e gera relatórios automaticamente.",
      category: "Dados",
      complexity: "Média",
      image: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Notificações de SLA",
      description:
        "Monitora SLAs em Service Now e envia alertas quando prazos estão próximos do vencimento.",
      category: "Notificações",
      complexity: "Média",
      image: "/placeholder.svg",
    },
    {
      id: "4",
      title: "Onboarding de Clientes",
      description:
        "Automatiza o processo de cadastro de novos clientes em múltiplos sistemas.",
      category: "Processos",
      complexity: "Alta",
      image: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Pesquisa de Satisfação",
      description:
        "Envia pesquisas de satisfação após interações e consolida respostas em dashboard.",
      category: "Feedback",
      complexity: "Baixa",
      image: "/placeholder.svg",
    },
    {
      id: "6",
      title: "Backup de Dados",
      description:
        "Realiza backup automático de dados críticos em intervalos regulares com registro de logs.",
      category: "Segurança",
      complexity: "Média",
      image: "/placeholder.svg",
    },
  ];

  const useCases = [
    {
      title: "Integração entre Sistemas",
      description:
        "Necessidade de integrar dados entre sistemas internos sem desenvolvimento de APIs customizadas.",
      icon: <Zap className="h-6 w-6" />,
      solution:
        "Fluxos de Power Automate utilizando conectores prontos para sincronizar dados entre sistemas.",
      platformPath: PLATFORM_PATH,
      delay: 0,
    },
    {
      title: "Automação de Aprovações",
      description:
        "Processo manual de aprovação de documentos e requisições causando atrasos operacionais.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      solution:
        "Fluxo de aprovação automatizado com notificações e registro de auditoria em SharePoint.",
      platformPath: PLATFORM_PATH,
      delay: 1,
    },
    {
      title: "Processamento de Emails",
      description:
        "Volume alto de emails que precisam ser categorizados e processados conforme regras de negócio.",
      icon: <FileText className="h-6 w-6" />,
      solution:
        "Fluxo automatizado para processar emails, extrair dados relevantes e encaminhar para tratamento adequado.",
      platformPath: PLATFORM_PATH,
      delay: 2,
    },
    {
      title: "Alertas de Monitoramento",
      description:
        "Necessidade de monitorar indicadores de negócio e enviar alertas quando limites são ultrapassados.",
      icon: <BarChart className="h-6 w-6" />,
      solution:
        "Sistema de monitoramento que verifica dados periodicamente e envia alertas via múltiplos canais.",
      platformPath: PLATFORM_PATH,
      delay: 3,
    },
  ];

  const apis = [
    {
      title: "Connector API",
      description:
        "API para criar e gerenciar conectores personalizados para o Power Automate.",
      endpoint: "/v1/connectors",
      authType: "OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Flow Management API",
      description:
        "API para criar, modificar e gerenciar fluxos programaticamente.",
      endpoint: "/v2/flows",
      authType: "API Key",
      docsUrl: "#",
    },
    {
      title: "Approvals API",
      description:
        "API para integrar com o sistema de aprovações do Power Automate.",
      endpoint: "/v1/approvals",
      authType: "OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Business Process Flows API",
      description:
        "API para gerenciar fluxos de processo de negócio no Power Automate.",
      endpoint: "/v1/businessprocessflows",
      authType: "OAuth 2.0",
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
                <div className="bg-gradient-to-r from-[#0066FF] to-[#2B88D8] w-12 h-12 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
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
                Plataforma de automação de processos da Microsoft para criar
                fluxos automatizados entre aplicativos e serviços. Permite
                automatizar fluxos de trabalho repetitivos sem necessidade de
                codificação avançada.
              </motion.p>
            </div>

            <PlatformTabs
              basePath={PLATFORM_PATH}
              tabs={tabs}
              className="mb-8"
            />

            <div className="py-8">
              <TabsContent value="overview" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-semibold mb-4">
                        O que é o Power Automate?
                      </h2>
                      <div className="prose max-w-none mb-8">
                        <p>
                          Power Automate (anteriormente conhecido como Microsoft
                          Flow) é uma plataforma de automação de processos de
                          negócios que permite aos usuários criar fluxos de
                          trabalho automatizados entre diferentes aplicativos e
                          serviços. Com uma interface intuitiva de arrastar e
                          soltar, é possível automatizar tarefas repetitivas sem
                          necessidade de conhecimento profundo de programação.
                        </p>
                        <p>
                          A plataforma oferece centenas de conectores
                          pré-construídos para serviços Microsoft e de
                          terceiros, permitindo integrações rápidas com
                          sistemas como Office 365, SharePoint, Teams, SQL
                          Server, Salesforce, e muitos outros.
                        </p>
                      </div>

                      <h2 className="text-2xl font-semibold mb-4">
                        Como utilizamos no Bradesco
                      </h2>
                      <div className="prose max-w-none mb-8">
                        <p>
                          No Bradesco, o Power Automate é utilizado como uma
                          ferramenta estratégica para automatização de processos
                          internos, especialmente aqueles relacionados ao
                          ambiente Microsoft 365. A plataforma tem sido
                          fundamental para melhorar a eficiência operacional em
                          diversas áreas.
                        </p>
                        <p>
                          A squad Low Code Hub desenvolveu uma série de
                          templates, conectores customizados e boas práticas
                          para garantir que as automações criadas sejam seguras,
                          escaláveis e alinhadas às políticas de governança do
                          banco. Também oferecemos suporte técnico e
                          treinamentos regulares para capacitar os
                          colaboradores.
                        </p>
                      </div>

                      <h2 className="text-2xl font-semibold mb-4">
                        Principais recursos
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <Zap className="h-5 w-5 text-bradesco-red" />
                              Fluxos automatizados
                            </h3>
                            <p className="text-gray-600">
                              Crie automações baseadas em triggers de sistemas
                              ou executadas em intervalos regulares.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <Code className="h-5 w-5 text-bradesco-red" />
                              UI Flows (RPA)
                            </h3>
                            <p className="text-gray-600">
                              Automatize interações com interfaces de usuário de
                              aplicações desktop ou web.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <ClipboardCheck className="h-5 w-5 text-bradesco-red" />
                              Aprovações
                            </h3>
                            <p className="text-gray-600">
                              Sistema de aprovações integrado para automatizar
                              processos de decisão.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <BarChart className="h-5 w-5 text-bradesco-red" />
                              Conectores premium
                            </h3>
                            <p className="text-gray-600">
                              Acesso a conectores avançados para integrações com
                              sistemas corporativos.
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
                              Portal Power Automate
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
                              Solicitação de Licença
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-2 text-bradesco-red hover:underline"
                            >
                              <Bookmark className="h-4 w-4" />
                              Biblioteca de Conectores
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-2 text-bradesco-red hover:underline"
                            >
                              <Bookmark className="h-4 w-4" />
                              Calendário de Treinamentos
                            </a>
                          </li>
                        </ul>

                        <div className="mt-8 bg-bradesco-red text-white p-4 rounded-lg">
                          <h4 className="font-medium mb-2">
                            Precisa de ajuda?
                          </h4>
                          <p className="text-sm mb-4 text-white/90">
                            Nossa equipe está disponível para auxiliar no
                            desenvolvimento de fluxos e resolver dúvidas
                            técnicas.
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
              </TabsContent>

              <TabsContent value="use-cases" className="mt-0">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Casos de Uso
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Conheça alguns exemplos de como o Power Automate tem sido
                    utilizado para resolver desafios reais no Bradesco.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {useCases.map((useCase, index) => (
                      <UseCaseCard key={index} {...useCase} />
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-12">
                  <h3 className="text-xl font-semibold mb-4">
                    Está com uma necessidade parecida?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Se você identifica uma necessidade similar em sua área,
                    podemos ajudar com nossas soluções de automação.
                    Converse com nossa equipe ou explore nossos produtos:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/product/satisfaction-survey"
                      className="bg-white border border-gray-200 hover:border-bradesco-red hover:shadow-md transition-all px-4 py-2 rounded-lg text-bradesco-red font-medium"
                    >
                      Formulário de Pesquisa
                    </a>
                    <a
                      href="/product/platform-calculator"
                      className="bg-white border border-gray-200 hover:border-bradesco-red hover:shadow-md transition-all px-4 py-2 rounded-lg text-bradesco-red font-medium"
                    >
                      Calculadora de Plataformas
                    </a>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="templates" className="mt-0">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Templates Prontos
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Acelere o desenvolvimento de suas automações com nossos
                    templates pré-configurados para o Power Automate.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {templates.map((template) => (
                      <TemplateCard key={template.id} {...template} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="best-practices" className="mt-0">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Boas Práticas
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Recomendações para desenvolvimento eficiente e seguro de
                    fluxos no Power Automate.
                  </p>

                  <BestPractices practices={bestPractices} />
                </div>
              </TabsContent>

              <TabsContent value="apis" className="mt-0">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    APIs Disponíveis
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Integre programaticamente com o Power Automate usando estas
                    APIs REST.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {apis.map((api, index) => (
                      <ApiCard key={index} {...api} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default PowerAutomate;
