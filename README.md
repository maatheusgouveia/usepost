# usepost 📰

Um blog fictício moderno, acessível e performático, criado como parte de um teste técnico para a empresa Avalon. Este projeto simula uma plataforma de leitura de artigos com listagem, detalhes de postagens, comentários e perfil dos autores, utilizando a [JSONPlaceholder](https://jsonplaceholder.typicode.com).

Versão online aqui: https://usepost.vercel.app

---

## ✨ Tecnologias Utilizadas

- [Next.js 15 (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [next-intl](https://next-intl.js.org) para internacionalização
- [Framer Motion](https://www.framer.com/motion/) para animações
- `fetch` nativo para requisições
- `@heroicons/react` para ícones
- Imagens do [Picsum Photos](https://picsum.photos)

---

## 📦 Como rodar localmente

### 1. Clone o projeto

```bash
git clone https://github.com/maatheusgouveia/usepost.git
cd usepost
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

---

## 🧠 Decisões Técnicas

### `fetch` nativo vs TanStack Query

Optei por usar o `fetch` nativo junto de uma função `api` customizada, evitando o uso de bibliotecas como TanStack Query, por alguns motivos:

- O projeto é estático e simples: não exige cache automático, invalidação, ou mutations complexas.
- Evitar dependências desnecessárias para um teste técnico simples.
- Melhor performance inicial sem overhead de hidratação do cache no client.
- Facilidade de uso com `async/await` diretamente nos Server Components.

Entretanto, TanStack Query seria ideal para cenários com:

- Estado compartilhado entre páginas
- Cache persistente entre navegação
- Mutations com revalidação
- Paginação real e controle refinado de background fetching

### Internacionalização com `next-intl`

O projeto foi internacionalizado utilizando `next-intl`, pois ele se adapta perfeitamente ao novo App Router do Next.js, permitindo carregar mensagens no servidor com suporte ao `getLocale`, `getMessages`, e `getTranslations`.

---

## ✅ Funcionalidades Implementadas

- Listagem de posts com layout responsivo em grid
- Página de detalhes do post com:
  - Imagem do post destacada
  - Tempo estimado de leitura
  - Comentários
- Página do autor com dados e seus posts
- Página "Sobre" com informações da carreira
- Seleção de idioma (🇧🇷/🇺🇸) com persistência via cookie
- Animações de entrada suaves com Framer Motion
- Layout acessível, responsivo e dark mode-ready

---

## 🔮 Melhorias Futuras

- 💾 **Paginação real** com backend que suporte isso (hoje todos os dados são retornados de uma vez)
- 🔁 **Infinite scroll real com loading state** e `swr` ou `react-query`
- 🧠 **Suporte a busca e filtros por título/autor**
- 💬 **Formulário para adicionar novos comentários**
- 📤 **Integração com CMS (ex: Strapi)** para gerenciamento dos conteúdos
- 🖼️ **Upload de imagem real por post** (ex: amazon s3)
- 🧪 **Cobertura de testes com Jest/Vitest + Testing Library**


---

## 🧑 Sobre o Autor

Desenvolvido por [Matheus Gouveia](https://github.com/maatheusgouveia), Frontend Engineer com mais de 9 anos de experiência criando produtos robustos e escaláveis com React, TypeScript e Node.js. 🌍

Além de já ter participado de projetos para grandes empresas no Brasil e no mundo, também tenho projetos pessoais que mantenho, são eles o blog [Update sem Where](https://www.updatesemwhere.com.br) e a plataforma  [WebDevTools](https://webdevtools.tech)

---

## 📄 Licença

Este projeto foi desenvolvido para fins de avaliação técnica e aprendizado.