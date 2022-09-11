function generateSingleStanza(number){
    if(number === 1){
        return `${number} бутылка пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, нет бутылок пива на стене!`
    }
    else if(number >=2 && number <= 4){
        return `${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу,  ${number -=1} бутылки пива на стене!`
    }
    else if(number % 10 === 2){
        return `${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${number -=1} бутылки пива на стене!`
    }
    else if (number % 10 === 1){
        return `${number} бутылка пива на стене, ${number} бутылка пива! Возьми одну, пусти по кругу, ${number -=1} бутылка пива на стене!`
    }
    else if(number >=0 || number <= 99){
        return `${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${number -=1} бутылок пива на стене!`
    }
    
}
function generateSongText(){
    for (let i = 99; i >= 1; i--){
        console.log(generateSingleStanza(i))
    }
}
generateSongText()
