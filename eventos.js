
function atualizarQuantidade() {
    document.getElementById('numeros').innerHTML = buscar().length;
}

function listarTarefas() {
    let conteudo = buscar().sort().map(function(tarefa) {
        return `
        <div>   
            <input type="checkbox"> 
            ${tarefa.titulo}
            <span class="badge 
                ${tarefa.prioridade === 'Baixa' && 'bg-primary'} 
                ${tarefa.prioridade === 'Media' && 'bg-warning'} 
                ${tarefa.prioridade === 'Alta' && 'bg-danger'}"
            >
            ${tarefa.prioridade}
        </div>
        `;
    });
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');
}

function addTarefa() {
    event.preventDefault();
    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') {
        alert('Tarefa inválida')
        return;
    } 
    if (buscar().some(tarefa => titulo === tarefa.titulo) === true) {
        alert('Essa tarefa já existe!')
        return;
    }

    salvar(titulo, input_prioridade.value);

    document.getElementById('input_nova_tarefa').value = '';
    
    atualizarQuantidade();
    listarTarefas();
    
}

listarTarefas();