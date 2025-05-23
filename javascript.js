console.log('weewoo 2')

// document.getElementById('weewootitle').style.fontSize = '250%'


let greenText = document.getElementsByClassName('green')

function nameOfFunction () {
    console.log('hello')
    window.alert('meewoo')
}

nameOfFunction()

document.getElementById('lightButton').style.display = 'none'

function lightTheme () {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.getElementById('lightButton').style.display = 'none'
    document.getElementById('darkButton').style.display = 'inherit'

}

function darkTheme () {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    document.getElementById('darkButton').style.display = 'none'
    document.getElementById('lightButton').style.display = 'inherit'


}

function themeSwitcher () {
    document.body.classList.toggle = 'darkTheme'
}