let notes = []

function addNote(name){
    notes.push(name)
    return `Tarefa ${name} adicionada`
}

module.export = addNote