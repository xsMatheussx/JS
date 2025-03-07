import { Card } from "./components/card/index";

export function App() {
  return (
    <>
      <Card
        description="PARA VOCÊ COMEÇAR"
        title="Essentials"
        price="19,97"
        features={["Até 3 usuários", "Autoatendimento"]}
      />

      <Card
        description="PARA VOCÊ DECOLAR"
        title="Ultimate"
        price="29,97"
        darkMode
        features={[
          "Usuários Ilimitados",
          "Suporte 24/7",
          "CSM Dedicado",
          "Treinamentos",
        ]}
      />

      <Card
        description="PARA SUA EMPRESA"
        title="Enterprise"
        enterprise
        features={[
          "Plano customizado especialmente para a necessidade do seu negócio",
        ]}
      />
    </>
  );
}
