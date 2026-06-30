#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* ============================================================================
   CONSTANTES E DEFINIÇÕES GLOBAIS
   ============================================================================
   Define os limites máximos para as estruturas do sistema
   MAX_LIVROS: Número máximo de livros que cada sebo pode armazenar
   MAX_SEBOS: Número máximo de sebos que o sistema pode gerenciar
   MAX_USUARIOS: Número máximo de usuários cadastrados no sistema
   ============================================================================ */

#define MAX_LIVROS 100
#define MAX_SEBOS 10
#define MAX_USUARIOS 100

/* ============================================================================
   ESTRUTURA USUARIO
   ============================================================================
   Armazena as informações de um usuário do sistema
   - nome: Nome completo do usuário
   - email: Endereço de email do usuário para contato
   ============================================================================ */

typedef struct {
    char nome[100];
    char email[100];
} Usuario;

/* ============================================================================
   ESTRUTURA LIVRO
   ============================================================================
   Representa um livro no sistema com todas suas características
   - titulo: Nome do livro
   - autor: Nome do autor/escritor
   - genero: Gênero literário (Ficção, Romance, Terror, etc.)
   - estado: Condição física do livro (Novo, Bom, Regular, etc.)
   - preco: Valor do livro em reais
   - reservado: Flag que indica se o livro está reservado (1) ou disponível (0)
   - reservadoPor: Nome do usuário que reservou o livro
   - unidadeRetirada: Nome do sebo onde o livro deve ser retirado
   ============================================================================ */

typedef struct {
    char titulo[100];
    char autor[100];
    char genero[50];
    char estado[50];
    float preco;

    int reservado;
    char reservadoPor[100];
    char unidadeRetirada[100];
} Livro;

/* ============================================================================
   ESTRUTURA SEBO
   ============================================================================
   Representa uma livraria/sebo parceiro no sistema
   - nome: Nome do estabelecimento
   - endereco: Localização completa do sebo
   - horario: Horário de funcionamento
   - livros: Array de livros disponíveis neste sebo
   - totalLivros: Contador de quantos livros estão cadastrados
   ============================================================================ */

typedef struct {
    char nome[100];
    char endereco[150];
    char horario[100];

    Livro livros[MAX_LIVROS];
    int totalLivros;
} Sebo;

/* ============================================================================
   VARIÁVEIS GLOBAIS
   ============================================================================
   - sebos: Array que armazena todos os sebos cadastrados
   - usuarios: Array que armazena todos os usuários cadastrados
   - totalSebos: Contador da quantidade atual de sebos
   - totalUsuarios: Contador da quantidade atual de usuários
   ============================================================================ */

Sebo sebos[MAX_SEBOS];
Usuario usuarios[MAX_USUARIOS];

int totalSebos = 0;
int totalUsuarios = 0;

/* ============================================================================
   FUNÇÃO: limparTela()
   ============================================================================
   Limpa a tela do terminal/console
   Funciona tanto no Windows (system("cls")) quanto em Linux/Mac (system("clear"))
   ============================================================================ */

void limparTela() {
    #ifdef _WIN32
        system("cls");     // Comando para Windows
    #else
        system("clear");   // Comando para Unix/Linux/Mac
    #endif
}

/* ============================================================================
   FUNÇÃO: pausarSistema()
   ============================================================================
   Pausa a execução do programa até que o usuário pressione ENTER
   Permite que o usuário leia as informações antes de continuar
   ============================================================================ */

void pausarSistema() {
    printf("\n");
    printf("Pressione ENTER para continuar...");
    
    while(getchar() != '\n');  // Limpa o buffer do teclado
    getchar();                  // Aguarda o ENTER
}

/* ============================================================================
   FUNÇÃO: exibirMenuPrincipal()
   ============================================================================
   Exibe o menu principal do sistema com todas as opções disponíveis
   Organizado em categorias: Sebos, Livros, Usuários, Reservas
   ============================================================================ */

