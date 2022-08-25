let data = JSON.parse(JSON.stringify(elice));
console.log(data)

const newherf_before = location.href;
const newhref = decodeURI(newherf_before);
const url = new URL(newhref);
const urlParams = url.searchParams;
const id1  = urlParams.get('id1'); 
const id2 =  urlParams.get('id2');
const id3 =  urlParams.get('id3');
const id4 = urlParams.get('id4');
const id5 =  urlParams.get('id5');
const id6 =  urlParams.get('id6')
console.log(newhref);
console.log('1',id1)
console.log('2',id2)
console.log('3',id3)
console.log('4',id4)
console.log('5',id5)
console.log('6',id6)
let sum = 0
let plus = 0


if(id1=='answerA'){
    plus++
    console.log('A')
    console.log('1', plus)
    
} console.log('1', plus)
if (id2 == 'answerA') {
    plus++
    console.log('A')
    console.log('2',plus)
}
console.log('2', plus)
if(id3 =='answerA'){
    plus++
    console.log('A')
    console.log('3', plus)
}
console.log('3',plus)
if(id4=='answerA'){
    plus++
    console.log('A')
    console.log('4',plus)
}
console.log('4',plus)
if(id5=='answerA'){
    plus++
    console.log('A')
    console.log('5',plus)
}
console.log('5',plus)
if (id6 == 'answerA') {
    //문항 6번은 아무것도x
    console.log('A')
    console.log('6',plus)
}
console.log('6',plus)
sum += plus
console.log('sum',sum)
const result = document.querySelector('.result');
const result_text = document.createElement('p');
const choice = document.querySelector('.choice');
const choice_text = document.createElement('p');


if(sum == 1){
    result_text.textContent = 'myWay' // 마이웨이형
    if (id5 == 'answerA') {
        result_text.textContent = 'gourmet'//고독한 미식가
    }
} else if(sum == 2){
    result_text.textContent = 'indecisive' //우유부단형 
    if (id4 == 'answerB' && id4 == 'answerB') { result_text.textContent = 'wellBeing' } // 건강최고형
} else if(sum == 3){
    result_text.textContent = 'wellKnow' // 맛좀아는형
    if (id5 == 'answerA') { result_text.textContent = 'childTaste' }// 초딩입맛형

} else if (sum == 4) {
    result_text.textContent = 'Michelin' // 미슐랭마스터형
    if (id4 == 'answerB') {
        result_text.textContent = 'hipster' // 홍대힙스터형
    }
} else if (sum == 5) {
        result_text.textContent = 'hipster' //홍대힙스터형
} else if (sum == 0) {
    result_text.textContent = 'homeFood' //집밥형
}


const result_kor = document.querySelector('.result_kor');
const result_text_kor = document.createElement('p');

//한글화
if (result_text.innerText == "hipster") {
    result_text_kor.textContent = "#홍대힙스터형";
} else if (result_text.innerText == "homeFood") {
    result_text_kor.textContent = "#집밥형";
} else if (result_text.innerText == "Michelin") {
    result_text_kor.textContent = "#미슐랭마스터형";
} else if (result_text.innerText == "wellKnow") {
    result_text_kor.textContent = "#맛좀아는형";
} else if (result_text.innerText == "childTaste") {
    result_text_kor.textContent = "#초딩입맛형";
} else if (result_text.innerText == "wellBeing") {
    result_text_kor.textContent = "#건강최고형";
} else if (result_text.innerText == "indecisive") {
    result_text_kor.textContent = "#우유부단형";
} else if (result_text.innerText == "gourmet") {
    result_text_kor.textContent = "#고독한 미식가";
} else if (result_text.innerText == "myWay") {
    result_text_kor.textContent = "#마이웨이형";
}
   
 console.log(result_text.textContent);
 let testarray = []
data.forEach((item, index) =>{
    let testresult = item.test_result;
    let arr_testresult = testresult.split(', ');
/*    console.log(index, arr_testresult) */
   /*  console.log(arr_testresult.length) */
   for( let v = 0; v<arr_testresult.length; v++){
  
    if(arr_testresult[v] == result_text.textContent){
      /*   console.log(arr_testresult[v]);  */
        const test_menu = item.menu
        testarray.push(test_menu)
        const test_randomindex = Math.floor(Math.random() * testarray.length);
     /*    console.log('random_testindex',test_randomindex);  */
       const random_testmenu = testarray[test_randomindex];
        /*   console.log(random_testmenu);  */
        choice_text.textContent =  random_testmenu
    }
    }

    result.appendChild(result_text);
    result_kor.appendChild(result_text_kor);
    choice.appendChild(choice_text);
 
})