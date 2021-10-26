# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

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
