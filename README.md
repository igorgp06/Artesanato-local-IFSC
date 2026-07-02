# Casa Flor de Barro - Artesanato Local IFSC

Projeto acadêmico desenvolvido para a disciplina de Programação para Internet do IFSC. O site apresenta uma loja fictícia de artesanato local chamada **Casa Flor de Barro**, com foco em divulgação de produtos artesanais, galeria de itens e contato para pedidos pelo WhatsApp.

## Tema do projeto

**Sub 3: Artesanato local com galeria de fotos e pedidos via WhatsApp.**

A ideia principal do site é simular uma pequena loja de artesanato local, mostrando peças feitas à mão, informações da loja e formas simples de contato.


## Parte 1 - Funcionalidades principais do site

### 1. Página inicial

A página inicial apresenta a loja **Casa Flor de Barro** e explica rapidamente a proposta do projeto: divulgar peças artesanais feitas à mão e facilitar o contato com o cliente.

Principais elementos da página inicial:

- Header com menu de navegação.
- Hero com apresentação da loja.
- Botão para acessar a galeria.
- Botão para fazer pedido pelo WhatsApp.
- Seção de categorias, como cerâmica, trançados e bordados.
- Chamada final incentivando o usuário a visitar a galeria ou entrar em contato.

### 2. Galeria de produtos

A galeria funciona como uma vitrine dos produtos. Cada card apresenta uma peça artesanal com informações básicas.

Cada produto possui:

- Categoria.
- Nome do produto.
- Pequena descrição.
- Preço fictício.
- Botão para pedir pelo WhatsApp.

### 3. Página sobre e contato

A página de contato apresenta informações sobre a loja fictícia e oferece formas de comunicação.

Ela contém:

- Texto explicando a proposta da loja.
- Telefone/WhatsApp.
- E-mail.
- Endereço fictício.
- Botão para chamar no WhatsApp.
- Formulário de contato visual.

O formulário é apenas visual, ou seja, ele representa como seria uma área de envio de mensagem.

### 4. Responsividade

O site foi pensado para funcionar em computador e celular. No mobile, o menu se transforma em um menu lateral, abrindo pela direita da tela.

Quando o menu mobile abre:

- O restante da página fica escurecido com um overlay.
- A rolagem da página é travada.
- O botão de fechar fica dentro do menu lateral.
- O menu pode ser fechado pelo X, pelo fundo escuro, pela tecla ESC ou ao clicar em algum link.

---

## Parte 2 - Explicação das partes principais do código

Nesta segunda parte, a ideia é explicar rapidamente como o projeto foi organizado e como os arquivos trabalham juntos.

### 1. Estrutura geral do projeto

O projeto foi feito com HTML, CSS e JavaScript puro, usando Bootstrap Icons apenas para os ícones.

Estrutura principal:

```text
Artesanato-Local-IFSC/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   ├── css/
│   │   ├── index.css
│   │   ├── global/
│   │   │   ├── global.css
│   │   │   ├── normalize.css
│   │   │   ├── variables.css
│   │   │   ├── header.css
│   │   │   └── footer.css
│   │   └── pages/
│   │       ├── main/main.css
│   │       ├── gallery/gallery.css
│   │       └── contact/contact.css
│   ├── html/
│   │   ├── galeria.html
│   │   └── contato.html
│   └── js/
│       └── header.js
```

### 2. HTML das páginas

Cada página HTML tem a mesma base:

- `head`, com título, arquivo CSS principal e Bootstrap Icons.
- `header`, com a navegação.
- `main`, com o conteúdo específico da página.
- `footer`, com informações finais e link do repositório.
- Script `header.js`, responsável pelo menu responsivo.

### 3. Organização dos CSS

O projeto usa um arquivo CSS principal chamado `index.css`. Ele não guarda todos os estilos diretamente, mas importa outros arquivos menores.

Exemplo:

```css
@import url('./global/global.css');
@import url('./pages/main/main.css');
@import url('./pages/gallery/gallery.css');
@import url('./pages/contact/contact.css');
```

Isso ajuda a deixar o projeto mais organizado, porque cada parte do site fica em um arquivo próprio.

