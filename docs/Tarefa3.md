# TAREFA 3: INSTRUÇÕES

## 1. Instalação e configuração do Angular

No terminal, execute o comando abaixo. 
* No Linux, o comando deverá ser precedido por `sudo`.

```bash
npm install -g @angular/cli@latest
```

* Se você estiver utilizando Windows, deverá reiniciar o computador.

Verifique a versão instalada:

```bash
ng --version
```

A versão esperada do Angular CLI, em abril de 2019, é, pelo menos, **7.3.7**.

> No Windows (principalmente nos computadores dos laboratórios), muitas vezes, por falta de permissão, o comando `ng` não é adicionado ao *path*. Em consequência, ao tentar executar o comando `ng`, recebemos uma mensagem de que o comando não existe ou é desconhecido.
>
> Nesse caso, precisaremos criar um arquivo de nome `ng.bat`, dentro da pasta de trabalho (`TopicosPwa` ou semelhante), com o seguinte conteúdo:
>
> ```cmd
 > %USERPROFILE%\AppData\Roaming\npm\bin\ng %1 %2 %3 %4 %5 %6 %7 %8 %9
> ```
>
> Após criar e salvar o arquivo, o comando `ng --version` deve funcionar no terminal.

## 2. Clonagem e configurações de trabalho em grupo

A listagem com os membros de cada grupo encontra-se no [AVA](https://avafatecfranca.net.br).

Um dos membros de cada grupo deverá acessar o [repositório do professor](https://github.com/fgcintra/ToAki-6not-2019-1) e clicar sobre o botão `Fork`. O repositório *forkado* será o repositório do grupo.

O proprietário do repositório *forkado* deverá acessar a seção `Settings > Collaborators` do repositório e adicionar os demais membros como colaboradores.

**Cada um dos membros do grupo** deverá clonar o repositório *forkado* com o comando
   ```bash
   git clone <endereço_do_repo_do_grupo>
   ```
> Se você precisou criar o arquivo `ng.bat` na seção 1, mova agora esse arquivo para dentro da pasta do repositório clonado.

Entre dentro da pasta com o conteúdo do repositório:

```bash
cd ToAki-6not-2019-1
```

Configure o Angular para utilizar o `yarn` no seu projeto:

```bash
ng config cli.packageManager yarn
```

Instale as dependências:

```bash
yarn install
```

## 3. Adicionando os componentes Angular Material ao projeto

Os componentes [Angular Material](https://material.angular.io/) foram desenvolvidos segundo as diretrizes do [Material Design](https://material.io/design/) do Google. Utilizando esses componentes, nosso projeto terá uma série de benefícios, como a padronização da interface e a habilidade de deixar a aplicação "pronta" para ambientes *mobile*.

Para adicionar a biblioteca de componentes ao projeto, execute o comando abaixo no terminal:

```bash
ng add @angular/material
```

Esse comando também faz algumas perguntas. Responda conforme o modelo abaixo.

* `? Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys)` Com a seta, escolha a primeira opção, **Indigo/Pink** (as demais são horrorosas :P)
* `? Set up HammerJS for gesture recognition? (Y/n)` Responda **Y**.
* `? Set up browser animations for Angular Material? (Y/n)` Responda **Y**.

## 4. Instalando a biblioteca de ícones Material Icons

No terminal:

```bash
yarn add material-design-icons --network-timeout 1000000000
```
* Há relatos de que a execução desse comando é demorada. É por isso que aumentamos o tempo de expiração da rede (`--network-timeout`).

Abra o arquivo `src/styles.scss` e acrescente a **última linha**:

```css
/* src/styles.scss */

@import '~@angular/material/prebuilt-themes/indigo-pink.css';

/* Acrescente a linha a seguir */
@import "~material-design-icons/iconfont/material-icons.css";
```

## 5. Transformando o projeto Angular em um PWA

Instale o pacote a seguir:

```bash
ng add  @angular/pwa
```

Essa instalação atualiza alguns arquivos e cria novos arquivos e pastas:
* `ngsw-config.json`
* `src/manifest.json`
* `src/assets/`

A função de cada um desses arquivos será esclarecida ao longo deste tutorial.

> Novas instruções serão acrescentadas no decurso das próximas aulas. Durante a tarefa, todos os colaboradores deverão comitar seu código para o repositório do grupo. No final da tarefa, o dono do repositório fará um `pull request` para o repositório do professor.