void exibirMenuPrincipal() {
    limparTela();
    
    printf("\n");
    printf("=====================================================\n");
    printf("                BOOKCYCLE SYSTEM\n");
    printf("=====================================================\n");
    
    printf("  [1]  Cadastrar Sebo\n");
    printf("  [2]  Cadastrar Livro\n");
    printf("  [3]  Listar Sebos\n");
    printf("  [4]  Buscar Livro\n");
    
    printf("-----------------------------------------------------\n");
    
    printf("  [5]  Cadastrar Usuario\n");
    printf("  [6]  Listar Usuarios\n");
    
    printf("-----------------------------------------------------\n");
    
    printf("  [7]  Reservar Livro\n");
    printf("  [8]  Cancelar Reserva\n");
    
    printf("-----------------------------------------------------\n");
    
    printf("  [9]  Remover Livro\n");
    
    printf("-----------------------------------------------------\n");
    
    printf("  [0]  Sair do Sistema\n");
    
    printf("=====================================================\n");
    printf("Escolha uma opcao: ");
}

/* ============================================================================
   FUNÇÃO: cadastrarSebo()
   ============================================================================
   Permite cadastrar um novo sebo no sistema
   1. Verifica se ainda há espaço (limite MAX_SEBOS)
   2. Solicita nome, endereço e horário de funcionamento
   3. Inicializa o contador de livros como 0
   4. Adiciona o sebo ao array global
   ============================================================================ */

void cadastrarSebo() {
    limparTela();
    
    if (totalSebos >= MAX_SEBOS) {
        printf("Limite de sebos atingido!\n");
        return;
    }
    
    Sebo novo;
    
    printf("\n");
    printf("=====================================\n");
    printf("         CADASTRO DE SEBO\n");
    printf("=====================================\n");
    
    printf("Nome do sebo: ");
    scanf(" %[^\n]", novo.nome);      // Lê string com espaços
    
    printf("Endereco: ");
    scanf(" %[^\n]", novo.endereco);
    
    printf("Horario: ");
    scanf(" %[^\n]", novo.horario);
    
    novo.totalLivros = 0;              // Inicializa sem livros
    
    sebos[totalSebos++] = novo;        // Adiciona ao array e incrementa contador
    
    printf("\nSebo cadastrado com sucesso!\n");
}

/* ============================================================================
   FUNÇÃO: cadastrarUsuario()
   ============================================================================
   Cadastra um novo usuário no sistema
   1. Verifica se há espaço disponível
   2. Solicita nome e email do usuário
   3. Armazena no array global de usuários
   ============================================================================ */

void cadastrarUsuario() {
    limparTela();
    
    if (totalUsuarios >= MAX_USUARIOS) {
        printf("Limite de usuarios atingido!\n");
        return;
    }
    
    Usuario novo;
    
    printf("\n");
    printf("=====================================\n");
    printf("       CADASTRO DE USUARIO\n");
    printf("=====================================\n");
    
    printf("Nome: ");
    scanf(" %[^\n]", novo.nome);
    
    printf("Email: ");
    scanf(" %[^\n]", novo.email);
    
    usuarios[totalUsuarios++] = novo;
    
    printf("\nUsuario cadastrado com sucesso!\n");
}

/* ============================================================================
   FUNÇÃO: listarUsuarios()
   ============================================================================
   Exibe todos os usuários cadastrados no sistema
   Mostra nome e email de cada usuário
   ============================================================================ */

void listarUsuarios() {
    limparTela();
    
    if (totalUsuarios == 0) {
        printf("Nenhum usuario cadastrado.\n");
        return;
    }
    
    printf("\n");
    printf("=====================================\n");
    printf("          LISTA DE USUARIOS\n");
    printf("=====================================\n");
    
    for (int i = 0; i < totalUsuarios; i++) {
        printf("\n-------------------------------------\n");
        printf("Usuario %d\n", i + 1);
        printf("-------------------------------------\n");
        printf("Nome : %s\n", usuarios[i].nome);
        printf("Email: %s\n", usuarios[i].email);
    }
}

/* ============================================================================
   FUNÇÃO: cadastrarLivro()
   ============================================================================
   Cadastra um novo livro em um sebo específico
   1. Verifica se existe pelo menos um sebo cadastrado
   2. Lista os sebos disponíveis para escolha
   3. Solicita título, autor, gênero, estado e preço
   4. Inicializa o livro como disponível (não reservado)
   5. Adiciona ao array de livros do sebo escolhido
   ============================================================================ */

