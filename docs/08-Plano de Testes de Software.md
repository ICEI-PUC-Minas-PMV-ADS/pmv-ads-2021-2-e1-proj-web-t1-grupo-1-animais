# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas....
 

|  `Caso de Teste`           |  `CT-01`
|----------------------------|-----------------------------------------------------------------|
| `Requisitos  Associados`    |RF-01- O site deve apresentar informações sobre três grandes categorias de animais (silvestres, domésticos e de criação); <br>RNF-04- O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).;</br> RNF-05- O site deve ser desenvolvido com layout clean e organizado para o usuário.  |
|   `Objetivo do Teste`      |Verificar se as informações estão sendo dispostas da forma correta. E como está o layout do site. |
|         `Passos`           |1. Abrir o navegador Web de preferência do usuário; <br> 2. Informar a URL do site;</br> 3. Visualizar a página principal bem como seu conteúdo. |
|   `Critérios de Êxito`     |• As notícias devem ser dispostas de forma correta no site; <br> • Deve ser apresentado uma imagem central, o menu acima e também um pequeno resumo sobre as categorias;</br> |

=====

|  `Caso de Teste`           |  `CT-02`
|----------------------------|-----------------------------------------------------------------|
| `Requisitos  Associados`    |RNF-02: O site deverá ser responsivo, permitindo a visualização em um celular de forma adequada.  |
|   `Objetivo do Teste`      |Verificar a responsividade do site em dispositivos móveis |
|         `Passos`           |1. Abrir o navegador Web através de um dispositivo móvel; <br> 2. Informar a URL do site;</br> 3. Verificar a visualização do site no dispositivo e se os conteúdos estão sendo dispostos da forma correta.  |
|   `Critérios de Êxito`     |•  O site deve apresentar responsividade adequada ao dispositivo de utilização, seja ele desktop ou mobile. |

=====

|  `Caso de Teste`           |  `CT-03`
|----------------------------|-----------------------------------------------------------------|
| `Requisitos  Associados`    |RF-03: O site deve oferecer a função de pesquisa para o usuário buscar informações sobre espécies específicas. |
|   `Objetivo do Teste`      | Verificar se o campo de pesquisa está funcionando corretamente, bem como seu direcionamento  |
|         `Passos`           |1. Abrir o navegador web do celular do usuário; <br> 2. Informar a URL do site;</br> 3. Inserir a espécie desejada no campo de pesquisas; <br> 4. Aguardar o carregamento da página </br>  |
|   `Critérios de Êxito`     |• O site deve apresentar em tela o resultado solicitado pelo usuário; <br> • Caso a espécie nao esteja em nosso banco de dados, o site deve apresentar mensagem informando isso ao usuário. </br> |

=====

|  `Caso de Teste`           |  `CT-04`
|----------------------------|-----------------------------------------------------------------|
| `Requisitos  Associados`    |RFN -01: O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku). |
|   `Objetivo do Teste`      | Verificar se o site está sendo hospedado e disposto de forma web.  |
|         `Passos`           |1. Abrir o navegador web do celular do usuário; <br> 2. Informar a URL do site.</br> |
|   `Critérios de Êxito`     |• O site deve abrir corretamente através do link disposto. |

=====

|  `Caso de Teste`           |  `CT-05`
|----------------------------|-----------------------------------------------------------------|
| `Requisitos  Associados`    |RF - 02: O site deve apresentar as fontes de onde as informações foram retiradas. |
|   `Objetivo do Teste`      | Verificar se as informações estão referenciadas corretamente. |
|         `Passos`           |1. Abrir o navegador web do celular do usuário; <br> 2. Informar a URL do site.</br> |
|   `Critérios de Êxito`     |• O site deve conter a fonte das informações dispostas. |