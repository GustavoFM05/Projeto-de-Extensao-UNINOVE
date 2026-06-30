Link YouTube: https://youtu.be/G--et053cag

# 📚 BookCycle


O **BookCycle** é uma plataforma web voltada para o comércio, troca e reserva de livros novos e usados, conectando leitores a sebos locais de forma prática e eficiente. O projeto foi desenvolvido como parte do ambiente acadêmico para consolidar conhecimentos em desenvolvimento web, lógica de programação e banco de dados relacional (MySQL).

---

## 🚀 Funcionalidades Principais

- **Gerenciamento de Usuários:** Cadastro, login e controle de perfis de leitores.
- **Catálogo de Livros:** Listagem detalhada de obras com informações sobre o autor, estado de conservação (Novo, Seminovo, Usado) e localização física no estoque.
- **Rede de Sebos:** Cadastro e mapeamento de sebos parceiros, incluindo endereços, telefones e horários de funcionamento.
- **Sistema de Reservas:** Permite que os usuários reservem livros online para retirada presencial no sebo escolhido, com controle automatizado de datas de expiração.
- **Gestão de Equipe (Funcionários):** Controle interno de colaboradores e suas respectivas funções na plataforma (como suporte e administração).

---

## 🛠️ Tecnologias Utilizadas

- **Front-end / Ambiente:** HTML5, CSS3, JavaScript (Visualizado localmente via *Live Server*).
- **Banco de Dados:** MySQL (Relacional), modelado para garantir integridade referencial com Chaves Primárias (PRI) e Chaves Estrangeiras (MUL).
- **Editor de Código:** Visual Studio Code (VS Code).

---

## 🗄️ Estrutura do Banco de Dados

O banco de dados `bookcycle` é composto por 5 tabelas principais, estruturadas da seguinte forma:

1. **`usuarios`**: Armazena os dados dos leitores da plataforma (Nome, E-mail, Telefone e Senha).
2. **`sebos`**: Registra as lojas físicas parceiras (Nome, Endereço, Telefone e Horário de Funcionamento).
3. **`livros`**: Catálogo de obras disponíveis, diretamente vinculado ao sebo detentor do título (`id_sebo`).
4. **`reservas`**: Tabela de relacionamento que une o usuário, o sebo e o livro, monitorando o prazo e o status da reserva.
5. **`funcionarios`**: Controle de equipe interna responsável pelo suporte e operação do ecossistema.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:
- [Visual Studio Code](https://code.visualstudio.com/)
- Extensão **Live Server** (para rodar a interface web)
- Extensão **MySQL** ou um gerenciador local (XAMPP/phpMyAdmin) para rodar os scripts de banco de dados.

### Passo a Passo

1. **Clonar o repositório:**
```bash
   git clone [https://github.com/seu-usuario/bookcycle.git](https://github.com/seu-usuario/bookcycle.git)
