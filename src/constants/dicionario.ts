export const DICTIONARY = {
    inicio: {
        hero: {
            titulo: "Especialista em Direito de Família e Sucessões",
            texto: "Divórcio, pensão, inventário, união estável, ação de guarda, alienação parental, testamento, planejamento patrimonial e sucessório, cobrança de alimentos, regulamentação de visitas"
        },
        serviços: {
            titulo: "Como podemos te ajudar?",
            descrição: "Estamos aqui para ajudar você a resolver suas questões jurídicas de forma rápida e eficiente.",
            items: [
                {
                    icon: "scale",
                    titulo: "Divórcio",
                    texto: "Oferecemos assessoria completa em processos de divórcio, auxiliando na resolução de questões como partilha de bens, guarda de filhos e pensão alimentícia. Nosso objetivo é garantir um processo justo e ágil, sempre preservando os interesses de nossos clientes."
                },
                {
                    icon: "hand-coins",
                    titulo: "Pensão",
                    texto: "Atuamos na definição e revisão de pensão alimentícia, buscando assegurar os direitos de quem precisa de suporte financeiro após uma separação. Defendemos tanto os interesses de quem paga quanto de quem recebe a pensão, sempre de acordo com a legislação vigente."
                },
                {
                    icon: "house",
                    titulo: "Inventário",
                    texto: "Prestamos serviços de orientação e condução de inventários, seja pela via judicial ou extrajudicial. Nosso foco é garantir uma partilha de bens eficiente e pacífica, respeitando os direitos de todos os herdeiros e minimizando conflitos familiares."
                },
                {
                    icon: "Balance",
                    titulo: "União Estável",
                    texto: "Orientamos na formalização e dissolução de uniões estáveis, garantindo o reconhecimento de direitos patrimoniais e sucessórios. Ajudamos a elaborar contratos de convivência e a resolver disputas de maneira amigável e segura."
                },
                {
                    icon: "baby",
                    titulo: "Ação de Guarda",
                    texto: "Especializados em ações de guarda, buscamos assegurar o bem-estar das crianças e adolescentes, garantindo que a decisão judicial leve em conta o melhor interesse dos menores. Trabalhamos para definir acordos de guarda de forma justa e equilibrada."
                },
                {
                    icon: "wallet",
                    titulo: "Cobrança de Alimentos",
                    texto: "Especializados em ações de cobrança de alimentos, trabalhamos para garantir o cumprimento das obrigações alimentares, assegurando o sustento necessário aos dependentes. Atuamos tanto na cobrança quanto na defesa, com foco na justiça e na dignidade"
                },
                {
                    icon: "handshake",
                    titulo: "Regulamentação de Visitas",
                    texto: "Assistimos nossos clientes na regulamentação de visitas, garantindo o direito de convivência familiar. Buscamos acordos que respeitem os interesses da criança e dos pais, promovendo um ambiente seguro e saudável para todos."
                }
            ],
        },
        sobre: {
            texto: "Advogada especializada em Direito de Família e Sucessões, com vasta experiência em auxiliar clientes na resolução de questões sensíveis e complexas. Ao longo dos anos, tenho atuado com dedicação e profissionalismo em casos de divórcio, guarda de filhos, pensão alimentícia, inventários e testamentos, sempre buscando soluções que protejam os interesses e o patrimônio de meus clientes. Acredito que cada situação familiar exige uma abordagem única, e estou comprometido em oferecer um atendimento humanizado, garantindo que todas as decisões sejam tomadas de forma transparente e com foco no bem-estar familiar"
        },
        questões: [
            {
                questão: 'Quais são os tipos de divórcio e qual a diferença entre eles?',
                resposta: 'Existem dois tipos de divórcio: o consensual e o litigioso. No divórcio consensual, ambas as partes estão de acordo com os termos da separação, o que geralmente torna o processo mais rápido e menos custoso. Já no divórcio litigioso, há divergências entre as partes, sendo necessário um processo judicial mais longo, onde o juiz decide sobre questões como partilha de bens, guarda dos filhos e pensão.'         
            },
            {
                questão: 'O que é pensão alimentícia e quem tem direito?',
                resposta: 'A pensão alimentícia é um valor pago regularmente para o sustento de dependentes, como filhos, cônjuge ou outros familiares. No caso dos filhos, a pensão é devida até que atinjam a maioridade ou concluam seus estudos. Cônjuges também podem ter direito à pensão, dependendo das circunstâncias do divórcio e da capacidade financeira de cada parte.'         
            },
            {
                questão: 'O que acontece se a pensão alimentícia não for paga?',
                resposta: 'Se a pensão alimentícia não for paga, o beneficiário pode entrar com uma ação judicial para cobrar os valores devidos. Em casos graves, o devedor pode sofrer sanções, como a penhora de bens e até prisão, de acordo com a legislação brasileira.'         
            },
            {
                questão: 'Como funciona a guarda compartilhada?',
                resposta: 'Na guarda compartilhada, os pais dividem a responsabilidade de criar os filhos, mesmo que a residência seja fixada com um deles. Ambos têm o direito de tomar decisões importantes sobre a vida da criança, como educação e saúde, promovendo uma convivência equilibrada com ambos os pais.'         
            },
            {
                questão: 'O que é alienação parental?',
                resposta: 'Alienação parental ocorre quando um dos pais interfere no relacionamento do filho com o outro, prejudicando a imagem ou tentando afastar o convívio. Essa prática pode causar sérios danos emocionais e é considerada crime, cabendo ao juiz adotar medidas para preservar o vínculo familiar.'         
            },
            {
                questão: 'O que é e como funciona o inventário?',
                resposta: 'O inventário é o processo legal de partilha dos bens de uma pessoa falecida entre seus herdeiros. Pode ser feito judicialmente, quando há conflito entre os herdeiros, ou extrajudicialmente, se todos estiverem de acordo e o falecido não tiver deixado testamento. A partilha dos bens só pode ocorrer após a quitação de dívidas e tributos.'         
            },
            {
                questão: 'É possível contestar um testamento?',
                resposta: 'Sim, um testamento pode ser contestado judicialmente se houver suspeita de vício de consentimento (como coação ou fraude), se ele não atender às exigências legais de forma ou se não observar os direitos dos herdeiros necessários. Em casos assim, o testamento pode ser anulado parcial ou totalmente.'
            }
        ]
    }
}

export function getDictionary(){
    return DICTIONARY
}