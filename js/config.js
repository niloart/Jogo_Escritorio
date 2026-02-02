/**
 * Configurações do Jogo Office Traffic Controller
 */

const CONFIG = {
    // Duração total do jogo em segundos (2 minutos)
    GAME_DURATION: 120,
    
    // Total de colaboradores a serem atendidos
    TOTAL_EMPLOYEES: 15,
    
    // Intervalo de atualização do game loop (ms)
    UPDATE_INTERVAL: 100,
    
    // Paciência máxima
    PATIENCE_MAX: 100,
    
    // Taxa de decaimento da paciência por segundo
    PATIENCE_DECAY: {
        RECEPTION: 4,      // ~25 segundos para zerar na recepção
        WAITING_ROOM: 1.5  // ~67 segundos para zerar na sala de espera
    },
    
    // Penalidade por colocar em local errado (segundos perdidos no timer)
    WRONG_PLACE_PENALTY: 5,
    
    // Tipos de tarefas com suas configurações
    TASK_TYPES: {
        blue: {
            name: 'E-mail',
            fullName: 'E-mail / Chat',
            icon: '📧',
            workTime: 5000,      // 5 segundos
            workspace: 'open-space',
            slots: ['open-a', 'open-b']
        },
        red: {
            name: 'Confid.',
            fullName: 'Confidencial / Feedback',
            icon: '🔐',
            workTime: 10000,     // 10 segundos
            workspace: 'phonebooth',
            slots: ['phone']
        },
        green: {
            name: 'Daily',
            fullName: 'Daily / Alinhamento',
            icon: '🤝',
            workTime: 20000,     // 20 segundos
            workspace: 'huddle-room',
            slots: ['huddle']
        }
    },
    
    // Configuração das fases
    PHASES: {
        1: {
            name: 'Aquecimento',
            startTime: 0,           // Início imediato
            endTime: 40,            // Até 40 segundos
            spawnInterval: 6000,    // A cada 6 segundos
            employeeCount: 5,       // 5 colaboradores nesta fase
            description: 'Todas as salas livres, ritmo tranquilo'
        },
        2: {
            name: 'Gargalo',
            startTime: 40,          // A partir de 40 segundos
            endTime: 80,            // Até 80 segundos
            spawnInterval: 4000,    // A cada 4 segundos
            employeeCount: 5,       // 5 colaboradores nesta fase
            description: 'Salas começam a ficar ocupadas'
        },
        3: {
            name: 'Fluxo Intenso',
            startTime: 80,          // A partir de 80 segundos
            endTime: 120,           // Até 120 segundos
            spawnInterval: 3000,    // A cada 3 segundos
            employeeCount: 5,       // 5 colaboradores nesta fase
            description: 'Ritmo intenso, gerenciamento crítico'
        }
    },
    
    // Lista de nomes para os colaboradores
    EMPLOYEE_NAMES: [
        'Ana', 'Carlos', 'Maria', 'João', 'Lucia',
        'Pedro', 'Julia', 'Lucas', 'Fernanda', 'Rafael',
        'Camila', 'Bruno', 'Larissa', 'Thiago', 'Amanda'
    ]
};

// Congelar configurações para evitar modificações acidentais
Object.freeze(CONFIG);
Object.freeze(CONFIG.PATIENCE_DECAY);
Object.freeze(CONFIG.TASK_TYPES);
Object.freeze(CONFIG.PHASES);
