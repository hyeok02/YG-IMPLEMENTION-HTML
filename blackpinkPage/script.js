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



//앨범소개 언어선택
// script.js

// DOMContentLoaded 이벤트를 사용하여 문서가 로드된 후 실행될 함수를 등록합니다.
document.addEventListener('DOMContentLoaded', () => {
  // 모든 요소들을 선택합니다.
  const koreanElement = document.querySelector('.Korean2');
  const englishElement = document.querySelector('.English2');
  const chineseElement = document.querySelector('.Chinese2');
  const japaneseElement = document.querySelector('.Japanese2');

  // 각 요소를 클릭했을 때 실행될 함수를 등록합니다.
  koreanElement.addEventListener('click', () => {
    // 모든 요소들의 스타일을 초기화합니다.
    resetStyles();
    // 선택한 요소의 스타일을 변경합니다.
    koreanElement.classList.add('selected');
  });

  englishElement.addEventListener('click', () => {
    resetStyles();
    englishElement.classList.add('selected');
  });

  chineseElement.addEventListener('click', () => {
    resetStyles();
    chineseElement.classList.add('selected');
  });

  japaneseElement.addEventListener('click', () => {
    resetStyles();
    japaneseElement.classList.add('selected');
  });

  // 모든 요소들의 스타일을 초기화하는 함수입니다.
  function resetStyles() {
    koreanElement.classList.remove('selected');
    englishElement.classList.remove('selected');
    chineseElement.classList.remove('selected');
    japaneseElement.classList.remove('selected');
  }
});


function showEnglishDescription() {

  var information= document.querySelector(".information");
  
  information.innerHTML = "<p>World renowned girl-group BLACKPINK released their 2nd album [BORN PINK]. BLACKPINK made listeners addicted to their pre-release single ‘Pink Venom’ back in August, and now plans to take over the world with their 2nd album [BORN PINK]. </p> <p>							Their album title [BORN PINK] portrays the confidence BLACKPINK has in being born different, and eight tracks with unrivaled sounds have been pitched throughout their title song ‘Shut Down’ and the pre-release song ‘Pink Venom’.</p> <p>From a pre-release single to a full album, and a world tour…<br>Attention is being drawn to what kind of history they will write through their mega-scale project.</p>"
  
  }

function showKoreanDescription(){
  var information=document.querySelector(".information");
  information.innerHTML="<p>세계 최정상 걸그룹 BLACKPINK가 두 번째 정규 앨범 [BORN PINK]를 발표했다. 지난 8월 선공개곡 ‘Pink Venom’으로 전세계 리스너들을 중독시킨 BLACKPINK가 두 번째 정규앨범 [BORN PINK]로 또 한 번 전세계를 매혹시킬 전망이다.</p><p>[BORN PINK]는 태생부터 남다른 존재감을 지닌 BLACKPINK의 자신감을 드러내는 앨범명으로, 타이틀곡 ‘Shut Down’을 비롯한 BLACKPINK만의 강렬한 사운드를 담은 독보적인 트랙 8곡이 수록됐다.</p><p>선공개곡부터 정규앨범과 월드투어까지. 대규모 프로젝트를 통해 블랙핑크가 어떠한 신기록을 써내려갈지 주목된다.</p>"
}

function showChineseDescription(){
  var information=document.querySelector(".information");
  information.innerHTML="<p>世界顶级女团BLACKPINK发行了第2张正规专辑[BORN PINK]。BLACKPINK已于8 月发售先行曲《Pink Venom》，令全球听众着迷。预计本次第2张正规专辑 [BORN PINK]将再次俘获全球听众。</p><p>本张专辑名[BORN PINK]充分展现出BLACKPINK与生俱来的独特存在感和自信。专辑收录了包括主打曲《Shut Down》在内的8首歌曲，将尽显BLACKPINK强烈的音乐风格。</p>"

}

function showJapaneseDescription(){
  var information=document.querySelector(".information");
  information.innerHTML="<p>グローバルトップガールズグループＢＬＡＣＫＰＩＮＫが２ｎｄアルバム『ＢＯＲＮ　ＰＩＮＫ』をリリース。今年８月の先行公開シングル『Ｐｉｎｋ　Ｖｅｎｏｍ』でグローバルリスナーの心を鷲掴みにしたＢＬＡＣＫＰＩＮＫが２ｎｄアルバム『ＢＯＲＮ　ＰＩＮＫ』でもう一度世界を魅了する。</p><p>アルバム名の『ＢＯＲＮ　ＰＩＮＫ』は、生まれ持った圧倒的な存在感を放つＢＬＡＣＫＰＩＮＫの自信を表す。</p><p>タイトル曲『Ｓｈｕｔ　Ｄｏｗｎ』を始めとし、ＢＬＡＣＫＰＩＮＫならではの強烈なサウンドが魅力の８曲が収録されている。</p><p>先行公開曲からアルバム、そしてワールドツアーまで。大規模プロジェクトによりＢＬＡＣＫＰＩＮＫが塗り替えていく記録に世界が注目している。</p>"
}

