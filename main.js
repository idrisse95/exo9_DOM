


// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*
// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
var elements = document.querySelectorAll('#liste-soft-skills>h2')
console.log(elements);


// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

for (const key in softSkills) {
 
    

    switch (softSkills[key]) {
        case '49%':
            document.querySelector('#liste-soft-skills h2:nth-child(2)').innerHTML = (`${softSkills[key]}`);
           
;            break;

            case '87%':
                document.querySelector('#liste-soft-skills h2:nth-child(3)').innerHTML = (`${softSkills[key]}`)
                
                break;

                case '50%':
                    document.querySelector('#liste-soft-skills h2:nth-child(1)').innerHTML = (`${softSkills[key]}`)
                    break;

        
                    case '15%':
                        document.querySelector('#liste-soft-skills h2:nth-child(4)').innerHTML = (`${softSkills[key]}`)
                        break;
    
        default:
            break;
    }

    
   
}



 

// ### 3. Change le style des h2 selons certaines conditions :
// - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// - Si //     //  égale à 50 alors il n'y a pas de background
// - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir

 


for (const key in softSkills) {

switch (softSkills[key]) {
    case '49%' && '15%':
        document.querySelector('#liste-soft-skills h2:nth-child(4)').style.backgroundColor = 'red'
        document.querySelector('#liste-soft-skills h2:nth-child(2)').style.backgroundColor = 'red'
        break;

        case '87%':
            document.querySelector('#liste-soft-skills h2:nth-child(3)').style.backgroundColor = 'green'
            document.querySelector('#liste-soft-skills h2:nth-child(3)').style.color = 'white'

           
      
            break;

    default:
        break;
}


}




    
