
const lngs = {
    pt: {
      nativeName: 'Portuguese'
    },
    en: {
      nativeName: 'English'
    },
    es: {
      nativeName: 'Spanish'
    }
  };

  const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
    $('title').text($.t('head.title'))
    $('meta[name=description]').attr('content', $.t('head.description'))
  }

  const inTranslate = "Em construção";

  $(function() {

    i18next
      .use(i18nextBrowserLanguageDetector)
      .init({
        debug: true,
        fallbackLng: 'pt',
        resources: {
          pt: {
            translation: {
              head: {
                title: 'Wi-For - Wi-Fi público e gratuito em Fortaleza',
                description: ' Wi-For tem como princípios a promoção da cidadania e a inclusão digital em toda cidade de Fortaleza'
              },
              acess: {
                central: "Conteúdo Central |",
                centralAtalho: "alt + 1",
                menuAtalho: "alt + 2",
                rodapeAtalho: "alt + 3",
                menu: "Menu |",
                rodape: "Rodapé |",
                contrast: "auto contraste",
                deacFont: "Diminuir fonte",
                fontDim: "A-",
                incFont: "Aumentar fonte",
                fontAum: "A+",
                defFont: "Texto fonte Padrão",
                fontDef: "A",
                info: "Acesso a informação",
                transp: "Transparência",
                serv: "Serviços",
                legislacao: "Legislação",
              },
              nav: {
                logoPref: 'Logomarca da Prefeitura',
                logoWifor: 'Logomarca Wi-For',
                home: 'Início',
                about: 'Sobre',
                connect: 'Como se conectar',
                points: 'Pontos de Wi-Fi',
                partners: 'Parceiros',
                faq: 'Dúvidas Frequentes',
                contact: 'Fale conosco',
              },
              about: {
                title: "Wi-Fi público e gratuito em Fortaleza – O Programa Wi-For",
                description: `
                  O Wi-For tem como princípios a promoção da cidadania e a inclusão digital, possibilitando a democratização do acesso à Internet e
                  facilitando ao cidadão o acesso à informação, à cultura, aos serviços digitais e à educação.
                  Hoje são <b class="text-orange">360 pontos</b> disponíveis em diversas localidades de Fortaleza.`
              },
              circle: {
                title: "Expansão da rede",
                description: "Wi-Fi mais perto de você",
                dispo: "Disponibilidade",
                dispoDesc: "Internet 24 horas por dia 7 dias por semana",
                inc: "Inclusão Digital",
                incDes: "Democratização do acesso",
                connect: "Conectividade",
                connectDes: "Internet para quem mais precisa",
                cida: "Cidadania Digital",
                cidaDes: "Direitos e deveres da cultura de acesso à internet.",
                seg: "Segurança",
                segDes: "Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD."
              },
              connect: {
                pass: "Passo",
                one: "01",
                two: "02",
                three: "03",
                localize: "Localize",
                localizeSmall: "Procure em um dos diversos pontos de wi-fi público de Fortaleza.",
                cad: "Efetue seu cadastro",
                cadSmall: "Preencha seus dados apenas na primeira vez que for utilizar o serviço.",
                assist: "Assista ao vídeo",
                assistSmall: "Assista ao vídeo do parceiro da Prefeitura e clique para navegar.",
              },
              mapa: {
                title: "Locais com Wi-Fi por tipo",
                squares: "Praças",
                terminais: "Terminais e mini-terminais",
                brt: "BRT´S",
                equipamento: "Equipamentos públicos",
                outros: "outros",
                subtitle: "Saiba onde há Wi-Fi público e gratuito em Fortaleza",
                quantUsu: "675.022 - Total de usuários cadastrados",
                infoAddTitle: "Tamanho da frota de ônibus com Wi-Fi",
                infoUrban: "1.359 - Ônibus de linha urbana com Wi-Fi*",
                infoMetro:"447 - Ônibus de linha metropolitana com Wi-Fi**",
                infoRota: "Rotas e itinerários atendidos",
                infoUrbanLin:`<b>Urbano*</b> Todas as linhas`,
                infoMetLin:`<b>Metropolitano**</b> Em todas as linhas à exceção da Empresa São Benedito`,
                quantPontos: "360",
                quantPontosTxt: "Pontos de Wi-Fi",
                quantLocations: "104",
                quantLocationsTxt: "Fortaleza",
                spotsSquares: "104 pontos",
                quantSquares: "praças",
                spotsBrt: "17 pontos",
                quantBrt: "estações de BRT",
                spotsTer: "9 pontos",
                quantTer: "terminais e mini-terminais de ônibus",
                spotsCucas: "1 ponto",
                quantCucas: "cucas",
                spotsAren: "16 pontos",
                quantAren: "areninhas",
                spotsBm: "45 pontos",
                quantBm: "Calçadão da Beira-mar",
                spotsPi: "9 pontos",
                quantPi: "Calçadão da Praia de Iracema",
                preposition: "em"
              },
              programs:{
                article: `Informações sobre as mais diversas áreas da cidade, em formatos abertos,
                para estimular a inovação, o empreendendorismo e a geração de negócios em Fortaleza.`,
                botao: "Saiba mais"
              },
              faq: {
                one: "Preciso pagar pra usar?",
                two: "Preciso realizar algum cadastro?",
                three: "Onde estão os pontos do programa Wi-For?",
                four: "Quem pode acessar o Wi-For?",
                five: "O sinal está fora do ar. O que fazer neste caso?",
                six: "A Prefeitura fará coleta de algum dado pessoal durante a navegação?",
                seven: `
                Estou em um ponto que, segundo o mapa, tem cobertura de Wi-fi, mas não encontro a rede. O que fazer?
                `,
                answerZero: "Não. O serviço é gratuito.",
                answerOne: "Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.",
                answerTwo: `Pode encontrar no mapa a seguir <a href="#" class="linkAnchorFor">Mapa</a>.`,
                answerthree: "Todas as pessoas que circulam nos locais onde há um ponto instalado do Programa <b>Wi-For</b>",
                answerFour: `O usuário deverá ligar para a Central <a href="tel:156">156</a> ou fale conosco e informar o endereço do wi-fi para correção.`,
                answerFive: `Não. As regras do programa proíbem a coleta de dados pessoais. Só coletamos dados referentes à qualidade do serviço,
                    como velocidade de conexão, número de usuários simultâneos, consumo total de banda e disponibilidade do serviço nas localidades,
                    por exemplo, que não violam a privacidade dos cidadãos e permitem à Prefeitura monitorar e melhorar a qualidade do serviço oferecido.`,
                answerSix: "Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.",
                answerSeven:`
                O sinal do Wi-fi pode sofrer interferência por vários motivos, dentre os mais comuns temos árvores e construções.
                Além disso, o serviço não é oferecido em toda a área da localidade (cobertura não é 100%).
                Portanto sugerimos que busque se locomover pela localidade e se aproximar do rádio que emite o sinal de Wi-fi.
                `
              },
              form: {
                name: "nome",
                email: "email",
                message: "mensagem",
                messagePlace: "Envie sua mensagem",
                namePlace: "Nome completo",
                emailPlace: "seu email",
                send: "enviar"
              },
              footer: {
                btnTop: "Voltar ao topo"
              },
            }
          },
          en: {
            translation: {
              head: {
                title: 'Wi-For - Wi-Fi público e gratuito em Fortaleza',
                description: ' Wi-For tem como princípios a promoção da cidadania e a inclusão digital em toda cidade de Fortaleza'
              },
              acess: {
                central: "Conteúdo Central |",
                centralAtalho: "alt + 1",
                menuAtalho: "alt + 2",
                rodapeAtalho: "alt + 3",
                menu: "Menu |",
                rodape: "Rodapé |",
                contrast: "auto contraste",
                deacFont: "Diminuir fonte",
                fontDim: "A-",
                incFont: "Aumentar fonte",
                fontAum: "A+",
                defFont: "Texto fonte Padrão",
                fontDef: "A",
                info: "Acesso a informação",
                transp: "Transparência",
                serv: "Serviços",
                legislacao: "Legislação",
              },
              nav: {
                logoPref: 'Logo da Prefeitura',
                logoWifor: 'Logo Wi-For',
                home: 'Home',
                about: 'About',
                connect: 'How connect',
                points: 'Points Wi-Fi',
                partners: 'Partners',
                faq: 'Frequently Questions',
                contact: 'Talk with us',
              },
              about: {
                title: "Wi-Fi público e gratuito em Fortaleza – O Programa Wi-For",
                description: `
                      O Wi-For tem como princípios a promoção da cidadania e a inclusão digital, possibilitando a democratização do acesso à Internet e
                      facilitando ao cidadão o acesso à informação, à cultura, aos serviços digitais e à educação.
                      Hoje são <b class="text-orange">360 pontos</b> disponíveis em diversas localidades de Fortaleza.`
              },
              circle: {
                title: "Expansão da rede",
                description: "Wi-Fi mais perto de você",
                dispo: "Disponibilidade",
                dispoDesc: "Internet 24 horas por dia 7 dias por semana",
                inc: "Inclusão Digital",
                incDes: "Democratização do acesso",
                connect: "Conectividade",
                connectDes: "Internet para quem mais precisa",
                cida: "Cidadania Digital",
                cidaDes: "Direitos e deveres da cultura de acesso à internet.",
                seg: "Segurança",
                segDes: "Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD."
              },
              connect: {
                pass: "Passo",
                one: "01",
                two: "02",
                three: "03",
                localize: "Localize",
                localizeSmall: "Procure em um dos diversos pontos de wi-fi público de Fortaleza.",
                cad: "Efetue seu cadastro",
                cadSmall: "Preencha seus dados apenas na primeira vez que for utilizar o serviço.",
                cadBt: "Cadastro",
                assist: "Assista ao vídeo",
                assistSmall: "Assista ao vídeo do parceiro da Prefeitura e clique para navegar.",
              },
              mapa: {
                title: "Locais com Wi-Fi por tipo",
                squares: "Praças",
                terminais: "Terminais e Onibus",
                brt: "BRT´S",
                equipamento: "Equipamentos público",
                outros: "outros",
                subtitle: "Saiba onde há Wi-Fi público e gratuito em Fortaleza",
                quantPontos: "102 - Pontos de Wi-Fi",
                quantUsu: "675.022 - Total de usuários cadastrados",
                quantSquares: "67 - Praças",
                quantCucas: "3 - Cucas",
                quantTer: " 7 - Terminais de ônibus",
                quantBrt: "17 - Estações de BRT",
                quantAren: "3 - Areninhas",
                quantCalcadao: " 2 - Calçadões ( Beira-mar e Praia de Iracema )",
                infoAddTitle: "Tamanho da frota de ônibus com Wi-Fi",
                infoUrban: "1.359 - Pontos linha Urbana*",
                infoMetro:"447 - Pontos Metropolitano**",
                infoRota: "Rotas e itinerários atendidos",
                infoUrbanLin:`<b>Urbano*</b> Todas as linhas`,
                infoMetLin:`<b>Metropolitano**</b> Em todas as linhas à exceção da Empresa São Benedito`
              },
              programs:{
                article: `Informações sobre as mais diversas áreas da cidade, em formatos abertos,
                para estimular a inovação, o empreendendorismo e a geração de negócios em Fortaleza.`,
                botao: "Saiba mais"
              },
              faq: {
                one: "Preciso pagar pra usar?",
                two: "Preciso realizar algum cadastro?",
                three: "Onde estão os pontos do programa Wi-For?",
                four: "Quem pode acessar o Wi-For?",
                five: "O sinal está fora do ar. O que fazer neste caso?",
                six: "A Prefeitura fará coleta de algum dado pessoal durante a navegação?",
                answerZero: "Não. O serviço é gratuito.",
                answerOne: "Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.",
                answerTwo: `Pode encontrar no mapa a seguir <a href="#" class="linkAnchorFor">Mapa</a>.`,
                answerthree: "Todas as pessoas que circulam nos locais onde há um ponto instalado do Programa <b>Wi-For</b>",
                answerFour: `O usuário deverá ligar para a Central <a href="tel:156">156</a> ou fale conosco e informar o endereço do wi-fi para correção.`,
                answerFive: `Não. As regras do programa proíbem a coleta de dados pessoais. Só coletamos dados referentes à qualidade do serviço,
                    como velocidade de conexão, número de usuários simultâneos, consumo total de banda e disponibilidade do serviço nas localidades,
                    por exemplo, que não violam a privacidade dos cidadãos e permitem à Prefeitura monitorar e melhorar a qualidade do serviço oferecido.`,
                answerSix: "Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.",
              },
              form: {
                name: "nome",
                email: "email",
                message: "mensagem",
                messagePlace: "Envie sua mensagem",
                namePlace: "Nome completo",
                emailPlace: "seu email",
                send: "enviar"
              },
              footer: {
                btnTop: "Voltar ao topo"
              },
            }
          },
          es: {
            translation: {
              head: {
                title: 'Wi-For - Wi-Fi público e gratuito em Fortaleza',
                description: ' Wi-For tem como princípios a promoção da cidadania e a inclusão digital em toda cidade de Fortaleza'
              },
              acess: {
                central: "Conteúdo Central |",
                centralAtalho: "alt + 1",
                menuAtalho: "alt + 2",
                rodapeAtalho: "alt + 3",
                menu: "Menu |",
                rodape: "Rodapé |",
                contrast: "auto contraste",
                deacFont: "Diminuir fonte",
                fontDim: "A-",
                incFont: "Aumentar fonte",
                fontAum: "A+",
                defFont: "Texto fonte Padrão",
                fontDef: "A",
                info: "Acesso a informação",
                transp: "Transparência",
                serv: "Serviços",
                legislacao: "Legislação",
              },
              nav: {
                logoPref: 'Logo da Prefeitura',
                logoWifor: 'Logo Wi-For',
                home: 'Principal',
                about: 'Sobre',
                connect: 'Ya connecion',
                points: 'Plantas Wi-Fi',
                partners: 'Parceiro',
                faq: 'Duvidas ',
                contact: 'Habla con a gente',
              },
              about: {
                title: "Wi-Fi público e gratuito em Fortaleza – O Programa Wi-For",
                description: `
                      O Wi-For tem como princípios a promoção da cidadania e a inclusão digital, possibilitando a democratização do acesso à Internet e
                      facilitando ao cidadão o acesso à informação, à cultura, aos serviços digitais e à educação.
                      Hoje são <b class="text-orange">102 pontos</b> disponíveis em diversas localidades de Fortaleza.`
              },
              circle: {
                title: "Expansão da rede",
                description: "Wi-Fi mais perto de você",
                dispo: "Disponibilidade",
                dispoDesc: "Internet 24 horas por dia 7 dias por semana",
                inc: "Inclusão Digital",
                incDes: "Democratização do acesso",
                connect: "Conectividade",
                connectDes: "Internet para quem mais precisa",
                cida: "Cidadania Digital",
                cidaDes: "Direitos e deveres da cultura de acesso à internet.",
                seg: "Segurança",
                segDes: "Wi-For, Respeita a privacidade dos seus dados e obdece no que diz respeito a LGPD."
              },
              connect: {
                pass: "Passo",
                one: "01",
                two: "02",
                three: "03",
                localize: "Localize",
                localizeSmall: "Procure em um dos diversos pontos de wi-fi público de Fortaleza.",
                cad: "Efetue seu cadastro",
                cadSmall: "Preencha seus dados apenas na primeira vez que for utilizar o serviço.",
                assist: "Assista ao vídeo",
                assistSmall: "Assista ao vídeo do parceiro da Prefeitura e clique para navegar.",
              },
              mapa: {
                title: "Locais com Wi-Fi por tipo",
                squares: "Praças",
                terminais: "Terminais e Onibus",
                brt: "BRT´S",
                equipamento: "Equipamentos público",
                outros: "outros",
                subtitle: "Saiba onde há Wi-Fi público e gratuito em Fortaleza",
                quantPontos: "102 - Pontos de Wi-Fi",
                quantUsu: "675.022 - Total de usuários cadastrados",
                quantSquares: "67 - Praças",
                quantCucas: "3 - Cucas",
                quantTer: " 7 - Terminais de ônibus",
                quantBrt: "17 - Estações de BRT",
                quantAren: "3 - Areninhas",
                quantCalcadao: " 2 - Calçadões ( Beira-mar e Praia de Iracema )"
              },
              programs:{
                article: `Informações sobre as mais diversas áreas da cidade, em formatos abertos,
                para estimular a inovação, o empreendendorismo e a geração de negócios em Fortaleza.`,
                botao: "Saiba mais"
              },
              faq: {
                one: "Preciso pagar pra usar?",
                two: "Preciso realizar algum cadastro?",
                three: "Onde estão os pontos do programa Wi-For?",
                four: "Quem pode acessar o Wi-For?",
                five: "O sinal está fora do ar. O que fazer neste caso?",
                six: "A Prefeitura fará coleta de algum dado pessoal durante a navegação?",
                answerZero: "Não. O serviço é gratuito.",
                answerOne: "Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.",
                answerTwo: `Pode encontrar no mapa a seguir <a href="#" class="linkAnchorFor">Mapa</a>.`,
                answerthree: "Todas as pessoas que circulam nos locais onde há um ponto instalado do Programa <b>Wi-For</b>",
                answerFour: `O usuário deverá ligar para a Central <a href="tel:156">156</a> ou fale conosco e informar o endereço do wi-fi para correção.`,
                answerFive: `Não. As regras do programa proíbem a coleta de dados pessoais. Só coletamos dados referentes à qualidade do serviço,
                    como velocidade de conexão, número de usuários simultâneos, consumo total de banda e disponibilidade do serviço nas localidades,
                    por exemplo, que não violam a privacidade dos cidadãos e permitem à Prefeitura monitorar e melhorar a qualidade do serviço oferecido.`,
                answerSix: "Sim. Na primeira vez que você for utilizar o serviço, é necessário fornecer alguns dados básicos.",
              },
              form: {
                name: "nome",
                email: "email",
                message: "mensagem",
                messagePlace: "Envie sua mensagem",
                namePlace: "Nome completo",
                emailPlace: "seu email",
                send: "enviar"
              },
              footer: {
                btnTop: "Voltar ao topo"
              },
            }
          }
        }
      }, (err, t) => {
        if (err) return console.error(err);
        jqueryI18next.init(i18next, $, {
          useOptionsAttr: true
        });

        // fill language switcher
        $("#languageSwitcher").hide();

        $('.btnPor').on('click', function() {
            i18next.changeLanguage('pt', () => {
                rerender();
            });
        });
        $('.btnEng').on('click', function() {
            i18next.changeLanguage('en', () => {
                rerender();
            });
        });
        $('.btnEsp').on('click', function() {
            i18next.changeLanguage('es', () => {
                rerender();
            });
        });
        rerender();
      });

  });
