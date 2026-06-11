const series = [
{
    titulo: "Stranger Things",
    imagem: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    descricao: "Mistérios sobrenaturais em Hawkins",
},
{
    titulo: "The Last of Us",
    imagem: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    descricao: "Sobrevivência em um mundo pós-apocalíptico",
},
{
    titulo: "Breaking Bad",
    imagem: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    descricao: "A transformação de um professor em criminoso",
},
]

const listaSeries = document.getElementById ("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML = ""
    lista.forEach(serie => {
        listaSeries.innerHTML += `
        <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${serie.imagem}" class="card-img-top">
            <div class="card-body">
            <h3>${serie.titulo}</h3>
            <p>${serie.descricao}</p>
            <button class="btn btn-dark" onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
        </div>
        </div>
    </div>
        `
    })
}

mostrarSeries(series)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da serie",
        icon: "info"
    }) 
}
