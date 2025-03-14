
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
  Zap,
  FileJson,
  Code,
  FileCheck,
  Clock,
  Mail,
  Database,
  Laptop,
  Workflow,
  Bot,
  Calendar,
  LayoutTemplate
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

const PowerAutomate = () => {
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
        return <PowerAutomateAPIs />;
      case "templates":
        return <PowerAutomateTemplates />;
      case "best-practices":
        return <PowerAutomateBestPractices />;
      case "use-cases":
        return <PowerAutomateUseCases />;
      default:
        return <PowerAutomateOverview />;
    }
  };

  return (
    <PageTransition>
      <Header />
      <Hero
        title="Power Automate"
        subtitle="Automatize processos, integre sistemas e aumente a produtividade com fluxos de trabalho personalizados"
        align="left"
        primaryButtonText="Começar agora"
        primaryButtonLink="/power-automate/templates"
      />

      <div className="container mx-auto px-6 py-8">
        <PlatformBreadcrumb 
          platform="Power Automate" 
          platformPath="/power-automate"
          section={activeSection === "overview" ? undefined : tabs.find(t => t.id === activeSection)?.label}
        />
        
        <PlatformTabs basePath="/power-automate" tabs={tabs} className="mb-12" />
        
        {renderContent()}
      </div>

      <Footer />
    </PageTransition>
  );
};

// Componentes para cada seção
const PowerAutomateOverview = () => {
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
              Automatize Processos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-semibold mb-6"
            >
              O que é o Power Automate?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 mb-8"
            >
              O Power Automate (anteriormente Microsoft Flow) é uma plataforma de automação de processos que 
              permite criar fluxos de trabalho automatizados entre aplicativos e serviços. Com o Power Automate, 
              você pode automatizar tarefas repetitivas, sincronizar arquivos, coletar dados e receber notificações.
            </motion.p>

            <div className="space-y-4">
              <Feature
                icon={<Workflow className="h-5 w-5 text-bradesco-red" />}
                title="Fluxos de Trabalho Automatizados"
                description="Crie fluxos de trabalho que automatizam tarefas entre aplicativos e serviços da Microsoft e de terceiros."
                delay={0}
              />
              <Feature
                icon={<Bot className="h-5 w-5 text-bradesco-red" />}
                title="RPA (Robotic Process Automation)"
                description="Automatize tarefas baseadas em interface do usuário com bots inteligentes que simulam ações humanas."
                delay={1}
              />
              <Feature
                icon={<Database className="h-5 w-5 text-bradesco-red" />}
                title="Integração com Múltiplas Fontes de Dados"
                description="Conecte-se a centenas de fontes de dados e serviços para criar fluxos de dados contínuos."
                delay={2}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#0066FF]/20 to-[#2B88D8]/20 blur-xl opacity-70" />
            <div className="relative bg-white rounded-2xl p-8 shadow-elevated">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-[#0066FF] to-[#2B88D8] rounded-xl p-6 text-white">
                  <Zap className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Potencialize sua Produtividade</h3>
                  <p className="text-white/80 mb-4">
                    Economize tempo automatizando tarefas repetitivas e processos de negócios.
                  </p>
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#0066FF]">
                    <a href="https://make.powerautomate.com/" target="_blank" rel="noopener noreferrer">
                      Comece a automatizar
                    </a>
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-subtle transition-shadow">
                    <Clock className="h-6 w-6 text-bradesco-red mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Automatização Agendada</h3>
                    <p className="text-gray-600 text-sm">
                      Defina horários específicos para execução de tarefas
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-subtle transition-shadow">
                    <Mail className="h-6 w-6 text-bradesco-red mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Email Automático</h3>
                    <p className="text-gray-600 text-sm">
                      Envio e processamento inteligente de emails
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
            Por que usar o Power Automate?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard delay={0}>
            <FileJson className="h-12 w-12 text-bradesco-red mb-6" />
            <h3 className="text-xl font-semibold mb-3">Mais de 400 Conectores</h3>
            <p className="text-gray-600">
              Integre-se facilmente com centenas de aplicativos e serviços como Office 365, Dynamics 365, 
              SQL Server, SharePoint, OneDrive, Salesforce, Twitter e muito mais.
            </p>
          </GlassCard>
          
          <GlassCard delay={1}>
            <LayoutTemplate className="h-12 w-12 text-bradesco-red mb-6" />
            <h3 className="text-xl font-semibold mb-3">Templates Prontos</h3>
            <p className="text-gray-600">
              Comece rapidamente com centenas de templates pré-construídos para casos de uso comuns, 
              acelerando sua jornada de automação.
            </p>
          </GlassCard>
          
          <GlassCard delay={2}>
            <Laptop className="h-12 w-12 text-bradesco-red mb-6" />
            <h3 className="text-xl font-semibold mb-3">Interface Amigável</h3>
            <p className="text-gray-600">
              Editor visual intuitivo que permite criar fluxos complexos sem necessidade de codificação, 
              tornando a automação acessível a todos.
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
            title="Automação de Email"
            description="Precisa enviar emails automáticos com dados de uma planilha ou sistema?"
            icon={<Mail className="h-6 w-6" />}
            solution="Use o Power Automate para criar fluxos que enviam emails automaticamente baseados em gatilhos como novos registros ou datas específicas."
            platformPath="/power-automate/use-cases"
            delay={0}
          />
          
          <UseCaseCard
            title="Aprovações de Documentos"
            description="Seu processo de aprovação de documentos é manual e demorado?"
            icon={<FileCheck className="h-6 w-6" />}
            solution="Implemente fluxos de aprovação automatizados que notificam aprovadores e rastreiam o status de cada documento."
            platformPath="/power-automate/use-cases"
            delay={1}
          />
        </div>
      </section>
    </div>
  );
};

