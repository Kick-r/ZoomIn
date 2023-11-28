var imgs = [
    document.getElementById('img0'), 
    document.getElementById('img1'), 
    document.getElementById('img2'), 
    document.getElementById('img3'), 
    document.getElementById('img4'), 
    document.getElementById('img5'), 
    document.getElementById('img6'), 
    document.getElementById('img7'), 
    document.getElementById('img8'), 
    document.getElementById('img9'), 
    document.getElementById('img10'), 
    document.getElementById('img11')
];

var ids = [
    document.getElementById('a0'), 
    document.getElementById('a1'), 
    document.getElementById('a2'), 
    document.getElementById('a3'), 
    document.getElementById('a4'), 
    document.getElementById('a5'), 
    document.getElementById('a6'), 
    document.getElementById('a7'), 
    document.getElementById('a8'), 
    document.getElementById('a9'), 
    document.getElementById('a10'), 
    document.getElementById('a11')
];

//Três vetores para armazenar os links

var natureza = [
    "https://i.pinimg.com/564x/9e/1b/56/9e1b567a5445db392298cd5affa4239e.jpg",

    "https://i.pinimg.com/564x/25/03/0c/25030c52d4484b2025dff94b96d316a5.jpg",

    "https://i.pinimg.com/564x/01/d4/d7/01d4d71022b4872125932fe69322f31b.jpg",

    "https://i.pinimg.com/564x/6c/12/86/6c1286a1895046fdb0dd8b9ff8c5db42.jpg",

    "https://i.pinimg.com/564x/f0/95/38/f0953819d3b0a0266de4a92c070adaa5.jpg",

    "https://i.pinimg.com/564x/2f/cb/76/2fcb76ac0eabfa6c6f5d3bd6d90b3678.jpg",

    "https://i.pinimg.com/564x/13/be/17/13be171c7248eb50554daa1aaa6fa32d.jpg",

    "https://i.pinimg.com/564x/b7/f9/41/b7f941ba09bef2c6c62569bf41dc9e67.jpg",

    "https://i.pinimg.com/564x/cd/53/c8/cd53c85aa80302bd3711c23dc555bcae.jpg",

    "https://i.pinimg.com/564x/d7/d7/34/d7d734cc480aa49609131f1cd29d3b20.jpg",

    "https://i.pinimg.com/564x/06/d8/47/06d847c07d0226849152737dff056c63.jpg",

    "https://i.pinimg.com/564x/b0/01/ce/b001ce9bb7e577fd9207291f16e26cda.jpg"
]

var comidas = [
    "https://i.pinimg.com/564x/6a/88/32/6a8832d29a911b320f9c68af86f8e134.jpg",

    "https://i.pinimg.com/564x/62/38/08/6238083cdbed4e1243890eb8f4e53867.jpg",

    "https://i.pinimg.com/564x/4c/34/f0/4c34f0e70d69de7ca67c61cc6457d0b1.jpg",

    "https://i.pinimg.com/564x/6e/c7/8e/6ec78e5bed37d3b0ac52f9581a814195.jpg",

    "https://i.pinimg.com/564x/73/35/34/73353454e5844ea81ce617517931f1c4.jpg",

    "https://i.pinimg.com/564x/13/21/7a/13217abce651e33dc2c72a22554de8c9.jpg",

    "https://i.pinimg.com/564x/a3/38/d0/a338d02b260a5f4ec98a4108e4dc19e8.jpg",

    "https://i.pinimg.com/564x/5b/ce/90/5bce9017cc10547022b479d9ea1808c8.jpg",

    "https://i.pinimg.com/564x/55/07/7b/55077b8b47e110259408ff88dcc86340.jpg",

    "https://i.pinimg.com/236x/5a/06/11/5a061162bb7d22562e1c7ede71d3b521.jpg",

    "https://i.pinimg.com/236x/eb/05/7b/eb057ba713b5847b26147d23cd87c00d.jpg",

    "https://i.pinimg.com/564x/cf/05/af/cf05afdc709be5c9dc632e9bb0dd9798.jpg",
];

cidades = [
    "https://i.pinimg.com/564x/0a/ee/3a/0aee3a20fe927e2831bceccec45d863d.jpg",

    "https://i.pinimg.com/564x/82/6f/65/826f657809e281740a40f4fe840227d0.jpg",

    "https://i.pinimg.com/564x/ab/cf/e3/abcfe3bdc2431464476ca1aae7e472f0.jpg",

    "https://i.pinimg.com/564x/90/0f/3d/900f3da8ec3ccf4d199effa093b20ade.jpg",

    "https://i.pinimg.com/564x/65/70/dd/6570ddd8c47dd255f89331687e03ae91.jpg",

    "https://i.pinimg.com/564x/ce/7b/d5/ce7bd57458e16e034be0db89304b3306.jpg",

    "https://i.pinimg.com/564x/9a/3b/77/9a3b7704d5762cc11480f1647e8ef8d6.jpg",

    "https://i.pinimg.com/564x/d0/1a/7e/d01a7e75abaf650945e1742a7f746ea8.jpg",

    "https://i.pinimg.com/564x/f4/c8/96/f4c896c8b63d4588bee5e14aa8cadf04.jpg",

    "https://i.pinimg.com/564x/6a/c7/81/6ac7812239e4643d87eef5fc0c37cbe8.jpg",

    "https://i.pinimg.com/564x/4c/b7/e7/4cb7e7054887dd332def076b354eedde.jpg",

    "https://i.pinimg.com/736x/ab/07/0f/ab070f73143fb7c85579951813f85354.jpg",
];

function mudar(imgs, lista, ids){
    for (let x = 0; x <= 11; x++){
        imgs[x].src = lista[x];
        ids[x].href = lista[x];
    }
}

var nome = [
    document.getElementById('item0'), 
    document.getElementById('item1'), 
    document.getElementById('item2')
];

var lista = [
    natureza,
    comidas,
    cidades
]


nome[0].addEventListener('click', function(){
   mudar(imgs, lista[0], ids);
})
nome[1].addEventListener('click', function(){
    mudar(imgs, lista[1], ids);
 })
nome[2].addEventListener('click', function(){
   mudar(imgs, lista[2], ids);
}) 

console.log(nome)
