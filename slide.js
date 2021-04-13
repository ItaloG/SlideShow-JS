'use strict';

const imagens = [
    {'id' : '1', 'url' : 'img/img1.jpg'},
    {'id' : '2', 'url' : 'img/img2.jpg'},
    {'id' : '3', 'url' : 'img/img3.png'},
    {'id' : '4', 'url' : 'img/img4.jpg'},
    {'id' : '5', 'url' : 'img/img5.jpg'},
    {'id' : '6', 'url' : 'img/img6.jpg'}
];

const container = document.getElementById('container-items');

// const carregamentoImg = (imagens, container) => {
//     imagens.forEach(imagem => {
//         container.innerHTML += `
//             <div class="item">
//                 <img src="${imagem.url}">
//             </div>    
//         `
//     });
// }

const carregamentoImg = (imagens, container) => {
    imagens.forEach(imagem => {
        const div = document.createElement('div');
        div.classList.add('item');

        const img = document.createElement('img');
        img.src = imagem.url;
        div.appendChild(img);

        container.appendChild(div);
    });
}

carregamentoImg(imagens, container);

let items = document.querySelectorAll('.item');

const previous = () => {
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const ultimoItem = items[items.length - 1];
    container.insertBefore(ultimoItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.getElementById('previous').addEventListener('click', previous);
document.getElementById('next').addEventListener('click', next);
