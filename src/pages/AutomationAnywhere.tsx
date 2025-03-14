
import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Code, Bookmark, BarChart, ClipboardCheck, FileText, Bot } from "lucide-react";

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
import { TabsContent } from "../components/ui/tabs";

const PLATFORM_NAME = "Automation Anywhere";
const PLATFORM_PATH = "/automation-anywhere";

const AutomationAnywhere = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Visão Geral", path: "" },
    { id: "use-cases", label: "Casos de Uso", path: "use-cases" },
    { id: "templates", label: "Templates", path: "templates" },
    { id: "best-practices", label: "Boas Práticas", path: "best-practices" },
    { id: "apis", label: "APIs", path: "apis" },
  ];

  // Make sure to add proper types for the templates to match the TemplateCardProps
  const templates = [
    {
      id: "1",
      title: "Extração de Dados ERP",
      description:
        "Bot para extração automatizada de relatórios de ERP e envio para stakeholders.",
      category: "Extração de Dados",
      complexity: "Média",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Onboarding de Funcionários",
      description:
        "Automatização do processo de cadastro de novos funcionários em múltiplos sistemas.",
      category: "Recursos Humanos",
      complexity: "Alta",
      image: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Conciliação Bancária",
      description:
        "Bot para conciliação automática de transações bancárias e geração de relatórios de exceção.",
      category: "Financeiro",
      complexity: "Alta",
      image: "/placeholder.svg",
    },
    {
      id: "4",
      title: "Processamento de Faturas",
      description:
        "Automatização da leitura, validação e registro de faturas de fornecedores.",
      category: "Contas a Pagar",
      complexity: "Média",
      image: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Atualização de Clientes",
      description:
        "Bot para atualização de cadastros de clientes entre sistemas distintos.",
      category: "CRM",
      complexity: "Baixa",
      image: "/placeholder.svg",
    },
    {
      id: "6",
      title: "Geração de Relatórios",
      description:
        "Automatização da coleta de dados, geração e distribuição de relatórios gerenciais.",
      category: "Business Intelligence",
      complexity: "Média",
      image: "/placeholder.svg",
    },
  ];

  // Update the bestPractices array with proper type cast
  const bestPractices = [
    {
      id: "1",
      title: "Planeje antes de automatizar",
      description:
        "Documente o processo manual detalhadamente antes de iniciar a automação para garantir que todas as variações sejam consideradas.",
      type: "do" as const,
    },
    {
      id: "2",
      title: "Use credenciais seguras",
      description:
        "Utilize o Credential Vault para armazenar credenciais e tokens de acesso de forma segura e encriptada.",
      type: "do" as const,
    },
    {
      id: "3",
      title: "Evite dependências de UI",
      description:
        "Sempre que possível, use APIs e métodos de acesso direto aos dados em vez de depender da interface do usuário, que pode mudar.",
      type: "dont" as const,
    },
    {
      id: "4",
      title: "Implemente tratamento de exceções",
      description:
        "Adicione tratamento robusto de exceções para lidar com casos inesperados e garantir que os bots possam se recuperar de falhas.",
      type: "tip" as const,
    },
    {
      id: "5",
      title: "Use logs detalhados",
      description:
        "Implemente logs detalhados em cada etapa crítica para facilitar o diagnóstico de problemas em produção.",
      type: "tip" as const,
    },
    {
      id: "6",
      title: "Evite loops infinitos",
      description:
        "Sempre defina condições de saída claras para loops e adicione contadores de segurança para evitar execuções infinitas.",
      type: "dont" as const,
    },
  ];

  const useCases = [
    {
      title: "Automação de Processos de Backoffice",
      description:
        "Necessidade de automatizar processos repetitivos que envolvem múltiplos sistemas legados sem APIs.",
      icon: <Bot className="h-6 w-6" />,
      solution:
        "Bot RPA que interage com interfaces de usuário para executar o processo completo sem intervenção humana.",
      platformPath: PLATFORM_PATH,
      delay: 0,
    },
    {
      title: "Processamento de Documentos",
      description:
        "Volume alto de documentos físicos ou digitais que precisam ser processados e dados extraídos.",
      icon: <FileText className="h-6 w-6" />,
      solution:
        "Bot com capacidades de OCR para ler documentos e extrair dados relevantes para sistemas corporativos.",
      platformPath: PLATFORM_PATH,
      delay: 1,
    },
    {
      title: "Reconciliação Financeira",
      description:
        "Processo manual demorado de reconciliação de transações entre múltiplos sistemas financeiros.",
      icon: <BarChart className="h-6 w-6" />,
      solution:
        "Automação end-to-end que extrai, compara e reconcilia dados financeiros, gerando relatórios de exceção.",
      platformPath: PLATFORM_PATH,
      delay: 2,
    },
    {
      title: "Integração de Sistemas",
      description:
        "Necessidade de integrar sistemas legados sem APIs com aplicações modernas.",
      icon: <Code className="h-6 w-6" />,
      solution:
        "Bots que atuam como camada de integração, conectando sistemas antigos aos novos através da interface do usuário.",
      platformPath: PLATFORM_PATH,
      delay: 3,
    },
  ];

  const apis = [
    {
      title: "Control Room API",
      description:
        "API para gerenciar e orquestrar bots programaticamente na plataforma Automation Anywhere.",
      endpoint: "/v3/control-room",
      authType: "OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Bot Insights API",
      description:
        "API para acessar métricas e análises de performance dos bots em execução.",
      endpoint: "/v1/bot-insights",
      authType: "API Key",
      docsUrl: "#",
    },
    {
      title: "Credential Vault API",
      description:
        "API para gerenciar credenciais e logins usados pelos bots de forma segura.",
      endpoint: "/v2/credentials",
      authType: "OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Bot Deploy API",
      description:
        "API para implantar bots em ambientes de produção através de CI/CD.",
      endpoint: "/v1/deploy",
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
                <div className="bg-gradient-to-r from-[#00B4E5] to-[#00D8B1] w-12 h-12 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
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
                Plataforma líder de automação robótica de processos (RPA) que permite automatizar tarefas repetitivas e baseadas em regras usando bots de software.
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
                        O que é o Automation Anywhere?
                      </h2>
                      <div className="prose max-w-none mb-8">
                        <p>
                          Automation Anywhere é uma plataforma de Automação Robótica de Processos (RPA) que utiliza bots de software para automatizar tarefas repetitivas e baseadas em regras. A plataforma combina RPA tradicional com inteligência artificial e análise de dados para oferecer uma solução completa de automação inteligente.
                        </p>
                        <p>
                          Com sua arquitetura baseada em nuvem, a plataforma permite criar, implantar e gerenciar bots que podem interagir com qualquer aplicação ou sistema, imitando ações humanas como clicar, digitar, copiar e colar, ler e escrever em bancos de dados, e muito mais.
                        </p>
                      </div>

                      <h2 className="text-2xl font-semibold mb-4">
                        Como utilizamos no Bradesco
                      </h2>
                      <div className="prose max-w-none mb-8">
                        <p>
                          No Bradesco, o Automation Anywhere é utilizado como uma solução estratégica para automação de processos de negócio complexos que envolvem múltiplos sistemas e etapas manuais repetitivas. A plataforma tem sido fundamental para aumentar a eficiência operacional, reduzir erros e liberar colaboradores para atividades de maior valor.
                        </p>
                        <p>
                          A squad Low Code Hub desenvolve e mantém bots para diversas áreas do banco, seguindo um rigoroso processo de desenvolvimento, testes e implantação. Também oferecemos suporte técnico, treinamentos e consultoria para garantir o máximo aproveitamento da plataforma.
                        </p>
                      </div>

                      <h2 className="text-2xl font-semibold mb-4">
                        Principais recursos
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <Bot className="h-5 w-5 text-bradesco-red" />
                              RPA Tradicional
                            </h3>
                            <p className="text-gray-600">
                              Automação de tarefas baseadas em regras com interação com interfaces de usuário.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <Code className="h-5 w-5 text-bradesco-red" />
                              IQ Bot
                            </h3>
                            <p className="text-gray-600">
                              Bots com capacidade de processamento cognitivo para extrair dados de documentos não estruturados.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <ClipboardCheck className="h-5 w-5 text-bradesco-red" />
                              Bot Insights
                            </h3>
                            <p className="text-gray-600">
                              Análises avançadas e métricas de desempenho dos bots em execução.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <BarChart className="h-5 w-5 text-bradesco-red" />
                              Process Discovery
                            </h3>
                            <p className="text-gray-600">
                              Identificação automática de processos candidatos à automação.
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
                              Control Room
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
                              Solicitação de Bot
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center gap-2 text-bradesco-red hover:underline"
                            >
                              <Bookmark className="h-4 w-4" />
                              Biblioteca de Componentes
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
                            desenvolvimento de bots e resolver dúvidas
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
                    Conheça alguns exemplos de como o Automation Anywhere tem sido
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
                    templates pré-configurados para o Automation Anywhere.
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
                    bots no Automation Anywhere.
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
                    Integre programaticamente com o Automation Anywhere usando estas
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

export default AutomationAnywhere;
