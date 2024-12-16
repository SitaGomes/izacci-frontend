import { Button, Input, LandingContainer, LandingTitle } from '@/components';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-2 md:p-0">
      {/* HEADER */}
      <LandingContainer
        as="header"
        className="flex flex-col sm:flex-row justify-around items-center py-3 gap-4"
      >
        <Image src="/logo.svg" alt="Vercel Logo" width={150} height={150} />

        <div className="flex justify-between gap-5">
          <a href="#">Produtos</a>
          <a href="#">Feedback</a>
          <a href="#">FAQ</a>
        </div>

        <div className="flex justify-between gap-3">
          <a href="#">Login</a>
        </div>
      </LandingContainer>

      {/* HERO */}
      <LandingContainer
        as="section"
        className="my-40 sm:my-56 flex flex-col gap-5 justify-center items-center"
      >
        <div className="flex flex-col">
          <LandingTitle size="lg">
            O aplicativo completo para gerenciar
          </LandingTitle>
          <LandingTitle color="secondary" size="lg">
            sua empresa
          </LandingTitle>
        </div>
        <p className="text-center">
          Gerencie suas finanças e clientes com facilidade e eficiência.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4">
          <Input type="text" placeholder="Digite o seu email" />
          <Button className="flex-1">Solicitar acesso</Button>
        </div>
      </LandingContainer>

      {/* APP */}
      <div className="relative w-full hidden md:block 2xl:hidden h-[500px] mb-40">
        <Image
          src="/Screenshots.svg"
          alt="Aplicativo"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* FEATURES */}
      <LandingContainer className="flex flex-col gap-4 sm:gap-28">
        <section className="flex flex-wrap sm:flex-nowrap">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h1 className="text-primary">PARA INSTITUIÇOES DE ENSINO</h1>
              <LandingTitle className="text-start tracking-wide">
                Tenha um controle melhor sobre os{' '}
                <span className="text-primary">alunos matriculados</span> e suas{' '}
                <span className="text-primary">situações financeiras</span>.
              </LandingTitle>
            </div>
            <p className="leading-7">
              Com a Izzaci consegues ter uma visão de todos os alunos com
              matriculas ativas e inativas, verificar se a propina foi paga, e
              analisar as metricas de crescimento da instituição.
            </p>
          </div>
          <Image src="/Chart.svg" alt="Charts" width={400} height={400} />
        </section>

        <section className="flex flex-row-reverse flex-wrap sm:flex-nowrap">
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h1 className="text-primary">PARA LOJAS ONLINE</h1>
              <LandingTitle className="text-start tracking-wide">
                Envie para os seus clientes um{' '}
                <span className="text-primary">unico link de pagamento</span> e
                tenha o conhecimento de
                <span className="text-primary">quem pagou</span>.
              </LandingTitle>
            </div>
            <p className="leading-7">
              A partir dos serviços da Izzaci é possivél enviar um link de
              pagamento dos seus produtos e ter a confirmação de pagamento assim
              que for realizado.
            </p>
          </div>
          <Image
            src="/Notification.svg"
            alt="Charts"
            width={400}
            height={400}
          />
        </section>
      </LandingContainer>

      {/* <footer>
        <Image></Image>
      </footer> */}
    </div>
  );
}