void cadastrarLivro() {
    limparTela();
    
    if (totalSebos == 0) {
        printf("Nenhum sebo cadastrado!\n");
        return;
    }
    
    printf("\n");
    printf("=====================================\n");
    printf("        CADASTRO DE LIVRO\n");
    printf("=====================================\n");
    
    printf("\nSEBOS DISPONIVEIS:\n");
    
    for (int i = 0; i < totalSebos; i++) {
        printf("[%d] %s\n", i, sebos[i].nome);
    }
    
    int id;
    
    printf("\nEscolha o sebo: ");
    scanf("%d", &id);
    
    if (id < 0 || id >= totalSebos) {
        printf("Sebo invalido!\n");
        return;
    }
    
    Sebo *s = &sebos[id];              // Ponteiro para o sebo escolhido
    
    if (s->totalLivros >= MAX_LIVROS) {
        printf("Limite de livros atingido!\n");
        return;
    }
    
    Livro novo;
    
    printf("\nTitulo : ");
    scanf(" %[^\n]", novo.titulo);
    
    printf("Autor  : ");
    scanf(" %[^\n]", novo.autor);
    
    printf("Genero : ");
    scanf(" %[^\n]", novo.genero);
    
    printf("Estado : ");
    scanf(" %[^\n]", novo.estado);
    
    printf("Preco  : ");
    scanf("%f", &novo.preco);
    
    novo.reservado = 0;                // Livro disponível inicialmente
    
    strcpy(novo.reservadoPor, "");     // Limpa campo de reserva
    strcpy(novo.unidadeRetirada, "");  // Limpa campo de retirada
    
    s->livros[s->totalLivros++] = novo;
    
    printf("\nLivro cadastrado com sucesso!\n");
}

/* ============================================================================
   FUNÇÃO: listarSebos()
   ============================================================================
   Exibe todos os sebos e seus respectivos livros
   Para cada sebo mostra:
   - Nome, endereço e horário
   - Lista completa de livros com todos os detalhes
   - Indica se o livro está reservado ou disponível
   - Se reservado, mostra quem reservou e onde retirar
   ============================================================================ */

void listarSebos() {
    limparTela();
    
    if (totalSebos == 0) {
        printf("Nenhum sebo cadastrado.\n");
        return;
    }
    
    printf("\n");
    printf("=====================================\n");
    printf("         LISTAGEM DE SEBOS\n");
    printf("=====================================\n");
    
    for (int i = 0; i < totalSebos; i++) {
        
        printf("\n=====================================\n");
        printf("SEBO %d\n", i + 1);
        printf("=====================================\n");
        
        printf("Nome     : %s\n", sebos[i].nome);
        printf("Endereco : %s\n", sebos[i].endereco);
        printf("Horario  : %s\n", sebos[i].horario);
        
        if (sebos[i].totalLivros == 0) {
            printf("\nNenhum livro cadastrado.\n");
        } else {
            printf("\n=========== LIVROS ===========\n");
            
            for (int j = 0; j < sebos[i].totalLivros; j++) {
                Livro l = sebos[i].livros[j];
                
                printf("\n-------------------------------------\n");
                printf("Livro %d\n", j + 1);
                printf("-------------------------------------\n");
                
                printf("Titulo : %s\n", l.titulo);
                printf("Autor  : %s\n", l.autor);
                printf("Genero : %s\n", l.genero);
                printf("Estado : %s\n", l.estado);
                printf("Preco  : R$ %.2f\n", l.preco);
                
                if (l.reservado) {
                    printf("Status : [RESERVADO]\n");
                    printf("Usuario: %s\n", l.reservadoPor);
                    printf("Retirar: %s\n", l.unidadeRetirada);
                    printf("Prazo  : 48 horas\n");
                } else {
                    printf("Status : [DISPONIVEL]\n");
                }
            }
        }
    }
}

/* ============================================================================
   FUNÇÃO: buscarLivro()
   ============================================================================
   Busca livros por título (busca parcial, case-sensitive)
   1. Solicita um termo de busca ao usuário
   2. Percorre todos os sebos e livros procurando pelo termo no título
   3. Exibe todos os livros encontrados com suas informações
   4. Mostra em qual sebo o livro está localizado
   ============================================================================ */

