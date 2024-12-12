
let pseudo = document.querySelector('.pseudo');
let envoie = document.querySelector('.pseudoenvoie');
let myprofile = document.querySelector('.myprofile')
let images = document.querySelectorAll('.profile')
let error=document.querySelector('.error')
let start = document.querySelector('.start')
let second = document.querySelector('#second')
let username= document.querySelector('.username')
let rules= document.querySelector('.rules')
let pickimage= document.querySelector('.pickimage')
let result=document.querySelector('.result')
let cra = document.querySelector('#cra')
let iop = document.querySelector('#iop')
let féca = document.querySelector('#féca')
let other = document.querySelector('#Other')
let you =document.querySelector('#You')
let win= document.querySelector('.win')
let loose =document.querySelector('.loose')
let restart = document.querySelector('.restart-button')
let restart2 = document.querySelector('.restart-button2')
let score =0
let enemyScore =0
let pseudoValue = pseudo.value
restart2.addEventListener('click',Back2)
restart.addEventListener('click',Back)
rules.addEventListener('mouseover',text)
envoie.addEventListener('click', verif);
rules.addEventListener('mouseleave',erase)

images.forEach(element => {
    element.addEventListener('click',pickprofile)
});
function pickprofile(e)  {
    let src = e.target.src
    myprofile.src =src
}

function verif() {
        let pseudoValue = pseudo.value.trim(); 
        if (pseudoValue === '') {
            error.textContent = 'Veuillez entrez un pseudo'
            return;
        }
        console.log(pseudoValue);
        start.style.display=("none")
        myprofile.classList.remove('desactivate'); 
        second.style.display=("flex")
        username.textContent = pseudo.value
    }

function text() {
    rules.textContent= "La Fléche Bas l'épée ,L'épée Bas le Bouclier,Le Bouclier Bas la fléche . On obtient 1 point par victoire Les égalités 0 et les défaitent 0 le premiers a 20 gagnent"
}
function erase() {
    rules.textContent="Régle"
}

cra.addEventListener('click',gameCra)
iop.addEventListener('click',gameIop)
féca.addEventListener('click',gameFeca)
const choices = ["iop", "cra", "féca"]
    function getRandomChoice() {
        let choices = ["iop", "cra", "féca"];
        return choices[Math.floor(Math.random() * choices.length)];
}


    function updateResultDisplay(message) {
        result.textContent = message + ` Votre Score: ${score},Score de l'ennemi: ${enemyScore}`;
    }

function gameCra() {
        you.src = './asset/img/reverse cra.png'


    let random = getRandomChoice()
    if (random =="cra")
        other.src = './asset/img/reverse cra.png'
        if (random =="iop")
        other.src = './asset/img/Iop_male (1) 1.png'
        if(random =="féca")
        other.src='./asset/img/gfd.png'
    if (random === 'cra') {
    updateResultDisplay("Égalité avec Cra!");
    } else if (random === 'iop') {
        score += 1;
    updateResultDisplay("Vous avez battu Iop avec Cra!");
    } else if (random === 'féca') {
    enemyScore += 1;
    updateResultDisplay("Féca a battu votre Cra!");
    }
    checkGameEnd();
    }

    function gameIop() {
        you.src = './asset/img/Iop_male (1) 1.png'
        let random = getRandomChoice()
        if (random =="cra")
            other.src = './asset/img/reverse cra.png'
            if (random =="iop")
            other.src = './asset/img/Iop_male (1) 1.png'
            if(random =="féca")
            other.src='./asset/img/gfd.png'
        if (random === 'cra') {
            enemyScore += 1;
            updateResultDisplay("Cra a battu votre Iop!");
        } else if (random === 'iop') {
            updateResultDisplay("Égalité avec Iop!");
        } else if (random === 'féca') {
            score += 1;
            updateResultDisplay("Vous avez battu Féca avec Iop!");
        }
        checkGameEnd();
    }
    function gameFeca() {
        you.src = './asset/img/gfd.png'
        let random = getRandomChoice()
        if (random =="cra")
            other.src = './asset/img/reverse cra.png'
            if (random =="iop")
            other.src = './asset/img/Iop_male (1) 1.png'
            if(random=="féca")
            other.src='./asset/img/gfd.png'
        if (random === 'cra') {
            score += 1;
            updateResultDisplay("Vous avez battu Cra avec Féca!");
        } else if (random === 'iop') {
            updateResultDisplay("Iop a battu votre Féca!");
        } else if (random === 'féca') {
            enemyScore += 1;
            updateResultDisplay("Égalité avec Féca!");
        }
        checkGameEnd();
    }


    function checkGameEnd() {
        if (score >= 10) {
            console.log('gagner')
            reset()
            second.style.display=("none")
            win.style.display=("flex")
        }
        if (enemyScore >=10) {
            console.log('perdu');
            reset()
            second.style.display=("none")
            loose.style.display=("flex")
        }
    }

    function reset() {
        score = 0;
        enemyScore = 0;
}

function Back() {
    console.log();
    score = 0;
    enemyScore = 0;
    loose.style.display=("none")
    second.style.display=("none")
    start.style.display=("flex")
    win.style.display = "none";
    result.textContent = ""
}
function Back2() {
    console.log();
    score = 0;
    enemyScore = 0;
    loose.style.display=("none")
    second.style.display=("none")
    start.style.display=("flex")
    loose.style.display = "none";
    result.textContent = ""
}