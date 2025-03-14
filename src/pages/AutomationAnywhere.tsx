
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlatformTabs from "../components/PlatformTabs";
import PlatformBreadcrumb from "../components/PlatformBreadcrumb";
import Hero from "../components/Hero";
import { GlassCard } from "../components/GlassCard";
import Feature from "../components/Feature";
import { motion } from "framer-motion";
import {
  Bot,
  Code,
  FileCode,
  Clock,
  BarChart3,
  Database,
  Laptop,
  ShieldCheck,
  Brain,
  Settings,
  UserCheck,
  LineChart
} from "lucide-react";
import ApiCard from "../components/ApiCard";
import TemplateCard from "../components/TemplateCard";
import UseCaseCard from "../components/UseCaseCard";
import BestPractices from "../components/BestPractices";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "overview", label: "Visão Geral", path: "" },
  { id: "apis", label: "APIs", path: "apis" },
  { id: "templates", label: "Templates", path: "templates" },
  { id: "best-practices", label: "Boas Práticas", path: "best-practices" },
  { id: "use-cases", label: "Casos de Uso", path: "use-cases" },
];

const AutomationAnywhere = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    // Determine active section based on path
    const path = currentPath.split("/")[2] || "";
    const foundTab = tabs.find((tab) => tab.path === path);
    setActiveSection(foundTab?.id || "overview");
  }, [currentPath]);

  const renderContent = () => {
    switch (activeSection) {
      case "apis":
        return <AutomationAnywhereAPIs />;
      case "templates":
        return <AutomationAnywhereTemplates />;
      case "best-practices":
        return <AutomationAnywhereBestPractices />;
      case "use-cases":
        return <AutomationAnywhereUseCases />;
      default:
        return <AutomationAnywhereOverview />;
    }
  };

  return (
    <PageTransition>
      <Header />
      <Hero
        title="Automation Anywhere"
        subtitle="Automatize tarefas repetitivas utilizando robôs inteligentes com automação robótica de processos (RPA)"
        align="left"
        primaryButtonText="Explorar soluções"
        primaryButtonLink="/automation-anywhere/use-cases"
      />

      <div className="container mx-auto px-6 py-8">
        <PlatformBreadcrumb 
          platform="Automation Anywhere" 
          platformPath="/automation-anywhere"
          section={activeSection === "overview" ? undefined : tabs.find(t => t.id === activeSection)?.label}
        />
        
        <PlatformTabs basePath="/automation-anywhere" tabs={tabs} className="mb-12" />
        
        {renderContent()}
      </div>

      <Footer />
    </PageTransition>
  );
};