const PowerAutomateAPIs = () => {
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
          APIs e Conectores do Power Automate
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600"
        >
          Explore os principais conectores e APIs disponíveis para integrar com seus fluxos
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ApiCard
          title="Microsoft Graph API"
          description="Acesse dados e recursos do Microsoft 365, incluindo emails, calendários, contatos, e mais."
          endpoint="https://graph.microsoft.com/v1.0/"
          docsUrl="https://docs.microsoft.com/graph/overview"
          delay={0}
        />
        
        <ApiCard
          title="SharePoint REST API"
          description="Interaja com listas, documentos e outros recursos do SharePoint."
          endpoint="https://{site}/_api/"
          docsUrl="https://docs.microsoft.com/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service"
          delay={1}
        />
        
        <ApiCard
          title="Conector de SQL Server"
          description="Execute consultas e procedimentos armazenados em bancos de dados SQL Server."
          docsUrl="https://docs.microsoft.com/connectors/sql/"
          delay={2}
        />
        
        <ApiCard
          title="Conector HTTP"
          description="Faça solicitações HTTP para qualquer API RESTful ou serviço web."
          endpoint="https://api.example.com/data"
          docsUrl="https://docs.microsoft.com/connectors/http/"
          delay={3}
        />
        
        <ApiCard
          title="Common Data Service"
          description="Interaja com dados armazenados no Microsoft Dataverse (anteriormente CDS)."
          docsUrl="https://docs.microsoft.com/powerapps/developer/data-platform/webapi/overview"
          delay={4}
        />
        
        <ApiCard
          title="OneDrive API"
          description="Gerencie arquivos e pastas no OneDrive e OneDrive for Business."
          endpoint="https://graph.microsoft.com/v1.0/me/drive"
          docsUrl="https://docs.microsoft.com/graph/api/resources/onedrive"
          delay={5}
        />
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Como Usar APIs Personalizadas</h3>
        <p className="text-gray-600 mb-6">
          Além dos conectores integrados, você pode criar conectores personalizados para suas próprias APIs:
        </p>
        <ol className="space-y-2 text-gray-600 list-decimal list-inside ml-4">
          <li>Acesse o portal do Power Automate</li>
          <li>Navegue até "Dados" &gt; "Conectores personalizados"</li>
          <li>Clique em "Novo conector personalizado" e siga as instruções</li>
          <li>Defina os endpoints, autenticação e ações da sua API</li>
          <li>Teste e use seu conector personalizado em seus fluxos</li>
        </ol>
      </div>
    </div>
  );
};

const PowerAutomateTemplates = () => {
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
          Templates Prontos para Uso
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600"
        >
          Comece rapidamente com nossos templates pré-configurados para casos de uso comuns no Bradesco
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TemplateCard
          title="Aprovação de Documentos"
          description="Fluxo completo para envio, aprovação e notificação de documentos importantes."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={0}
        />
        
        <TemplateCard
          title="Consolidação de Relatórios"
          description="Colete dados de múltiplas fontes e gere relatórios consolidados automaticamente."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={1}
        />
        
        <TemplateCard
          title="Notificações de Incidentes"
          description="Monitore sistemas e envie alertas quando problemas forem detectados."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={2}
        />
        
        <TemplateCard
          title="Sincronização de Dados"
          description="Mantenha dados sincronizados entre sistemas diferentes automaticamente."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={3}
        />
        
        <TemplateCard
          title="Onboarding de Funcionários"
          description="Automatize o processo de entrada de novos funcionários na equipe."
          image="/placeholder.svg"
          downloadUrl="#"
          previewUrl="#"
          delay={4}
        />
        
        <TemplateCard
          title="Gestão de Ausências"
          description="Fluxo para solicitação e aprovação de férias e outras ausências."
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
        className="bg-gradient-to-r from-[#0066FF]/10 to-[#2B88D8]/10 p-8 rounded-2xl mt-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Precisa de um template personalizado?</h3>
            <p className="text-gray-600">Nossa equipe pode criar soluções específicas para seu departamento</p>
          </div>
          <Button className="bg-bradesco-red hover:bg-bradesco-darkred">Solicitar Template</Button>
        </div>
      </motion.div>
    </div>
  );
};

