"use strict"

import funcionarios from "./funcionarios.json" with {type: "json"}  

function criarPerfil (perfis) {
    const body = document.body
    const container = document.createElement('conjuntoPerfis')
    const divPerfil = document.createElement('perfil')
    const divItens = document.createElement('itensPerfil')

    const imagem = document.createElement('img')
    const nome = document.createElement('p')
    const cargo = document.createElement('span')

    container.classList.add('conjuntoPerfis')
    divPerfil.classList.add('perfil')
    divItens.classList.add('itensPerfil')

    imagem.classList.add('imagem')
    nome.classList.add('nome')
    cargo.classList.add('cargo')


    imagem.src = "img/" + perfis.imagem
    nome.textContent = perfis.nome
    cargo.textContent = perfis.cargo

    body.appendChild(container)
    container.appendChild(divPerfil)
    divPerfil.appendChild(divItens)

    divItens.appendChild(imagem)
    divItens.appendChild(nome)
    divItens.appendChild(cargo)

    

}

function carregarPerfis() {
    funcionarios.forEach(criarPerfil)
}

carregarPerfis()