// Componentes para cada seção
const AutomationAnywhereOverview = () => {
  return (
    <div className="space-y-16">
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
            >
              Automação Robótica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              O que é o Automation Anywhere?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              O Automation Anywhere é uma plataforma de Automação Robótica de Processos (RPA) que utiliza 
              bots de software para automatizar tarefas repetitivas baseadas em regras. Com uma combinação 
              de RPA, inteligência artificial e análise de processos, a plataforma permite automatizar processos 
              de negócios completos.
            </motion.p>

            <div className="space-y-4">
              <Feature
                icon={<Bot className="h-5 w-5 text-bradesco-red" />}
                title="RPA Inteligente"
                description="Crie bots que automatizam tarefas repetitivas, simulando ações humanas em interfaces digitais."
                delay={0}
              />
              <Feature
                icon={<Brain className="h-5 w-5 text-bradesco-red" />}
                title="Automação Cognitiva"
                description="Utilize inteligência artificial para processar dados não estruturados e tomar decisões complexas."
                delay={1}
              />
              <Feature
                icon={<BarChart3 className="h-5 w-5 text-bradesco-red" />}
                title="Análise de Processos"
                description="Identifique oportunidades de automação com ferramentas de descoberta e análise de processos."
                delay={2}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#00B4E5]/20 to-[#00D8B1]/20 blur-xl opacity-70" />
            <div className="relative bg-white rounded-2xl p-8 shadow-elevated">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-[#00B4E5] to-[#00D8B1] rounded-xl p-6 text-white">
                  <Bot className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Transforme sua Operação</h3>
                  <p className="text-white/80 mb-4">
                    Reduza custos, minimize erros e aumente a eficiência operacional com automação robótica.
                  </p>
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#00B4E5]">
                    <a href="https://www.automationanywhere.com/" target="_blank" rel="noopener noreferrer">
                      Explorar plataforma
                    </a>
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-subtle transition-shadow">
                    <ShieldCheck className="h-6 w-6 text-bradesco-red mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Segurança Avançada</h3>
                    <p className="text-gray-600 text-sm">
                      Controles de acesso e criptografia de dados
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-subtle transition-shadow">
                    <LineChart className="h-6 w-6 text-bradesco-red mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Analytics em Tempo Real</h3>
                    <p className="text-gray-600 text-sm">
                      Monitore desempenho e ROI dos bots
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
          >
            Principais Recursos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Por que usar o Automation Anywhere?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard delay={0}>
            <Settings className="h-12 w-12 text-bradesco-red mb-6" />
            <h3 className="text-xl font-semibold mb-3">Fácil Configuração</h3>
            <p className="text-gray-600">
              Interface de arrastar e soltar que permite criar bots complexos sem necessidade de 
              codificação extensiva, acelerando o desenvolvimento.
            </p>
          </GlassCard>
          
          <GlassCard delay={1}>
            <Laptop className="h-12 w-12 text-bradesco-red mb-6" />
            <h3 className="text-xl font-semibold mb-3">Compatibilidade Universal</h3>
            <p className="text-gray-600">
              Funciona com praticamente qualquer aplicação, incluindo desktops, web, Citrix, SAP, 
              Oracle e sistemas legados sem APIs disponíveis.
            </p>
          </GlassCard>
          
          <GlassCard delay={2}>
            <UserCheck className="h-12 w-12 text-bradesco-red mb-6" />
            <h3 className="text-xl font-semibold mb-3">Escalabilidade</h3>
            <p className="text-gray-600">
              Implante e gerencie milhares de bots simultaneamente, permitindo automação em escala 
              empresarial com controle centralizado.
            </p>
          </GlassCard>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-wider bg-bradesco-red/10 text-bradesco-red px-3 py-1 rounded-full mb-4 inline-block"
          >
            Exemplos de Uso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Casos de Uso Populares
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard
            title="Extração de Dados"
            description="Precisa extrair dados de múltiplos sistemas ou documentos para consolidação?"
            icon={<Database className="h-6 w-6" />}
            solution="Utilize bots para extrair dados de sistemas legados, PDFs, emails e planilhas, consolidando-os em um único sistema."
            platformPath="/automation-anywhere/use-cases"
            delay={0}
          />
          
          <UseCaseCard
            title="Processamento de Transações"
            description="Seu time gasta muito tempo processando transações manualmente?"
            icon={<Clock className="h-6 w-6" />}
            solution="Implemente bots que processam transações 24/7, sem erros e muito mais rápido que operadores humanos."
            platformPath="/automation-anywhere/use-cases"
            delay={1}
          />
        </div>
      </section>
    </div>
  );
};

const AutomationAnywhereAPIs = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          APIs do Automation Anywhere
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600"
        >
          Integre seus sistemas e aplicações com o Automation Anywhere usando estas APIs
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApiCard
          title="Control Room API"
          description="Gerencie bots, agendamentos e implantações programaticamente usando a API REST do Control Room."
          endpoint="https://{seu-control-room}/v1/authentication"
          docsUrl="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-developer/aae-control-room-apis.html"
          delay={0}
        />
        
        <ApiCard
          title="Bot Insight API"
          description="Acesse dados de análise e métricas de desempenho dos seus bots automatizados."
          endpoint="https://{seu-control-room}/v2/botinsight/data"
          docsUrl="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/aae-architect-variables/bot-insight/bi-api-overview.html"
          delay={1}
        />
        
        <ApiCard
          title="Credential Vault API"
          description="Gerencie credenciais de forma segura para utilização em processos automatizados."
          docsUrl="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/control-room-api/credential-vault-api.html"
          delay={2}
        />
        
        <ApiCard
          title="Workload Management API"
          description="Distribua e balanceie cargas de trabalho entre bots disponíveis em sua infraestrutura."
          endpoint="https://{seu-control-room}/v3/wlm/queues"
          docsUrl="https://docs.automationanywhere.com/bundle/enterprise-v2019/page/enterprise/topics/aae-developer/cloud-api-workload.html"
          delay={3}
        />
        
        <ApiCard
          title="User Management API"
          description="Crie, atualize e gerencie usuários e seus acessos à plataforma programaticamente."
          endpoint="https://{seu-control-room}/v1/usermanagement/users"
          docsUrl="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/control-room-api/user-management-apis.html"
          delay={4}
        />
        
        <ApiCard
          title="Repository Management API"
          description="Acesse e gerencie o repositório de bots, pastas e arquivos do Automation Anywhere."
          endpoint="https://{seu-control-room}/v1/repository/folders"
          docsUrl="https://docs.automationanywhere.com/bundle/enterprise-v11.3/page/enterprise/topics/control-room/control-room-api/repository-management-api.html"
          delay={5}
        />
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Integração via API</h3>
        <p className="text-gray-600 mb-6">
          As APIs do Automation Anywhere permitem integrar automações RPA com seus sistemas existentes. Siga estas etapas para começar:
        </p>
        <ol className="space-y-2 text-gray-600 list-decimal list-inside ml-4">
          <li>Autentique-se usando a API de autenticação para obter um token JWT</li>
          <li>Use o token nas solicitações subsequentes para outras APIs</li>
          <li>Implemente tratamento de erros e renovação de token adequados</li>
          <li>Configure bibliotecas de cliente para simplificar as chamadas de API</li>
          <li>Monitore o uso da API e respeite limites de taxa para evitar bloqueios</li>
        </ol>
      </div>
    </div>
  );
};

