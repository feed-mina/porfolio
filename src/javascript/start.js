const qnaList = [
    {
        q: '1. 엘리스 토끼는 모자장수와 도도새 셋이서 밥을 먹으러 가려고 합니다. 어떤 식당을 고를까요?',
        a: [
            { answer: 'a. 다소 북적북적한 식당'},
            { answer: 'b. 한적하고 조용한 식당'}
        ]
    },
    {
        q: '2. 가게 안에서 메뉴를 고르는데, 의견이 갈린 모자장수와 도도새가 서로 말다툼을 하네요. "엘리스 토끼야, 너는 어떻게 생각해?"',
        a: [
            { answer: 'a. 모험 없는 성공은 없다! 새로운 메뉴를 시도해보자.'},
            { answer: 'b. 아는 맛이 최고! 늘 먹던 메뉴를 먹자.'}
        ]
    },
    {
        q: '3. 우여곡절 끝에 결정한 음식이 나왔습니다. 엘리스 토끼는 가장 먼저... ',
        a: [
            { answer: 'a. 사진을 찍어 원더스타그램에 자랑한다.'},
            { answer: 'b. 음식에 집중해 맛있게 먹는다.'}
        ]
    },
    {
        q: '4. "이건 너무 맵잖아!" 각자 시킨 요리를 먹던 중 도도새가 버럭! 화를 냅니다. 이럴 땐...',
        a: [
            { answer: 'a. "도도새야, 내가 대신 먹어줄까?"'},
            { answer: 'b. "사장님, 시원한 음료 추가할게요."'}
        ]
    },
    {
        q: '5. 식사를 마칠 때쯤, 요리사가 다가와 엘리스토끼에게 물어봅니다. "오늘 내온 요리 중에 무엇이 제일 마음에 들었지?"',
        a: [
            { answer: 'a. 기름지고 풍미가 강한 요리'},
            { answer: 'b. 부드럽고 담백한 요리'}
        ]
    },
    {
        q: '6. "만족스러웠어." "나한텐 매웠지만!" 엘리스 토끼 일행은 배를 두드리며 가게를 나옵니다. 모자장수가 근엄하게 묻스비다. "자, 이제 디저트는 뭐로 하지?"',
        a: [
            { answer: 'a. "Drink me!" 라벨이 붙은 음료'},
            { answer: 'b. "Eat me!" 라고 쓰인 케이크'}
        ]
    }
]


let qNum = 0;


 
function addAnswer(answerText){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    a.appendChild(answer);
    answer.innerHTML = answerText;
}
function goNext(qNum){
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qNum].q;
    for (let i in qnaList[qNum].a){
        addAnswer(qnaList[qNum].a[i].answer);
    }
}