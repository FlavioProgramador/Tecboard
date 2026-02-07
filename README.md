# Tecboard

Plataforma para criação e organização de eventos de tecnologia por área temática. Projeto desenvolvido junto à [Alura](https://www.alura.com.br/).

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

## Sobre

O Tecboard permite criar eventos e visualizá-los organizados por tema — como Front-end, Back-end, DevOps, Inteligência Artificial, Data Science e Cloud. Ao cadastrar um evento, ele aparece automaticamente na seção do tema correspondente.

## Funcionalidades

- Cadastro de eventos com nome, capa (URL de imagem), data e tema
- Organização automática dos eventos por área temática
- Exibição dinâmica — seções de temas só aparecem quando possuem eventos
- Validação de formulário com campos obrigatórios

## Tecnologias

- **React 19** — com hooks (`useState`) e API `action` para formulários
- **Vite 7** — build tool e dev server com HMR
- **CSS modular** — cada componente possui seu próprio arquivo de estilos
- **ESLint** — linting com plugins para React

## Estrutura do projeto

```
src/
├── App.jsx                    # Componente principal com estado e lógica
├── App.css                    # Estilos globais (container, layout)
├── main.jsx                   # Ponto de entrada
├── index.css                  # Reset CSS e fonte base
└── components/
    ├── Banner/                # Banner principal da página
    ├── Botao/                 # Botão reutilizável
    ├── CampoDeEntrada/        # Input genérico de formulário
    ├── CampoDeFormulario/     # Fieldset wrapper para campos
    ├── CardEvento/            # Card de exibição de evento
    ├── FormularioDeEvento/    # Formulário de criação de evento
    ├── Label/                 # Label estilizada
    ├── ListaSuspensa/         # Select dropdown reutilizável
    ├── Tema/                  # Título da seção temática
    └── TituloDeFormulario/    # Título do formulário
```

## Como rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Fontes

- [Work Sans](https://fonts.google.com/specimen/Work+Sans) — textos gerais
- [Orbitron](https://fonts.google.com/specimen/Orbitron) — títulos e tags