const AutomationAnywhereTemplates = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Templates de Bots
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600"
        >
          Acelere sua jornada de automação com templates de bots prontos para customização
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TemplateCard
          title="Extrator de Dados PDF"
          description="Bot que extrai dados estruturados e não estruturados de documentos PDF e os exporta para Excel ou sistemas."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={0}
        />
        
        <TemplateCard
          title="Processador de Faturas"
          description="Automatiza a extração, validação e lançamento de faturas em sistemas financeiros."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={1}
        />
        
        <TemplateCard
          title="Conciliador Bancário"
          description="Realiza conciliação entre extratos bancários e registros contábeis, identificando diferenças."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={2}
        />
        
        <TemplateCard
          title="Gerador de Relatórios"
          description="Coleta dados de múltiplas fontes, gera relatórios padronizados e os distribui automaticamente."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={3}
        />
        
        <TemplateCard
          title="Validador de Dados"
          description="Verifica a integridade e consistência de dados entre sistemas, identificando discrepâncias."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={4}
        />
        
        <TemplateCard
          title="Migrador de Dados"
          description="Transfere dados entre sistemas legados e modernos, realizando transformações necessárias."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={5}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#00B4E5]/10 to-[#00D8B1]/10 p-8 rounded-2xl mt-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Precisa de um bot personalizado?</h3>
            <p className="text-gray-600">Nossa equipe de especialistas pode desenvolver bots sob medida para suas necessidades</p>
          </div>
          <Button className="bg-bradesco-red hover:bg-bradesco-darkred">Solicitar Bot</Button>
        </div>
      </motion.div>
    </div>
  );
};

