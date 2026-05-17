let notes = []

function addNote(name){
    notes.push(name)
    return `Tarefa ${name} adicionada`
}

function deleteNote(name){
    if(notes.includes(name)){
        notes.splice(name)

        return `Tarefa ${name} apagada com sucesso`
    }
}

module.exports = {addNote, deleteNote}