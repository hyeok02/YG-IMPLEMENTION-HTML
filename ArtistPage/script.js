document.addEventListener('DOMContentLoaded', function() {
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
    span.addEventListener('mouseenter', function() {
        this.style.color = 'black';
    });
    span.addEventListener('mouseleave', function() {
        if (!this.classList.contains('selected')) {
        this.style.color = '#C8C8C8';
        }
    });
    });
});