const AutomationAnywhereBestPractices = () => {
  const practices = [
    {
      title: "Padronize a nomenclatura de bots e variáveis",
      description: "Adote um sistema de nomenclatura consistente para bots, variáveis e metadados que facilite a identificação e manutenção."
    },
    {
      title: "Modularize seus bots",
      description: "Divida automações complexas em bots menores e reutilizáveis que possam ser combinados para formar processos completos."
    },
    {
      title: "Implemente tratamento de exceções",
      description: "Configure tratamento de erros abrangente para lidar com cenários inesperados e garantir a resiliência dos bots."
    },
    {
      title: "Utilize o Credential Vault",
      description: "Nunca armazene credenciais no código do bot. Sempre use o Credential Vault para gerenciar senhas e informações sensíveis."
    },
    {
      title: "Documente meticulosamente",
      description: "Cada bot deve ter documentação detalhada sobre seu propósito, pré-requisitos, entradas, saídas e casos de exceção."
    },
    {
      title: "Implemente logs detalhados",
      description: "Configure logs adequados para ajudar na solução de problemas e auditoria, mas evite registrar informações sensíveis."
    },
    {
      title: "Teste em ambientes isolados",
      description: "Sempre teste seus bots em ambientes de não-produção antes de implantá-los em sistemas de produção."
    },
    {
      title: "Configure tempos limite apropriados",
      description: "Defina timeouts adequados para operações que dependem de recursos externos ou podem ficar bloqueadas."
    }
  ];

  return <BestPractices practices={practices} title="Boas Práticas para Automation Anywhere" icon={<Bot className="h-7 w-7 text-bradesco-red" />} />;
};

const AutomationAnywhereUseCases = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Casos de Uso no Bradesco
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600"
        >
          Conheça como o Automation Anywhere está transformando processos no Bradesco
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UseCaseCard
          title="Extração de Dados de Sistemas Legados"
          description="Precisa acessar dados de sistemas antigos sem APIs disponíveis?"
          icon={<Database className="h-6 w-6" />}
          solution="Bots que simulam ações do usuário para extrair dados de sistemas legados sem necessidade de integrações complexas."
          platformPath="/automation-anywhere/templates"
          delay={0}
        />
        
        <UseCaseCard
          title="Processamento de Alto Volume"
          description="Tem processos repetitivos que consomem muitas horas de trabalho manual?"
          icon={<Clock className="h-6 w-6" />}
          solution="Bots que trabalham 24/7 processando grandes volumes de transações, reduzindo backlog e tempo de processamento."
          platformPath="/automation-anywhere/templates"
          delay={1}
        />

        <UseCaseCard
          title="Validação de Dados"
          description="Precisa verificar a consistência de dados entre múltiplos sistemas?"
          icon={<FileCheck className="h-6 w-6" />}
          solution="Bots que comparam e validam dados entre diferentes sistemas, identificando discrepâncias para correção."
          platformPath="/automation-anywhere/templates"
          delay={2}
        />
        
        <UseCaseCard
          title="Geração de Relatórios"
          description="Gasta muito tempo coletando dados e gerando relatórios manualmente?"
          icon={<BarChart3 className="h-6 w-6" />}
          solution="Bots que coletam dados de múltiplas fontes, consolidam e geram relatórios automaticamente no formato desejado."
          platformPath="/automation-anywhere/templates"
          delay={3}
        />
      </div>

      <div className="bg-white p-8 rounded-xl shadow-subtle border border-gray-200 mt-8">
        <h3 className="text-2xl font-semibold mb-6">Como implementar RPA na sua área</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">1</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Identifique processos candidatos</h4>
              <p className="text-gray-600">Procure por processos repetitivos, baseados em regras, com alto volume ou propensos a erros.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">2</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Documente o processo atual</h4>
              <p className="text-gray-600">Mapeie detalhadamente o fluxo de trabalho, identificando todas as variações e exceções.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">3</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Desenvolva e teste bots</h4>
              <p className="text-gray-600">Utilize nossos templates ou solicite o desenvolvimento de bots personalizados, testando exaustivamente.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">4</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Implante e monitore</h4>
              <p className="text-gray-600">Implante os bots em produção e estabeleça monitoramento contínuo para garantir desempenho e confiabilidade.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAnywhere;
