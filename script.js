/* const blur_svg = document.querySelector('.blur-svg')
const pokemon_sprite = document.querySelector('.pokemon')

async function poke_info(pokemon)
{
    let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    return request.json()
}


poke_info('emboar')
.then(data => {

    let {sprites } = data
    console.log(sprites)
    let sprite_svg = sprites.other.dream_world.front_default
    let sprite_pixel = sprites.front_female

    blur_svg.setAttribute('src', sprite_svg)
    pokemon_sprite.setAttribute('src', sprite_svg)

})
.catch(err => console.log(err)) */

const images = document.querySelectorAll('.poke-cards img')

console.log(images[0])
let currentImageIndex = 0

function showImages(){

    images[currentImageIndex].classList.remove('active')
    currentImageIndex = (currentImageIndex + 1) % images.length
    images[currentImageIndex].classList.add('active')

    console.log(currentImageIndex)


}

setInterval(showImages, 4000)
console.log(images)