void buscarLivro() {
    limparTela();
    
    char busca[100];
    int encontrou = 0;
    
    printf("\n");
    printf("=====================================\n");
    printf("           BUSCAR LIVRO\n");
    printf("=====================================\n");
    
    printf("\nDigite o titulo: ");
    scanf(" %[^\n]", busca);
    
    for (int i = 0; i < totalSebos; i++) {
        for (int j = 0; j < sebos[i].totalLivros; j++) {
            Livro l = sebos[i].livros[j];
            
            if (strstr(l.titulo, busca)) {    // Verifica se o termo está contido no título
                printf("\n-------------------------------------\n");
                printf("LIVRO ENCONTRADO\n");
                printf("-------------------------------------\n");
                
                printf("Sebo   : %s\n", sebos[i].nome);
                printf("Titulo : %s\n", l.titulo);
                printf("Autor  : %s\n", l.autor);
                printf("Genero : %s\n", l.genero);
                printf("Preco  : R$ %.2f\n", l.preco);
                
                if (l.reservado) {
                    printf("Status : [RESERVADO]\n");
                } else {
                    printf("Status : [DISPONIVEL]\n");
                }
                
                encontrou = 1;
            }
        }
    }
    
    if (!encontrou) {
        printf("\nNenhum livro encontrado.\n");
    }
}

/* ============================================================================
   FUNÇÃO: reservarLivro()
   ============================================================================
   Realiza a reserva de um livro para um usuário
   Fluxo completo da reserva:
   1. Verifica se há usuários e sebos cadastrados
   2. Usuário escolhe o sebo
   3. Usuário escolhe o livro dentro do sebo (apenas disponíveis)
   4. Usuário escolhe qual usuário fará a reserva
   5. Marca o livro como reservado
   6. Armazena nome do usuário e sebo de retirada
   7. Informa prazo de 48 horas para retirada
   ============================================================================ */

void reservarLivro() {
    limparTela();
    
    if (totalUsuarios == 0) {
        printf("Nenhum usuario cadastrado!\n");
        return;
    }
    
    if (totalSebos == 0) {
        printf("Nenhum sebo cadastrado!\n");
        return;
    }
    
    printf("\n");
    printf("=====================================\n");
    printf("         RESERVA DE LIVRO\n");
    printf("=====================================\n");
    
    for (int i = 0; i < totalSebos; i++) {
        printf("[%d] %s\n", i, sebos[i].nome);
    }
    
    int idSebo;
    
    printf("\nEscolha o sebo: ");
    scanf("%d", &idSebo);
    
    if (idSebo < 0 || idSebo >= totalSebos) {
        printf("Sebo invalido!\n");
        return;
    }
    
    Sebo *s = &sebos[idSebo];
    
    if (s->totalLivros == 0) {
        printf("Nenhum livro cadastrado nesse sebo.\n");
        return;
    }
    
    printf("\n=========== LIVROS ===========\n");
    
    for (int i = 0; i < s->totalLivros; i++) {
        printf("[%d] %s", i, s->livros[i].titulo);
        
        if (s->livros[i].reservado) {
            printf("  [RESERVADO]");
        }
        
        printf("\n");
    }
    
    int idLivro;
    
    printf("\nEscolha o livro: ");
    scanf("%d", &idLivro);
    
    if (idLivro < 0 || idLivro >= s->totalLivros) {
        printf("Livro invalido!\n");
        return;
    }
    
    Livro *l = &s->livros[idLivro];
    
    if (l->reservado) {
        printf("Livro ja reservado!\n");
        return;
    }
    
    printf("\n=========== USUARIOS ===========\n");
    
    for (int i = 0; i < totalUsuarios; i++) {
        printf("[%d] %s\n", i, usuarios[i].nome);
    }
    
    int idUsuario;
    
    printf("\nEscolha o usuario: ");
    scanf("%d", &idUsuario);
    
    if (idUsuario < 0 || idUsuario >= totalUsuarios) {
        printf("Usuario invalido!\n");
        return;
    }
    
    l->reservado = 1;
    
    strcpy(l->reservadoPor, usuarios[idUsuario].nome);
    strcpy(l->unidadeRetirada, s->nome);
    
    printf("\n=====================================\n");
    printf("      RESERVA REALIZADA COM SUCESSO\n");
    printf("=====================================\n");
    
    printf("Livro   : %s\n", l->titulo);
    printf("Usuario : %s\n", l->reservadoPor);
    printf("Retirada: %s\n", l->unidadeRetirada);
    printf("Prazo   : 48 horas\n");
}

/* ============================================================================
   FUNÇÃO: cancelarReserva()
   ============================================================================
   Cancela a reserva de um livro
   1. Percorre todos os sebos e livros em busca de reservas ativas
   2. Para cada reserva encontrada, pergunta se deseja cancelar
   3. Se confirmado, limpa os campos de reserva
   4. Marca o livro como disponível novamente
   ============================================================================ */

