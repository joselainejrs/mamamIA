# MamamIA — app web instalável (PWA)

App de orientação para a jornada de saúde das mamas. Funciona no navegador, pode ser
instalado na tela inicial do celular e abre sem internet depois do primeiro acesso.

## Como publicar na Vercel

**Pelo GitHub (recomendado)**
1. Crie um repositório no GitHub e envie **o conteúdo** desta pasta (o `index.html` deve ficar na raiz do repositório).
2. Em https://vercel.com, entre com a conta do GitHub e clique em **Add New… › Project**.
3. Escolha o repositório e clique em **Import**.
4. Em *Framework Preset* deixe **Other**. Não precisa de comando de build nem de pasta de saída.
5. Clique em **Deploy**. Em alguns segundos sai o link `https://nome-do-projeto.vercel.app`.
6. A cada novo envio para o GitHub, a Vercel publica a versão nova sozinha.

**Pela linha de comando (opcional)**
Com o Node instalado: `npm i -g vercel`, depois rode `vercel --prod` dentro desta pasta.

## Como instalar no celular
- **Android (Chrome):** abra o link › menu ⋮ › **Instalar app** (ou "Adicionar à tela inicial").
- **iPhone (Safari):** abra o link › botão Compartilhar › **Adicionar à Tela de Início**.

O ícone da MamamIA aparece na tela do celular e o app abre em tela cheia, sem a barra do navegador.

## Dados
- Não há banco de dados nem servidor. Tudo que a usuária registra (perfil, calendário,
  anexos, favoritos) fica salvo **só no próprio aparelho**, no navegador.
- Fotos anexadas ficam visíveis até a página ser recarregada; depois aparece só o nome.
- Em **Perfil › Restaurar dados de demonstração** o app volta aos dados de exemplo
  (útil antes de uma apresentação).
- As respostas da MIA são pré-escritas: ela não usa IA de verdade e não faz diagnóstico.

## Atualizar o app
Depois de mudar qualquer arquivo, aumente o número de `mamamia-v9` (ex.: `mamamia-v10`) no começo do `sw.js`
e publique de novo; assim os celulares baixam a versão nova.

## Estrutura
- `index.html` — telas e lógica do app
- `app.css` — estilos (gerados com Tailwind)
- `manifest.webmanifest` — nome, cores e ícones para instalação
- `sw.js` — funcionamento sem internet
- `vercel.json` — configuração da Vercel
- `img/`, `icons/`, `fonts/`, `vendor/` — imagens, ícones, fonte Nunito e biblioteca de ícones Lucide
