const letra = "b"



function ehVogal(){
    
    
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log('Vogal');
            break;
        default:
            console.log('Consoante');
    }
    
}
console.log(ehVogal())