### 4. Arquivos globais

Dentro da pasta `global`, ficam os estilos que são usados no site inteiro.

Principais arquivos:

- `variables.css`: guarda as cores principais do projeto em variáveis CSS.
- `normalize.css`: remove margens/paddings padrões e ajuda a padronizar o visual.
- `header.css`: estiliza o cabeçalho e o menu mobile.
- `footer.css`: estiliza o rodapé.
- `global.css`: importa todos os arquivos globais.

As variáveis de cor ficam no `variables.css`, por exemplo:

```css
:root {
    --color-bg: #F2E8D8;
    --color-surface: #FFF8ED;
    --color-primary: #4A2E1F;
    --color-secondary: #9C6B3E;
    --color-accent: #446B5C;
    --color-gold: #C9A35B;
    --color-dark: #17120F;
}
```

Com isso, se for necessário trocar a identidade visual do site, basta alterar as cores em um lugar só.

### 5. CSS das páginas

Os arquivos dentro de `assets/css/pages` cuidam de partes específicas:

- `main.css`: estilos da página inicial.
- `gallery.css`: estilos da galeria de produtos.
- `contact.css`: estilos da página de contato.

Essa separação evita deixar um único CSS gigante e facilita encontrar o que precisa ser alterado.

### 6. Header e menu responsivo

O header é usado nas três páginas. Ele contém:

- Logo/nome da loja.
- Links para Início, Galeria e Sobre e contato.
- Botão de abrir menu no celular.
- Menu lateral mobile.
- Overlay escuro para fechar o menu.

No desktop, os links aparecem normalmente no topo. No celular, os links ficam escondidos e aparecem apenas quando o usuário toca no botão de menu.

O menu mobile usa classes como:

- `.navbar-links`: área do menu.
- `.navbar-links.active`: estado do menu aberto.
- `.menu-overlay.active`: fundo escuro visível.
- `body.menu-open`: trava a rolagem da página.

### 7. JavaScript do header

O arquivo `header.js` controla o comportamento do menu.

Principais funções:

- `openMenu()`: abre o menu lateral e trava a rolagem da página.
- `closeMenu()`: fecha o menu e devolve o usuário para a mesma posição da página.
- `toggleMenu()`: alterna entre abrir e fechar.
- `setActiveLink()`: marca automaticamente o link da página atual.

O JavaScript também permite fechar o menu de várias formas:

- Clicando no botão X.
- Clicando no fundo escuro.
- Clicando em um link do menu.
- Apertando a tecla ESC.

---

# Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap Icons
- Git/GitHub

---

# Desenvolvedores responsáveis

- Igor Gonçalves
- Samuel da Silveira

---

## Controle Versional (GIT)

O projeto segue o seguinte padrão de sufixos:

| Sufixo    | Descrição                                                                  |
| --------- | -------------------------------------------------------------------------- |
| [WORK]    | Versão em desenvolvimento, sujeita a alterações.                           |
| [ADD]     | Adição de algo novo para o projeto, sem remoções consideráveis.            |
| [RE-WORK] | Alteração considerável no projeto, com muitas remoções e alterações.       |
| [DEL]     | Remoção de pastas, linhas de código, imagens, etc.                         |
| [UPDATE]  | Melhorias de performance, refatorações, etc.                               |
| [PATCH]   | Correção de algo que funcionava, mas de forma inadequada.                  |
| [INFO]    | Alterações de informações, como README ou conteúdo textual do site.        |
| [FIX]     | Correção de falhas.                                                        |
| [DEPLOY]  | Relacionado ao primeiro o deploy do projeto. Pode ser usado uma vez só.    |
| [FINAL]   | Versão final do projeto, sem mais alterações e/ou remoções significativas. |

## Licença

Este projeto está licenciado sob a licença Apache License Version 2.0.

## Desenvolvedores Responsáveis

Igor Gonçalves - [Site do desenvolvedor](https://igdeveloper.com.br) | [GitHub do desenvolvedor](https://github.com/igorgp06)     
Samuel da Silveria - [GitHub do desenvolvedor](https://github.com/samukasilveira)