void cancelarReserva() {
    limparTela();
    
    int encontrou = 0;
    
    printf("\n");
    printf("=====================================\n");
    printf("        CANCELAR RESERVA\n");
    printf("=====================================\n");
    
    for (int i = 0; i < totalSebos; i++) {
        Sebo *s = &sebos[i];
        
        for (int j = 0; j < s->totalLivros; j++) {
            Livro *l = &s->livros[j];
            
            if (l->reservado) {
                encontrou = 1;
                
                printf("\n-------------------------------------\n");
                printf("Livro    : %s\n", l->titulo);
                printf("Usuario  : %s\n", l->reservadoPor);
                printf("-------------------------------------\n");
                
                int opcao;
                
                printf("Cancelar reserva? [1] Sim [0] Nao: ");
                scanf("%d", &opcao);
                
                if (opcao == 1) {
                    l->reservado = 0;
                    strcpy(l->reservadoPor, "");
                    strcpy(l->unidadeRetirada, "");
                    
                    printf("\nReserva cancelada com sucesso!\n");
                }
            }
        }
    }
    
    if (!encontrou) {
        printf("\nNenhuma reserva encontrada.\n");
    }
}

/* ============================================================================
   FUNÇÃO: removerLivro()
   ============================================================================
   Remove um livro do catálogo de um sebo específico
   1. Lista os sebos para escolha
   2. Lista os livros do sebo escolhido
   3. Remove o livro selecionado
   4. Realiza o deslocamento dos elementos seguintes (mantém ordem)
   5. Decrementa o contador de livros do sebo
   ============================================================================ */

void removerLivro() {
    limparTela();
    
    if (totalSebos == 0) {
        printf("Nenhum sebo cadastrado.\n");
        return;
    }
    
    printf("\n");
    printf("=====================================\n");
    printf("          REMOVER LIVRO\n");
    printf("=====================================\n");
    
    for (int i = 0; i < totalSebos; i++) {
        printf("[%d] %s\n", i, sebos[i].nome);
    }
    
    int idSebo;
    
    printf("\nEscolha o sebo: ");
    scanf("%d", &idSebo);
    
    if (idSebo < 0 || idSebo >= totalSebos) {
        printf("Sebo invalido!\n");
        return;
    }
    
    Sebo *s = &sebos[idSebo];
    
    if (s->totalLivros == 0) {
        printf("Nenhum livro cadastrado.\n");
        return;
    }
    
    printf("\n=========== LIVROS ===========\n");
    
    for (int i = 0; i < s->totalLivros; i++) {
        printf("[%d] %s\n", i, s->livros[i].titulo);
    }
    
    int idLivro;
    
    printf("\nEscolha o livro para remover: ");
    scanf("%d", &idLivro);
    
    if (idLivro < 0 || idLivro >= s->totalLivros) {
        printf("Livro invalido!\n");
        return;
    }
    
    // Desloca os elementos posteriores uma posição para trás
    for (int i = idLivro; i < s->totalLivros - 1; i++) {
        s->livros[i] = s->livros[i + 1];
    }
    
    s->totalLivros--;
    
    printf("\nLivro removido com sucesso!\n");
}

/* ============================================================================
   FUNÇÃO PRINCIPAL: main()
   ============================================================================
   Ponto de entrada do programa
   Controla o loop principal do sistema:
   1. Exibe o menu
   2. Aguarda a escolha do usuário
   3. Executa a função correspondente
   4. Repete até que o usuário escolha sair (opção 0)
   ============================================================================ */

int main() {
    int opcao;
    
    do {
        exibirMenuPrincipal();
        scanf("%d", &opcao);
        
        switch (opcao) {
            case 1:
                cadastrarSebo();
                pausarSistema();
                break;
                
            case 2:
                cadastrarLivro();
                pausarSistema();
                break;
                
            case 3:
                listarSebos();
                pausarSistema();
                break;
                
            case 4:
                buscarLivro();
                pausarSistema();
                break;
                
            case 5:
                cadastrarUsuario();
                pausarSistema();
                break;
                
            case 6:
                listarUsuarios();
                pausarSistema();
                break;
                
            case 7:
                reservarLivro();
                pausarSistema();
                break;
                
            case 8:
                cancelarReserva();
                pausarSistema();
                break;
                
            case 9:
                removerLivro();
                pausarSistema();
                break;
                
            case 0:
                limparTela();
                printf("\nSaindo do sistema...\n");
                break;
                
            default:
                printf("\nOpcao invalida!\n");
                pausarSistema();
        }
        
    } while (opcao != 0);
    
    return 0;
}
