# 🌅 Exercício: Simulação de Ciclo Dia e Noite com JavaScript



### 🎯 Objetivo

Criar uma página web dinâmica que represente visualmente o ciclo do dia, onde a iluminação e os elementos da tela mudam automaticamente de acordo com o horário atual do sistema.



---



### 📋 Descrição do Desafio

Desenvolva uma interface que capture a hora do computador do usuário e modifique o DOM (Document Object Model) para refletir quatro estados principais: \*\*Manhã, Meio-dia, Tarde e Noite.\*\*



A tela deve simular a progressão da luz, começando com um sol suave, atingindo o brilho máximo ao meio-dia e transformando-se em uma noite estrelada com a lua.



---



### ⏰ Regras de Funcionamento (Lógica)



Com base na hora capturada, a página deverá alterar dinamicamente:

1. **Cor do fundo** (Céu).

2. **Ícone do astro** (Sol ou Lua).

3. **Texto de saudação** (Ex: "Bom dia").

4. **Posição horizontal** do astro na tela.



#### Tabela de Comportamento:



| Horário | Período | Comportamento Esperado |

| :--- | :--- | :--- |

| **00:00 – 05:59** | 🌑 Madrugada | Fundo muito escuro + Lua |

| **06:00 – 11:59** | 🌅 Manhã | Sol fraco + Fundo claro (tons pastéis) |

| **12:00 – 15:59** | ☀️ Meio-dia | Sol forte + Tela bem iluminada |

| **16:00 – 17:59** | 🌇 Tarde | Tons alaranjados + Sol enfraquecendo |

| **18:00 – 23:59** | 🌙 Noite | Fundo escuro + Lua |



---



### 🎨 Requisitos de Interface



A página deve conter visualmente:

* **Astro:** Um círculo representando o sol ou a lua.

* **Relógio:** Um texto exibindo o horário atual formatado (ex: `14:30`).

* **Saudação:** Um texto informando o período (ex: `Boa Tarde ☀️`).

* **Transição:** As mudanças de cores devem preferencialmente usar `transition` do CSS para não serem bruscas.



---



### ⚙️ Requisitos Técnicos



#### 1️⃣ Movimentação do Astro

O Sol/Lua deve se mover horizontalmente da esquerda para a direita ao longo do dia:

* **06h:** Extrema esquerda.

* **12h:** Centro da tela.

* **18h:** Extrema direita.



#### 2️⃣ Tecnologias Necessárias

* **HTML5:** Estrutura semântica e IDs para manipulação.

* **CSS3:** Estilização, cores específicas para cada período e posicionamento.

* **JavaScript:**

  * Capturar a hora atual.

  * Criar lógicas.

  * Manipular o DOM.

  * Alterar classes CSS ou estilos inline.



---

