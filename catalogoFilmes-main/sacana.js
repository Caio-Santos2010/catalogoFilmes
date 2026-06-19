const sacanas = [
{
    titulo: "5 Noitadas com o Epstein",
    imagem: "https://pbs.twimg.com/media/HALWND5WQAEm5Kx.jpg",
    descricao: "Jogo de Macho Alfa",
},
{
    titulo: "Noite com Jailson",
    imagem: "https://i.scdn.co/image/ab676161000051746fd5393f9b7bd6a51f6309b4",
    descricao: "Jogo de Urso",
},
{
    titulo: "Miguel",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IIK-C0HXYE6isBuiuqgWOdBo--blI6iZ3Q&s",
    descricao: "Jogo do Miguel",
},
]

const listaSacanas = document.getElementById ("listaSacanas");

function mostrarSacanas(lista) {
    listaSacanas.innerHTML = ""
    lista.forEach(sacana => {
        listaSacanas.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${sacana.imagem}" class="card-img-top">
            <div class="card-body">
            <h3>${sacana.titulo}</h3>
            <p>${sacana.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${sacana.titulo}')">Ver detalhes</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarSacanas(sacanas)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da serie",
        icon: "info"
    }) 
}