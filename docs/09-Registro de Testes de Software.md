# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.


| `Caso de Teste`          | `CT-01`                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `Requisitos  Associados` | RF-01- O site deve apresentar informações sobre três grandes categorias de animais (silvestres, domésticos e de criação); <br>RNF-04- O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).;</br> RNF-05- O site deve ser desenvolvido com layout clean e organizado para o usuário. |
| `Objetivo do Teste`      | Verificar se as informações estão sendo dispostas da forma correta. E como está o layout do site. |
| `Passos`                 | 1. Abrir o navegador Web de preferência do usuário; <br> 2. Informar a URL do site;</br> 3. Visualizar a página principal bem como seu conteúdo. |
| Saída esperada:          | • As notícias devem ser dispostas de forma correta no site; <br> • Deve ser apresentado uma imagem central, o menu acima e também um pequeno resumo sobre as categorias;</br |
| Saída do sistema:        |  ![01](https://user-images.githubusercontent.com/86898010/144762697-48e246fa-57b7-42dd-a9d3-817249a5ba65.jpeg) • imagem central, o menu acima![02](https://user-images.githubusercontent.com/86898010/144762726-e86a53de-5520-45f6-8b97-ef23e29bab5b.png)•um pequeno resumo sobre as categorias e noticias dispostas de forma correta no site. |
| Registro de execução:    | Êxito no teste                                               |





|      | `Caso de Teste`          | `CT-02`                                                      |
| ---- | ------------------------ | ------------------------------------------------------------ |
|      | `Requisitos  Associados` | RNF-02: O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada. |
|      | `Objetivo do Teste`      | Verificar a responsividade do site em dispositivos móveis    |
|      | `Passos`                 | 1. Abrir o navegador Web através de um dispositivo móvel; <br> 2. Informar a URL do site;</br> 3. Verificar a visualização do site no dispositivo e se os conteúdos estão sendo dispostos da forma correta. |
|      | `Critérios de Êxito`     | •  O site deve apresentar responsividade adequada ao dispositivo de utilização, seja ele desktop ou mobile. |
|      | Saída do sistema:        |![03](https://user-images.githubusercontent.com/86898010/144762828-bc03384b-2b6e-4155-8305-5e51c822e366.jpeg)• Responsividade em dispositivo móvel•![04](https://user-images.githubusercontent.com/86898010/144762836-43ddd238-6ffb-46dc-81aa-4408a53c5020.jpeg)Responsividade em dispositivo laptop![05](https://user-images.githubusercontent.com/86898010/144762842-2023f0a2-9800-4044-9336-df34fafa14b5.jpeg)• Responsividade em dispositivo Desktop |
|      | Registro de execução:    | Êxito no teste                                               |

=====

| `Caso de Teste`          | `CT-03`                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `Requisitos  Associados` | RF-03: O site deve oferecer a função de pesquisa para o usuário buscar informações sobre espécies específicas. |
| `Objetivo do Teste`      | Verificar se o campo de pesquisa está funcionando corretamente, bem como seu direcionamento |
| `Passos`                 | 1. Abrir o navegador web do celular do usuário; <br> 2. Informar a URL do site;</br> 3. Inserir a espécie desejada no campo de pesquisas; <br> 4. Aguardar o carregamento da página </br> |
| `Critérios de Êxito`     | • O site deve apresentar em tela o resultado solicitado pelo usuário; <br> • Caso a espécie não esteja em nosso banco de dados, o site deve apresentar mensagem informando isso ao usuário. </br> |
| Saída do sistema:        | ![](\pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais\docs\img registro de teste\06.jpg)• Barra de pesquisa não encaminha os usuário pra página solicitada é não mostra mensagem caso não esteja em nosso banco de dados. |
| Registro de execução:    | Falha no teste                                               |

=====

| `Caso de Teste`          | `CT-04`                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `Requisitos  Associados` | RFN -01: O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). |
| `Objetivo do Teste`      | Verificar se o site está sendo hospedado e disposto de forma web. |
| `Passos`                 | 1. Abrir o navegador web do celular do usuário; <br> 2. Informar a URL do site.</br> |
| `Critérios de Êxito`     | • O site deve abrir corretamente através do link disposto.   |
| Saída do sistema:        | ![09](C:\Users\User\Desktop\pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais\docs\img registro de teste\09.jpg)Site hospedado e disposto de forma web. (link https://wikipets.netlify.app/) |
| Registro de execução:    | Êxito no teste                                               |

=====

| `Caso de Teste`          | `CT-05`                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `Requisitos  Associados` | RF - 02: O site deve apresentar as fontes de onde as informações foram retiradas. |
| `Objetivo do Teste`      | Verificar se as informações estão referenciadas corretamente. |
| `Passos`                 | 1. Abrir o navegador web do celular do usuário; <br> 2. Informar a URL do site.</br> |
| `Critérios de Êxito`     | • O site deve conter a fonte das informações dispostas.      |
| Saída do sistema:        | ![07](C:\Users\User\Desktop\pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais\docs\img registro de teste\07.jpg)![08](C:\Users\User\Desktop\pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais\docs\img registro de teste\08.jpg)• O site possui fonte confirmando a veracidade da informações. |
| Registro de execução:    | Êxito no teste                                               |
