
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Code, Bookmark, BarChart, ClipboardCheck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

  const bestPractices = [
    {
      id: "1",
      title: "Utilize Control Room",
      description:
        "Sempre utilize o Control Room para gerenciar e monitorar seus bots, garantindo segurança e governança.",
      type: "do",
    },
    {
      id: "2",
      title: "Teste em ambientes isolados",
      description:
        "Antes de implementar em produção, teste seus bots em ambientes de desenvolvimento e homologação.",
      type: "do",
    },
    {
      id: "3",
      title: "Evite hardcoding de credenciais",
      description:
        "Nunca inclua credenciais diretamente nos scripts. Use variáveis de credenciais seguras do Automation Anywhere.",
      type: "dont",
    },
    {
      id: "4",
      title: "Documente seus bots",
      description:
        "Documente adequadamente cada bot com sua finalidade, dependências e fluxo de trabalho para facilitar a manutenção.",
      type: "tip",
    },
    {
      id: "5",
      title: "Quebre em subtarefas",
      description:
        "Divida automações complexas em múltiplos bots menores para facilitar a manutenção e o reuso.",
      type: "tip",
    },
    {
      id: "6",
      title: "Evite dependências de UI",
      description:
        "Quando possível, use APIs ou automação baseada em texto em vez de automação baseada em UI que pode quebrar com mudanças visuais.",
      type: "dont",
    },
  ];

  const templates = [
    {
      id: "1",
      title: "Processamento de Faturas",
      description:
        "Template para automação do processamento de faturas com extração de dados via OCR e integração com sistemas financeiros.",
      category: "Financeiro",
      complexity: "Média",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Onboarding de Funcionários",
      description:
        "Automatiza o processo de onboarding criando acessos, enviando emails de boas-vindas e configurando equipamentos.",
      category: "RH",
      complexity: "Alta",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Relatórios Diários",
      description:
        "Gera e distribui relatórios diários a partir de múltiplas fontes de dados para stakeholders.",
      category: "BI",
      complexity: "Baixa",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "4",
      title: "Conciliação Bancária",
      description:
        "Automatiza a conciliação de extratos bancários com o sistema financeiro interno.",
      category: "Financeiro",
      complexity: "Alta",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Validação de Compliance",
      description:
        "Verifica conformidade de documentos e processos de acordo com políticas internas e regulatórias.",
      category: "Compliance",
      complexity: "Média",
      imageUrl: "/placeholder.svg",
    },
    {
      id: "6",
      title: "Monitoramento de Sistemas",
      description:
        "Monitora a saúde e disponibilidade de sistemas críticos, gerando alertas em caso de problemas.",
      category: "TI",
      complexity: "Média",
      imageUrl: "/placeholder.svg",
    },
  ];

  const useCases = [
    {
      title: "Automação de Relatórios Financeiros",
      description:
        "Necessidade de gerar relatórios financeiros consolidados diariamente a partir de múltiplos sistemas legados.",
      icon: <BarChart className="h-6 w-6" />,
      solution:
        "Bot de AA que se conecta aos sistemas, extrai dados, consolida e gera relatórios em formato padrão.",
      platformPath: PLATFORM_PATH,
      delay: 0,
    },
    {
      title: "Processamento de Notas Fiscais",
      description:
        "Processamento manual de grande volume de notas fiscais, inserindo dados em sistemas financeiros.",
      icon: <ClipboardCheck className="h-6 w-6" />,
      solution:
        "Automatização da extração de dados com IQ Bot e integração com sistemas financeiros.",
      platformPath: PLATFORM_PATH,
      delay: 1,
    },
    {
      title: "Atualização de Dados em Sistemas Legados",
      description:
        "Necessidade de manter dados atualizados entre sistemas modernos e legados sem integração API.",
      icon: <Bot className="h-6 w-6" />,
      solution:
        "Bots para sincronização automática de dados via interface de usuário dos sistemas legados.",
      platformPath: PLATFORM_PATH,
      delay: 2,
    },
    {
      title: "Validação de Documentos de Clientes",
      description:
        "Validação manual de documentos enviados por clientes contra regras de compliance.",
      icon: <Code className="h-6 w-6" />,
      solution:
        "Bot com capacidade de OCR para extrair informações e validar contra regras pré-definidas.",
      platformPath: PLATFORM_PATH,
      delay: 3,
    },
  ];

  const apis = [
    {
      title: "Control Room API",
      description:
        "API REST para interagir com o Control Room, permitindo gerenciar bots, schedules e dispositivos programaticamente.",
      endpoint: "/v1/authentication",
      authType: "OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Bot Insight API",
      description:
        "API para acessar dados analíticos gerados por bots, permitindo integração com ferramentas de BI externas.",
      endpoint: "/v2/botinsight/data",
      authType: "API Key",
      docsUrl: "#",
    },
    {
      title: "Workload Management API",
      description:
        "API para gerenciar filas de trabalho, permitindo adicionar itens à fila e monitorar seu processamento.",
      endpoint: "/v3/wlm/queues",
      authType: "OAuth 2.0",
      docsUrl: "#",
    },
    {
      title: "Repository Manager API",
      description:
        "API para gerenciar o repositório de bots, permitindo criar, modificar e excluir bots programaticamente.",
      endpoint: "/v1/repository",
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
                Plataforma de automação robótica de processos (RPA) que usa
                bots de software para emular e integrar as ações de um humano
                interagindo em sistemas digitais para executar diversos
                processos de negócios.
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
                          Automation Anywhere é uma plataforma de Automação
                          Robótica de Processos (RPA) empresarial que permite
                          às organizações automatizar processos de negócios
                          repetitivos e baseados em regras. A plataforma utiliza
                          bots de software para emular as ações de um usuário
                          humano, interagindo com interfaces digitais de
                          aplicações para executar tarefas.
                        </p>
                        <p>
                          A plataforma é composta por vários componentes,
                          incluindo o Control Room para gerenciamento e
                          orquestração de bots, o Bot Creator para
                          desenvolvimento, e o Bot Runner para execução das
                          automações. Também possui recursos avançados como IQ
                          Bot para processamento cognitivo e Bot Insight para
                          analytics.
                        </p>
                      </div>

                      <h2 className="text-2xl font-semibold mb-4">
                        Como utilizamos no Bradesco
                      </h2>
                      <div className="prose max-w-none mb-8">
                        <p>
                          No Bradesco, o Automation Anywhere é utilizado para
                          automatizar processos operacionais críticos,
                          especialmente aqueles que envolvem sistemas legados
                          sem APIs disponíveis, processamento de documentos e
                          extração de dados.
                        </p>
                        <p>
                          A squad Low Code Hub atua como centro de excelência
                          para a plataforma, oferecendo suporte técnico,
                          governança, melhores práticas e desenvolvimento de
                          automações estratégicas. Trabalhamos em conjunto com
                          várias áreas do banco para identificar oportunidades
                          de automação e implementar soluções que aumentam a
                          eficiência operacional.
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
                              RPA avançado
                            </h3>
                            <p className="text-gray-600">
                              Automação de processos complexos com capacidade
                              de interagir com múltiplas aplicações.
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
                              Processamento cognitivo para extração de dados de
                              documentos não estruturados usando AI/ML.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <BarChart className="h-5 w-5 text-bradesco-red" />
                              Bot Insight
                            </h3>
                            <p className="text-gray-600">
                              Analytics integrado que fornece insights sobre
                              processos automatizados e ROI.
                            </p>
                          </div>
                        </GlassCard>
                        <GlassCard>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 flex items-center gap-2">
                              <ClipboardCheck className="h-5 w-5 text-bradesco-red" />
                              Workload Management
                            </h3>
                            <p className="text-gray-600">
                              Gerenciamento de filas de trabalho para
                              processamento em alto volume com escalabilidade.
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
                              Portal Automation Anywhere
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
                            desenvolvimento de automações e resolver dúvidas
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
                    Conheça alguns exemplos de como o Automation Anywhere tem
                    sido utilizado para resolver desafios reais no Bradesco.
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
                    automações no Automation Anywhere.
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
                    Integre programaticamente com o Automation Anywhere usando
                    estas APIs REST.
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
