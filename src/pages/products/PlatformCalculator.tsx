
import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Check, Zap, Bot, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

import Footer from "../../components/Footer";
import PlatformBreadcrumb from "../../components/PlatformBreadcrumb";
import PageTransition from "../../components/PageTransition";

interface Question {
  id: string;
  title: string;
  description: string;
  type: "single" | "multiple" | "scale";
  options?: { value: string; label: string; weight?: Record<string, number> }[];
  scale?: { min: number; max: number; minLabel: string; maxLabel: string };
}

interface Result {
  platform: "power-automate" | "automation-anywhere" | "service-now";
  score: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
  color: string;
  path: string;
}

const PlatformCalculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [progress, setProgress] = useState(0);

  const questions: Question[] = [
    {
      id: "complexity",
      title: "Qual a complexidade da automação que você precisa implementar?",
      description: "Considere quantos sistemas diferentes estão envolvidos e a complexidade das regras de negócio.",
      type: "single",
      options: [
        { 
          value: "low", 
          label: "Baixa (1-2 sistemas, regras simples)", 
          weight: { "power-automate": 10, "automation-anywhere": 5, "service-now": 8 }
        },
        { 
          value: "medium", 
          label: "Média (2-4 sistemas, algumas regras complexas)", 
          weight: { "power-automate": 7, "automation-anywhere": 9, "service-now": 6 }
        },
        { 
          value: "high", 
          label: "Alta (5+ sistemas, regras muito complexas)", 
          weight: { "power-automate": 3, "automation-anywhere": 10, "service-now": 5 }
        }
      ]
    },
    {
      id: "systems",
      title: "Quais sistemas estão envolvidos na automação?",
      description: "Selecione todos os tipos de sistemas que fazem parte do processo.",
      type: "multiple",
      options: [
        { 
          value: "microsoft", 
          label: "Microsoft (Office 365, SharePoint, Teams)", 
          weight: { "power-automate": 10, "automation-anywhere": 6, "service-now": 5 }
        },
        { 
          value: "legacy", 
          label: "Sistemas legados sem API", 
          weight: { "power-automate": 3, "automation-anywhere": 10, "service-now": 4 }
        },
        { 
          value: "web", 
          label: "Aplicações web modernas com API", 
          weight: { "power-automate": 8, "automation-anywhere": 7, "service-now": 8 }
        },
        { 
          value: "desktop", 
          label: "Aplicações desktop", 
          weight: { "power-automate": 5, "automation-anywhere": 9, "service-now": 4 }
        },
        { 
          value: "serviceManagement", 
          label: "Gestão de serviços de TI", 
          weight: { "power-automate": 6, "automation-anywhere": 5, "service-now": 10 }
        }
      ]
    },
    {
      id: "data",
      title: "O processo envolve processamento de documentos ou extração de dados?",
      description: "Considere se a automação precisa interpretar ou extrair dados de documentos não estruturados.",
      type: "single",
      options: [
        { 
          value: "no", 
          label: "Não", 
          weight: { "power-automate": 7, "automation-anywhere": 6, "service-now": 8 }
        },
        { 
          value: "simple", 
          label: "Sim, processamento simples (documentos estruturados)", 
          weight: { "power-automate": 9, "automation-anywhere": 7, "service-now": 6 }
        },
        { 
          value: "complex", 
          label: "Sim, processamento complexo (documentos não estruturados/OCR)", 
          weight: { "power-automate": 4, "automation-anywhere": 10, "service-now": 3 }
        }
      ]
    },
    {
      id: "skills",
      title: "Qual o nível de habilidade técnica disponível para implementar/manter a solução?",
      description: "Considere as habilidades da equipe que implementará e manterá a automação.",
      type: "single",
      options: [
        { 
          value: "low", 
          label: "Baixo (usuários de negócio sem experiência técnica)", 
          weight: { "power-automate": 9, "automation-anywhere": 5, "service-now": 7 }
        },
        { 
          value: "medium", 
          label: "Médio (alguma experiência técnica, mas não programadores)", 
          weight: { "power-automate": 8, "automation-anywhere": 7, "service-now": 8 }
        },
        { 
          value: "high", 
          label: "Alto (profissionais técnicos/desenvolvedores)", 
          weight: { "power-automate": 7, "automation-anywhere": 9, "service-now": 8 }
        }
      ]
    },
    {
      id: "importance",
      title: "Qual a importância de cada um desses fatores para sua automação?",
      description: "Avalie a importância de cada fator em uma escala de 1 a 5.",
      type: "scale",
      scale: { min: 1, max: 5, minLabel: "Pouco importante", maxLabel: "Muito importante" }
    }
  ];

  const results: Result[] = [
    {
      platform: "power-automate",
      score: 0,
      icon: <Zap className="h-8 w-8" />,
      title: "Power Automate",
      description: "Ideal para automações que integram produtos Microsoft, fluxos de aprovação e processos com interfaces visuais amigáveis para usuários com menos experiência técnica.",
      benefits: [
        "Fácil integração com Microsoft 365",
        "Interface visual intuitiva",
        "Sem necessidade de codificação avançada",
        "Bom para fluxos de aprovação",
        "Comunidade ativa e suporte da Microsoft"
      ],
      useCases: [
        "Automação de processos de aprovação",
        "Integração entre aplicativos Microsoft",
        "Processos de notificação e alertas",
        "Coleta e processamento de dados simples"
      ],
      color: "from-[#0066FF] to-[#2B88D8]",
      path: "/power-automate"
    },
    {
      platform: "automation-anywhere",
      score: 0,
      icon: <Bot className="h-8 w-8" />,
      title: "Automation Anywhere",
      description: "Excelente para automações robóticas complexas que envolvem sistemas legados, processamento de documentos não estruturados e tarefas que requerem emulação de interface de usuário.",
      benefits: [
        "Automação robótica avançada",
        "Processamento cognitivo com IQ Bot",
        "Excelente para sistemas sem API",
        "Capacidade de lidar com documentos não estruturados",
        "Analytics integrado com Bot Insight"
      ],
      useCases: [
        "Automação de sistemas legados",
        "Processamento de documentos via OCR",
        "Extração de dados de fontes diversas",
        "Processos com alto volume de transações"
      ],
      color: "from-[#00B4E5] to-[#00D8B1]",
      path: "/automation-anywhere"
    },
    {
      platform: "service-now",
      score: 0,
      icon: <Cloud className="h-8 w-8" />,
      title: "ServiceNow",
      description: "Ideal para automações relacionadas a processos de TI, fluxos de trabalho de serviços e gestão de casos, especialmente quando integrado com sistemas de gestão de serviços.",
      benefits: [
        "Plataforma completa de workflow",
        "Perfeito para processos ITSM/ESM",
        "Governança e compliance integrados",
        "Dashboards e relatórios avançados",
        "Ótimo para gestão de casos e solicitações"
      ],
      useCases: [
        "Workflows de aprovação de serviços",
        "Automação de processos de TI",
        "Gestão de incidentes e problemas",
        "Portais de autoatendimento"
      ],
      color: "from-[#81B5A1] to-[#69B0CB]",
      path: "/service-now"
    }
  ];

  const handleNext = () => {
    const newProgress = Math.round(((currentStep + 1) / questions.length) * 100);
    setProgress(newProgress);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const newProgress = Math.round(((currentStep - 1) / questions.length) * 100);
      setProgress(newProgress);
    }
  };

  const handleAnswer = (id: string, value: any) => {
    setAnswers({ ...answers, [id]: value });
  };

  const isQuestionAnswered = (questionId: string) => {
    const answer = answers[questionId];
    
    if (answer === undefined) return false;
    
    if (Array.isArray(answer)) {
      return answer.length > 0;
    }
    
    if (questionId === 'importance') {
      const requiredFactors = ['speed', 'cost', 'complexity', 'maintenance'];
      return requiredFactors.every(factor => answers.importance && answers.importance[factor] !== undefined);
    }
    
    return answer !== "";
  };

  const calculateResult = () => {
    const scores = {
      "power-automate": 0,
      "automation-anywhere": 0,
      "service-now": 0
    };

    // Process questions 1-4 (single and multiple choice)
    for (let i = 0; i < questions.length - 1; i++) {
      const question = questions[i];
      const answer = answers[question.id];
      
      if (question.type === "single") {
        const selectedOption = question.options?.find(o => o.value === answer);
        if (selectedOption && selectedOption.weight) {
          Object.entries(selectedOption.weight).forEach(([platform, weight]) => {
            scores[platform as keyof typeof scores] += weight;
          });
        }
      } else if (question.type === "multiple" && Array.isArray(answer)) {
        answer.forEach(selected => {
          const selectedOption = question.options?.find(o => o.value === selected);
          if (selectedOption && selectedOption.weight) {
            Object.entries(selectedOption.weight).forEach(([platform, weight]) => {
              scores[platform as keyof typeof scores] += weight;
            });
          }
        });
      }
    }

    // Apply importance factors from the last question
    const importanceFactors = answers.importance || {};
    
    // Adjust scores based on importance factors
    if (importanceFactors.speed) {
      scores["power-automate"] += importanceFactors.speed * 1.5;
      scores["automation-anywhere"] += importanceFactors.speed * 1.2;
      scores["service-now"] += importanceFactors.speed * 1.0;
    }
    
    if (importanceFactors.cost) {
      scores["power-automate"] += importanceFactors.cost * 1.8;
      scores["automation-anywhere"] += importanceFactors.cost * 0.8;
      scores["service-now"] += importanceFactors.cost * 1.0;
    }
    
    if (importanceFactors.complexity) {
      scores["power-automate"] += importanceFactors.complexity * 0.7;
      scores["automation-anywhere"] += importanceFactors.complexity * 1.8;
      scores["service-now"] += importanceFactors.complexity * 1.2;
    }
    
    if (importanceFactors.maintenance) {
      scores["power-automate"] += importanceFactors.maintenance * 1.4;
      scores["automation-anywhere"] += importanceFactors.maintenance * 1.0;
      scores["service-now"] += importanceFactors.maintenance * 1.6;
    }

    // Update scores in results
    for (const result of results) {
      result.score = scores[result.platform];
    }

    // Sort by score and get the highest
    const sortedResults = [...results].sort((a, b) => b.score - a.score);
    setResult(sortedResults[0]);
  };

  const renderQuestionContent = (question: Question) => {
    switch (question.type) {
      case "single":
        return (
          <RadioGroup
            value={answers[question.id] || ""}
            onValueChange={(value) => handleAnswer(question.id, value)}
            className="space-y-3"
          >
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-start space-x-2">
                <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                <Label htmlFor={`${question.id}-${option.value}`} className="font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case "multiple":
        return (
          <div className="space-y-3">
            {question.options?.map((option) => (
              <div key={option.value} className="flex items-start space-x-2">
                <Checkbox
                  id={`${question.id}-${option.value}`}
                  checked={(answers[question.id] || []).includes(option.value)}
                  onCheckedChange={(checked) => {
                    const currentValues = answers[question.id] || [];
                    const newValues = checked
                      ? [...currentValues, option.value]
                      : currentValues.filter((v: string) => v !== option.value);
                    handleAnswer(question.id, newValues);
                  }}
                />
                <Label htmlFor={`${question.id}-${option.value}`} className="font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        );
      
      case "scale":
        const importanceFactors = [
          { id: "speed", label: "Velocidade de implementação" },
          { id: "cost", label: "Custo da solução" },
          { id: "complexity", label: "Capacidade de lidar com processos complexos" },
          { id: "maintenance", label: "Facilidade de manutenção/modificação" }
        ];
        
        return (
          <div className="space-y-6">
            {importanceFactors.map((factor) => (
              <div key={factor.id} className="space-y-2">
                <Label>{factor.label}</Label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 min-w-[80px]">
                    {question.scale?.minLabel}
                  </span>
                  <div className="flex justify-between w-full">
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
                      <div key={value} className="flex flex-col items-center">
                        <RadioGroupItem
                          value={value.toString()}
                          id={`${question.id}-${factor.id}-${value}`}
                          checked={
                            answers[question.id]?.[factor.id] === value
                          }
                          onClick={() => {
                            const current = answers[question.id] || {};
                            handleAnswer(question.id, {
                              ...current,
                              [factor.id]: value,
                            });
                          }}
                        />
                        <span className="text-xs mt-1">{value}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 min-w-[80px] text-right">
                    {question.scale?.maxLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <div className="w-full bg-white shadow-md py-4 mb-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-bradesco-red flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">L</span>
            </div>
            <span className="font-display font-semibold text-lg">
              Low Code Hub
            </span>
          </Link>
          <nav className="flex items-center space-x-8">
            <Link to="/power-automate" className="font-medium text-sm hover:text-bradesco-red">Power Automate</Link>
            <Link to="/automation-anywhere" className="font-medium text-sm hover:text-bradesco-red">Automation Anywhere</Link>
            <Link to="/service-now" className="font-medium text-sm hover:text-bradesco-red">ServiceNow</Link>
          </nav>
        </div>
      </div>
      <main className="min-h-screen">
        <section className="py-10 px-6 bg-gray-50">
          <div className="container mx-auto">
            <PlatformBreadcrumb
              platform="Produtos"
              section="Calculadora de Plataformas"
              platformPath="/products"
            />

            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="bg-gradient-to-r from-bradesco-red to-bradesco-darkred w-12 h-12 rounded-full flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold">
                  Calculadora de Plataformas
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-3xl"
              >
                Responda algumas perguntas sobre seu cenário de automação e
                descobriremos qual plataforma low code é mais adequada para suas
                necessidades.
              </motion.p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Progresso</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {result ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <div className={`bg-gradient-to-r ${result.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {result.icon}
                      </div>
                      <h2 className="text-2xl font-semibold">Recomendamos: {result.title}</h2>
                      <p className="text-gray-600 mt-2">{result.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Principais benefícios</h3>
                        <ul className="space-y-2">
                          {result.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Casos de uso ideais</h3>
                        <ul className="space-y-2">
                          {result.useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5 flex-shrink-0">•</span>
                              <span className="text-gray-700">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col sm:flex-row justify-center gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setResult(null);
                          setCurrentStep(0);
                          setProgress(0);
                          setAnswers({});
                        }}
                      >
                        Recomeçar avaliação
                      </Button>
                      <Button asChild>
                        <a href={result.path} className="flex items-center">
                          Conhecer a plataforma
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">
                          {questions[currentStep].title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {questions[currentStep].description}
                        </p>
                      </div>

                      {renderQuestionContent(questions[currentStep])}

                      <div className="flex justify-between pt-6 border-t border-gray-100">
                        <Button
                          variant="outline"
                          onClick={handlePrevious}
                          disabled={currentStep === 0}
                        >
                          Anterior
                        </Button>
                        <Button
                          onClick={handleNext}
                          disabled={!isQuestionAnswered(questions[currentStep].id)}
                        >
                          {currentStep < questions.length - 1 ? "Próximo" : "Ver resultado"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {!result && (
                <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">
                    Como esta calculadora funciona?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Nossa calculadora analisa suas respostas e compara com o perfil
                    ideal de cada plataforma Low Code disponível no Bradesco.
                    Consideramos fatores como:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                      <span>Complexidade técnica do seu cenário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                      <span>Integração com sistemas existentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                      <span>Competências técnicas disponíveis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                      <span>Prioridades específicas do seu projeto</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default PlatformCalculator;
