var arrNames = [
    'Світланою',
    'Тетяною',
    'Катериною',
    'Валентиною',
    'Софією',
    'Дариною'
]
function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function tryYourLuck(){
    var partnerName = arrNames[getRandom(arrNames.length)];
    var childrenCount = getRandom(50);
    var childrenWord;
    if(childrenCount === 1){
        childrenWord = "дитина";
    } else{
        childrenWord = "дітей";
    }
    alert(`Ви укладете шлюб з ${partnerName} та у вас буде ${childrenCount} ${childrenWord}`);
}
