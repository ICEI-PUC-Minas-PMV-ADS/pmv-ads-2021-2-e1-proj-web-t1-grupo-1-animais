# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

<<<<<<< HEAD
<<<<<<< HEAD
Nesta seção apresentamos a implementação do sistema por meio dos requisitos funcionais e não funcionais. Os requisitos atendidos são relacionados aos artefatos gerados e a estrutura de dados é apresentada. Por último, as instruções de acesso para verificação da implementação são listadas.

## Apresentação e Pesquisa de categorias de animais (RF-01, RF-02)

A tela inicial do site apresenta um menu por onde o usuário pode buscar um categoria específica:

![menu wikipets](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais/blob/main/src/img/menu%20wikipet.jpg)

Além disso, o site contém uma seção que mostra uma imagem ilustrativa de cada categoria, junto a um texto que a descreve de maneira resumida. Ao lado, há uma barra de pesquisa com sugestões de espécies aleatórias que o usuário pode buscar.

![artigos wikipets](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais/blob/main/src/img/artigos%20wikipet.jpg)

### Requisitos atendidos

* RF-01
* RF-02

### Artefatos da funcionalidade

* index.html
* wikipet.css

### Estrutura de dados

```
<header class="menu-caixa">
            <div class="logo">
                <img src="img/logosite.png" />
            </div>
            <nav class="col-100">
                <div class="menu-categorias">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/domesticos.html">Domésticos</a></li>
                        <li><a href="/agropecuarios.html">Agropecuários</a></li>
                        <li><a href="/insetos.html">Insetos</a></li>
                        <li><a href="/peconhentos.html">Peçonhentos</a></li>
                        <li><a href="/vacinacao.html">Vacinação</a></li>
                    </ul>
                </div>
            </nav>
            <div class="busca">
                <input placeholder="Pesquisar na Wikipet" type="text" />
            </div>
        </header>
```

```
<div class="artigos_barra_lateral">
            <div class="wrapper">
                <div class="artigos">
                    <article class="artigo criacao">
                        <picture>
                            <source media="(max-width: 320px)" srcset="./img/pig-100.jpg" type="image/jpg">
                            <img src="img/pig-250.jpg" alt="foto-criacao">
                        </picture>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam architecto beatae esse perferendis quis.</p>
                    </article>
                    <article class="artigo estimacao">
                        <picture>
                            <source media="(max-width: 320px)" srcset="./img/dog-100.jpg" type="image/jpg">
                            <img src="img/dog-250.jpg" alt="foto-estimacao">
                        </picture>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit velit corrupti exercitationem consequuntur quidem reprehenderit.</p>
                    </article>
                    <article class="artigo peconhento">
                        <picture>
                            <source media="(max-width: 320px)" srcset="./img/snake-100.jpg" type="image/jpg">
                            <img src="img/snake-250.jpg" alt="foto-peconhento">
                        </picture>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure numquam necessitatibus accusamus qui asperiores corrupti?</p>
                    </article>
                </div>
                <aside class="barra_pesquisa">
                    <h1>Pesquisa</h1>
                    <div class="campo_pesquisa">
                        <input placeholder="Pesquisar na Wikipet" type="text" />
                    </div>
                    <ul>
                        <li>Sugestão Aleatória</li>
                        <li>Sugestão Aleatória</li>
                        <li>Sugestão Aleatória</li>
                    </ul>
                </aside>
            </div>
        </div>
```

### Instruções de acesso

1. Faça o download do arquivo do projeto (ZIP) ou clone o projeto a partir do repositório GitHub;
2. Descompacte o arquivo;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra um navegador de Internet e informe a seguinte URL: http://localhost:5500/index.html
=======
Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.
=======
Nesta seção apresentamos a implementação do sistema por meio dos requisitos funcionais e não funcionais. Os requisitos atendidos são relacionados aos artefatos gerados e a estrutura de dados é apresentada. Por último, as instruções de acesso para verificação da implementação são listadas.
>>>>>>> ffd08ff21caa89e902320f84b289ee9a28f1bf08

## Apresentação e Pesquisa de categorias de animais (RF-01, RF-02)

<<<<<<< HEAD
> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
>>>>>>> 99ccc456776ddd8b9e0e86b0943306459c3faa0a
=======
A tela inicial do site apresenta um menu por onde o usuário pode buscar um categoria específica:

![menu wikipets](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais/blob/main/src/img/menu%20wikipet.jpg)

Além disso, o site contém uma seção que mostra uma imagem ilustrativa de cada categoria, junto a um texto que a descreve de maneira resumida. Ao lado, há uma barra de pesquisa com sugestões de espécies aleatórias que o usuário pode buscar.

![artigos wikipets](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais/blob/main/src/img/artigos%20wikipet.jpg)

### Requisitos atendidos

* RF-01
* RF-02

### Artefatos da funcionalidade

* index.html
* wikipet.css

### Estrutura de dados

```
<header class="menu-caixa">
            <div class="logo">
                <img src="img/logosite.png" />
            </div>
            <nav class="col-100">
                <div class="menu-categorias">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/domesticos.html">Domésticos</a></li>
                        <li><a href="/agropecuarios.html">Agropecuários</a></li>
                        <li><a href="/insetos.html">Insetos</a></li>
                        <li><a href="/peconhentos.html">Peçonhentos</a></li>
                        <li><a href="/vacinacao.html">Vacinação</a></li>
                    </ul>
                </div>
            </nav>
            <div class="busca">
                <input placeholder="Pesquisar na Wikipet" type="text" />
            </div>
        </header>
```

```
<div class="artigos_barra_lateral">
            <div class="wrapper">
                <div class="artigos">
                    <article class="artigo criacao">
                        <picture>
                            <source media="(max-width: 320px)" srcset="./img/pig-100.jpg" type="image/jpg">
                            <img src="img/pig-250.jpg" alt="foto-criacao">
                        </picture>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam architecto beatae esse perferendis quis.</p>
                    </article>
                    <article class="artigo estimacao">
                        <picture>
                            <source media="(max-width: 320px)" srcset="./img/dog-100.jpg" type="image/jpg">
                            <img src="img/dog-250.jpg" alt="foto-estimacao">
                        </picture>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit velit corrupti exercitationem consequuntur quidem reprehenderit.</p>
                    </article>
                    <article class="artigo peconhento">
                        <picture>
                            <source media="(max-width: 320px)" srcset="./img/snake-100.jpg" type="image/jpg">
                            <img src="img/snake-250.jpg" alt="foto-peconhento">
                        </picture>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure numquam necessitatibus accusamus qui asperiores corrupti?</p>
                    </article>
                </div>
                <aside class="barra_pesquisa">
                    <h1>Pesquisa</h1>
                    <div class="campo_pesquisa">
                        <input placeholder="Pesquisar na Wikipet" type="text" />
                    </div>
                    <ul>
                        <li>Sugestão Aleatória</li>
                        <li>Sugestão Aleatória</li>
                        <li>Sugestão Aleatória</li>
                    </ul>
                </aside>
            </div>
        </div>
```

### Instruções de acesso

1. Faça o download do arquivo do projeto (ZIP) ou clone o projeto a partir do repositório GitHub;
2. Descompacte o arquivo;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra um navegador de Internet e informe a seguinte URL: http://localhost:5500/index.html
>>>>>>> ffd08ff21caa89e902320f84b289ee9a28f1bf08