const PowerAutomateBestPractices = () => {
  const practices = [
    {
      title: "Nomeie seus fluxos de forma descritiva",
      description: "Use nomes claros que indiquem a função do fluxo e o departamento ou sistema envolvido. Ex: 'RH-AprovacaoFerias-Notificacao'."
    },
    {
      title: "Documente seus fluxos",
      description: "Adicione notas e comentários em cada etapa do fluxo para facilitar a manutenção futura e o entendimento por outros desenvolvedores."
    },
    {
      title: "Use variáveis para valores reutilizáveis",
      description: "Armazene em variáveis os valores que são usados várias vezes no fluxo para facilitar alterações e manutenção."
    },
    {
      title: "Implemente tratamento de erros",
      description: "Configure ações de tratamento de erros para lidar com falhas e enviar notificações quando necessário."
    },
    {
      title: "Teste em ambiente controlado",
      description: "Sempre teste seus fluxos em um ambiente de desenvolvimento ou sandbox antes de implementá-los em produção."
    },
    {
      title: "Monitore o desempenho",
      description: "Verifique regularmente o histórico de execuções para identificar gargalos ou problemas de desempenho."
    },
    {
      title: "Limite o escopo das conexões",
      description: "Use o princípio de privilégio mínimo ao configurar conexões, concedendo apenas as permissões necessárias."
    }
  ];

  return <BestPractices practices={practices} title="Boas Práticas para Power Automate" icon={<Zap className="h-7 w-7 text-bradesco-red" />} />;
};

const PowerAutomateUseCases = () => {
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
          Descubra como o Power Automate está sendo utilizado para resolver desafios reais
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <UseCaseCard
          title="Automação de Email"
          description="Precisa enviar emails automáticos com dados de uma planilha ou sistema?"
          icon={<Mail className="h-6 w-6" />}
          solution="Use o Power Automate para criar fluxos que enviam emails automaticamente baseados em gatilhos como novos registros ou datas específicas."
          platformPath="/power-automate/templates"
          delay={0}
        />
        
        <UseCaseCard
          title="Aprovações de Documentos"
          description="Seu processo de aprovação de documentos é manual e demorado?"
          icon={<FileCheck className="h-6 w-6" />}
          solution="Implemente fluxos de aprovação automatizados que notificam aprovadores e rastreiam o status de cada documento."
          platformPath="/power-automate/templates"
          delay={1}
        />

        <UseCaseCard
          title="Integração de Dados"
          description="Precisa manter dados sincronizados entre diferentes sistemas?"
          icon={<Database className="h-6 w-6" />}
          solution="Crie fluxos que sincronizam automaticamente dados entre SharePoint, SQL, Excel e outros sistemas quando ocorrem alterações."
          platformPath="/power-automate/templates"
          delay={2}
        />
        
        <UseCaseCard
          title="Lembretes e Notificações"
          description="Equipe perde prazos importantes por falta de lembretes?"
          icon={<Calendar className="h-6 w-6" />}
          solution="Configure notificações automáticas para eventos importantes, datas de vencimento e tarefas pendentes."
          platformPath="/power-automate/templates"
          delay={3}
        />
      </div>

      <div className="bg-white p-8 rounded-xl shadow-subtle border border-gray-200 mt-8">
        <h3 className="text-2xl font-semibold mb-6">Como implementar seu caso de uso</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">1</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Identifique o problema</h4>
              <p className="text-gray-600">Defina claramente o processo que você precisa automatizar e quais sistemas estão envolvidos.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">2</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Escolha o template adequado</h4>
              <p className="text-gray-600">Verifique se algum dos nossos templates pode ser adaptado para sua necessidade.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">3</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Implemente e teste</h4>
              <p className="text-gray-600">Desenvolva seu fluxo em ambiente de teste, garantindo que todas as etapas funcionem corretamente.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="bg-bradesco-red/10 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
              <span className="text-bradesco-red font-semibold">4</span>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-1">Implante e monitore</h4>
              <p className="text-gray-600">Após validação, implante em produção e configure monitoramento para garantir o funcionamento contínuo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerAutomate;
