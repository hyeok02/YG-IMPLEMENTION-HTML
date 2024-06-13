document.addEventListener('DOMContentLoaded', function () {
    //.lan 선택
    const languageSpans = document.querySelectorAll('.lan');

    //.lan 클릭 시 호출
    function changeLanguageColor() {
        //.lan 색상 설정
        languageSpans.forEach(span => {
            span.classList.remove('selected');
            span.style.color = '#C8C8C8';
        });

        //.lan 색상 black 설정하고 선택 클래스를 추가
        this.classList.add('selected');
        this.style.color = 'black';
    }

    //초기에 "KOREAN"이 선택
    changeLanguageColor.call(languageSpans[0]);

    //.lan 이벤트 리스너를 추가
    languageSpans.forEach(span => {
        span.addEventListener('click', changeLanguageColor);
        span.addEventListener('mouseenter', function () {
            this.style.color = 'black';
        });
        span.addEventListener('mouseleave', function () {
            if (!this.classList.contains('selected')) {
                this.style.color = '#C8C8C8';
            }
        });
    });
});

// 곡 소개 언어 박스
var KoreanInfo = document.getElementById("KoreanInfoId");
var EnglishInfo = document.getElementById("EnglishInfoId");
var ChinseInfo = document.getElementById("ChineseInfoId");
var JapaneseInfo = document.getElementById("JapaneseInfoId");
EnglishInfo.style.display = "none";
ChinseInfo.style.display = "none";
JapaneseInfo.style.display = "none";

function showKorean() {
    if(KoreanInfo.style.display == "none") {
        EnglishInfo.style.display = "none";
        ChinseInfo.style.display = "none";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "block";
    }
    else {
        EnglishInfo.style.display = "none";
        ChinseInfo.style.display = "none";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "block";
    }
}

function showEnglish() {
    if(EnglishInfo.style.display == "none") {
        EnglishInfo.style.display = "block";
        ChinseInfo.style.display = "none";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "none";
        korean.style.color = "gray";
        korean.style.border = "none";
    }
    // else {
    //     EnglishInfo.style.display = "block";
    //     ChinseInfo.style.display = "none";
    //     JapaneseInfo.style.display = "none";
    //     KoreanInfo.style.display = "none";
    // }
}

function showChinese() {
    if(ChinseInfo.style.display == "none") {
        ChinseInfo.style.display = "block";
        JapaneseInfo.style.display = "none";
        KoreanInfo.style.display = "none";
        EnglishInfo.style.display = "none";
    }
}

function showJapanese() {
    if(JapaneseInfo.style.display == "none") {
        JapaneseInfo.style.display = "block";
        KoreanInfo.style.display = "none";
        EnglishInfo.style.display = "none";
        ChinseInfo.style.display = "none";
    }
}

// show dropdown
document.querySelector('.listenImg').addEventListener('mouseover', function() {
    document.querySelector('.Box1').style.display = 'block';
});

document.querySelector('.option').addEventListener('mouseleave', function() {
    document.querySelector('.Box1').style.display = 'none';
});

document.querySelector('.buyImg').addEventListener('mouseover', function() {
    document.querySelector('.Box2').style.display = 'block';
});

document.querySelector('.buy').addEventListener('mouseleave', function() {
    document.querySelector('.Box2').style.display = 'none';
});