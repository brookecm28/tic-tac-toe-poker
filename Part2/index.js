console.log("The house always wins!")

const id = document.getElementById('identification')
console.log(id)
const colorInput = document.getElementById('style')
console.log(style)

function setCard () {
   const card = document.getElementById(id.value)
   console.log(card)
   card.style.color = colorInput.value
}

const refresh = document.getElementById('refresh')
refresh.addEventListener('click', e => {
    window.location.reload(false)
})