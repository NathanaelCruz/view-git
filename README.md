# BOILERPLATE NEXTJS

<section data-markdown>
  
  ![Screen 01](https://github.com/NathanaelCruz/images_resource_projects/blob/master/Images/screen_boilerplate01.png)
  
</section>

## MOTIVAÇÃO
  Durante o curso de Aprenda NextJS na Prática, ministrada pelo Willian Justen na Udemy, foi apresentado vários conceitos para a utilização do NextJS com boas práticas e tecnologias que contribuem para o desenvolvimento. Ao ver este Boilerplate, vi que seria um bom modelo para uso em projetos futuros, para isso fiz algumas alterações deixando ele mais padrão, com configurações extras e algumas bibliotecas necessárias para seu uso.
   Dessa forma iria ter um Boilerplate que pdoeria utilizar em vários projetos e com uma base sólida de uso, por isso decidi montá-lo e publicar.

## TECNOLOGIAS UTILIZADAS
  Neste boilerplate tem algumas tecnologias atuais para um bom desenvolvimento e para performance do site. Dentre elas:
  1. NextJS
  2. Typescript
  3. Styled Components
  4. Jest
  5. Testing Library
  6. Husky + Lint-staged
  7. ESLint
  8. Prettier
  9. Next SEO
  10. Nextjs Progressbar
  11. PWA (Pelo script está somente possível em produção)
  12. Editorconfig

## COMO UTILIZAR?
  Nessa sessão será divida em três partes, seguindo com NPM e utilizando em um sistema operacional Ubuntu, porém nada impede de atualizar ou mesmo utilizar com yarn, sendo as seguintes:
  
### Recomendações
  Ter o gerenciador de pacotes NPM instalado para realizar essas configurações. Além disso para o salvamente com o ESlint formato, recomendo que use o VSCode para realizar a codificação da aplicação.

### Instalação
  1. Para realizar o uso desse boilerplate, use na pasta onde deseja montar o projeto: `npx create-next-app -e https://github.com/NathanaelCruz/boilerplate`
  2. Com isso ira construir sua aplicação Next utilizando como base esse boilerplate.
  3. Após a criação do projeto, caso queira pode retirar algumas dependências no `package.json`, porém se for utilizar todas pode realizar os seguintes comandos.
      1. `npm install` para inicializar a instalação dos pacotes
      2.  Agora na pasta raiz, caso queira subir seu projeto no github, `rm -rf .git` para remover o git dessa pasta.
      3.  Com isso feito, basta realizar `git init` inicializando o git e seguindo a conexão com seu repositório desejado.
      4.  Agora basta utilizar o `npx husky init` para começar a rodar o githook.
  4. Com isso já esta sendo possivel realizar o `npm run dev`, `npm run build` e `npm run start`

### Configurações
  As configurações aqui serão ditas onde ode ser alterado para melhor se adaptar a você.

#### Gerenciador de Pacotes
  1. Os passos a seguir é caso utilize um gerenciador de pacotes diferente do NPM
  2. Inicialmente pode realizar as configuraçes no `package.json`, nos objetos scripts e lint-staged.
  3. Após configurar esses comandos para seu gerenciador de pacote, necessita mudar o arquivo `[Raiz do projeto]/.husky/pre-commit`, na ultima linha onde se utilizar o npm

#### Configurações do Projeto
  1. No caminho `[Raiz do projeto]/public/manifest.json` realizar a alteração para o seu projeto, sendo o mesmo utilizado para o PWA no build.
  2. No caminho `[Raiz do projeto]/next-seo.config.ts` fazer o preenchimento conforme o seu projeto para o SEO padrão das páginas.
  3. No caminho `[Raiz do projeto]/src/styles/theme.ts` possui as váriaveis de tema que pode trocar ou ajustar conforme o projeto.
  4. No caminho `[Raiz do projeto]/src/pages/_app.tsx` para alterar as metatags entre o comoponente Head.

## Testes
  Para os testes terá os comando a seguir, porém, para melhor compreender, a forma que o boilerplate está montado é para o momento que for realizar um teste ele percorrer somente as pastas que de fato tem um teste dentro, ignorando alguns arquivos desnecessarios.

## Comandos
  Essa sessão mostra os comandos possiveis e configurados, não abordando os `npm run dev`, `npm run build` e `npm run start` que são padrões.
  1. `npm run lint` - Realiza a verificação do ESlint nas páginas para verificar se há alguma formatação errada, não tolerando nenhum warning.
  2. `npm run test` - Realiza os testes atravs do jest rodando as pastas que realmente possuem algum teste válido.
  3. `npm run test:watch` - Funciona como o test acima porém ele fica "escutando" e validando caso haja alguma mudança.

Desenvolvido em **2021**
