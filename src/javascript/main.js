const content = "오늘은 뭘 먹을까?";
const text = document.querySelector(".text");
let i = 0;

function typing() {
    if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
    }
}
setInterval(typing, 200)

//참고 사이트
//https://velog.io/@somangoi/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B06-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9D%B4%ED%95%91-%ED%9A%A8%EA%B3%BC