
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FileText, Send, ThumbsUp } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import Footer from "../../components/Footer";
import PlatformBreadcrumb from "../../components/PlatformBreadcrumb";
import PageTransition from "../../components/PageTransition";
import { Link } from "react-router-dom";

const formSchema = z.object({
  nome: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  plataforma: z.enum(["power-automate", "automation-anywhere", "service-now"]),
  satisfacao: z.enum(["1", "2", "3", "4", "5"]),
  experiencia: z.string().min(10, { message: "Por favor, descreva sua experiência com mais detalhes" }),
  sugestoes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const SatisfactionSurvey = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      plataforma: "power-automate",
      satisfacao: "3",
      experiencia: "",
      sugestoes: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Formulário enviado:", data);
    
    // Simular envio para uma API
    setTimeout(() => {
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Agradecemos pelo seu feedback.",
        variant: "default",
      });
      setSubmitted(true);
    }, 1000);
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
              section="Pesquisa de Satisfação"
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
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold">
                  Pesquisa de Satisfação
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 max-w-3xl"
              >
                Ajude-nos a melhorar nossos serviços compartilhando sua experiência
                com as plataformas low code que você utiliza.
              </motion.p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-subtle p-8 border border-gray-100">
              {!submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Compartilhe sua experiência</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="nome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nome</FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="seu.email@bradesco.com.br" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="plataforma"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Plataforma avaliada</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="power-automate" id="power-automate" />
                                  <FormLabel htmlFor="power-automate" className="font-normal">
                                    Power Automate
                                  </FormLabel>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="automation-anywhere" id="automation-anywhere" />
                                  <FormLabel htmlFor="automation-anywhere" className="font-normal">
                                    Automation Anywhere
                                  </FormLabel>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="service-now" id="service-now" />
                                  <FormLabel htmlFor="service-now" className="font-normal">
                                    ServiceNow
                                  </FormLabel>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="satisfacao"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nível de satisfação</FormLabel>
                            <FormDescription>
                              Em uma escala de 1 a 5, qual sua satisfação com a plataforma?
                            </FormDescription>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex space-x-4"
                              >
                                <div className="flex flex-col items-center">
                                  <RadioGroupItem value="1" id="r1" />
                                  <FormLabel htmlFor="r1" className="font-normal mt-1">
                                    1
                                  </FormLabel>
                                </div>
                                <div className="flex flex-col items-center">
                                  <RadioGroupItem value="2" id="r2" />
                                  <FormLabel htmlFor="r2" className="font-normal mt-1">
                                    2
                                  </FormLabel>
                                </div>
                                <div className="flex flex-col items-center">
                                  <RadioGroupItem value="3" id="r3" />
                                  <FormLabel htmlFor="r3" className="font-normal mt-1">
                                    3
                                  </FormLabel>
                                </div>
                                <div className="flex flex-col items-center">
                                  <RadioGroupItem value="4" id="r4" />
                                  <FormLabel htmlFor="r4" className="font-normal mt-1">
                                    4
                                  </FormLabel>
                                </div>
                                <div className="flex flex-col items-center">
                                  <RadioGroupItem value="5" id="r5" />
                                  <FormLabel htmlFor="r5" className="font-normal mt-1">
                                    5
                                  </FormLabel>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experiencia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experiência com a plataforma</FormLabel>
                            <FormDescription>
                              Descreva sua experiência utilizando a plataforma
                            </FormDescription>
                            <FormControl>
                              <Textarea
                                placeholder="Conte-nos sobre sua experiência..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="sugestoes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Sugestões de melhoria</FormLabel>
                            <FormDescription>
                              Opcional: compartilhe sugestões para melhorarmos nossos serviços
                            </FormDescription>
                            <FormControl>
                              <Textarea
                                placeholder="Suas sugestões são valiosas para nós..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Enviar feedback
                      </Button>
                    </form>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ThumbsUp className="h-12 w-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Agradecemos seu feedback!</h2>
                  <p className="text-gray-600 mb-8">
                    Sua opinião é muito importante para continuarmos melhorando nossas ferramentas e serviços.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>
                    Enviar outro feedback
                  </Button>
                </motion.div>
              )}
            </div>
            
            <div className="max-w-2xl mx-auto mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">
                Por que sua opinião é importante
              </h3>
              <p className="text-gray-600 mb-4">
                O feedback dos usuários é fundamental para aprimorarmos constantemente nossas plataformas e serviços.
                Com base nas suas experiências e sugestões, conseguimos:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                  <span>Identificar pontos de melhoria nos fluxos de trabalho</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                  <span>Desenvolver novos templates e conectores personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                  <span>Priorizar recursos e funcionalidades mais relevantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-bradesco-red/10 text-bradesco-red p-1 rounded mt-0.5">•</span>
                  <span>Criar treinamentos mais efetivos e materiais de apoio</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default SatisfactionSurvey;
