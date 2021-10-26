# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Nesta seção apresentamos a implementação do sistema por meio dos requisitos funcionais e não funcionais. Os requisitos atendidos são relacionados aos artefatos gerados e a estrutura de dados é apresentada. Por último, as instruções de acesso para verificação da implementação são listadas.

## Apresentação e Pesquisa de categorias de animais (RF-01, RF-02)

A tela inicial do site apresenta um menu por onde o usuário pode buscar um categoria específica:

![menu wikipets](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t1-grupo-1-animais/blob/main/src/img/menu%20wikipet.jpg)

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

### Instruções de acesso

1. Faça o download do arquivo do projeto (ZIP) ou clone o projeto a partir do repositório GitHub;
2. Descompacte o arquivo;
3. Abra o Visual Studio Code e execute o Live Server;
4. Abra um navegador de Internet e informe a seguinte URL: http://localhost:5500/index.html
