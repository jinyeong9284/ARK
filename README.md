# 24.06.27

```

👉 전체적인 반응형 화면 확인 및 수정 👈

1. PREVIEW 영역에서 모바일 버전시 너무 작아 모바일 화면시 너비값을 넓힘

2. ENCYCLOPEDIA 영역에서 모바일 버전시 작고 내용이 보이지 않아 너비값을 넓히고 내용이 보이도록 구현함

3. REVIEW 영역에서 모바일 버전시 글씨가 작게 보여 글씨를 키우고 br이 아닌 일정한 너비값을 주어 글씨가 잘떨어지도록 구현


👉 이벤트 수정 👈

boss 영역에서 버튼 클릭 시 부드럽게 넘어가지 않아 부드럽게 되도록 수정


👉 전체적으로 정리 및 마무리 👈

```

# 24.06.26

```

👉 전체적인 반응형 화면 확인 및 수정 👈

1. 상단 구름 영역의 태블릿 및 모바일 버전에서의 높이값을 조절

2. 스크롤시 글자가 나오는 영역에 따라 글씨 크기 및 너비값을 조절

3. count 영역 부분에서 모바일시 너무 작다는것을 파악-> 두개의 영역을 위아래로 배치

4. pick 영역에서 태블릿시 클릭 이벤트를 없애고 내용이 보이도록 하며 위아래로 배치

5. 카드 영역에서 카드와 내용을 위아래로 배치



👉 이벤트 수정 👈

1. 랜덤이미지 영역에서 스크롤시 모양의 너비가 넓어지는 효과

2. count 영역에서 스크롤시 하얀색 영역이 넓었다가 줄어드는 효과
 
3. pick 영역에서 공룡들이 옆에서 자리로 나오는 효과

```

# 24.06.25

BOSS, REVIEW 영역 HTML, CSS, jQuery 구현 완료

# 24.06.24

preview 영역 및 ENCYCLOPEDIA 영역 HTML, CSS 구현 완료

**문제점 및 해결**

```

❌ path로 된 부분의 값을 주는데 어려움을 느낌

⭕ path 값을 계속 수정하여 수정된 모양을 확인함

```

# 24.06.22

카드 영역 HTML,CSS,jQuery 구현 완료

**문제점 및 해결**

```

❌ 카드 이벤트 세션에서 다음 버튼을 눌렀을때 카드가 다 날라가서 아예 안보이는 현상이 발생 및 이전 버튼시도 같은 이벤트가 실행됨

⭕ 카드를 여러장 배치하여 한장만 날라가도록 구현 및 prev와 next class를 따로 만들어 이벤트를 따로 구현

```

# 24.06.21

카드 영역 HTML,CSS,jQuery 구현중, count 영역 jQuery 구현 완료

**문제점 및 해결**

```

01.

❌ 반응형시 버튼의 영역의 자리가 바뀜

⭕ flex를 주고 space-between을 주어 항상 그 자리에 있게끔 구현


02.

❌ 숫자 이벤트 세션에 스크롤시 계속 숫자가 바뀌는 현상이 발생

⭕ started라는 명령어를 만들어 그 세션에 도착했을때 한번만 실행되도록 구현함

```

# 24.06.20

count 영역 HTML, CSS 및 pick 영역 HTML, CSS,jQuery 구현 완료

**문제점 및 해결**

```

❌ pick 영역에서 이미지들의 position 값을 주는거에 어려움을 겪음

⭕ z-index에 값을 주어 이미지들의 순서를 맞춤

```

# 24.06.19

디자인 - 육식공룡 위주로 이미지 누끼따기
퍼블리싱 - 스크롤시 나타나는 글씨 영역 및 랜덤 이미지 영역 HTML, CSS, jQuery 구현

**문제점 및 해결**

```

01.

❌ 스크롤시 글자를 덮고 있는 path 영역이 다른데 다 같은 너비로 이벤트가 발생

⭕ scrollTrigger를 사용하여 문장마다 다른 너비값을 주어 해결함


02.

❌ 랜덤 이미지 hover시 이미지가 멈추지 않음

⭕ image.addEventListener("mouseenter", function () {
      clearInterval(intervalId); // Clear the interval when hovering
    });
   
    image.addEventListener("mouseleave", function () {
      // Restart the interval (if needed)
      intervalId = setInterval(function () {
        let random = Math.floor(Math.random() * images.length);
        image.src = images[random];
      }, 200);
    });

```

# 24.06.18

디자인 - 상단 영역 구름 이미지 및 이미지 누끼따기
퍼블리싱 - header 영역 및 구름 애니메이션 영역, 왼쪽 nav HTML, CSS, jQuery 구현 완료

**문제점 및 해결**

```

01.

❌ 구름이 흘러가는 느낌이여야 하는데 중간에 가다가 멈추는 현상들이 발생

⭕ img에 style 값을 주고 CSS에서 애니메이션 구현시 calc()를 사용하여 자연스럽게 흘러가도록 해결함


02.

❌ 왼쪽 nav 영역에 세로선이 길게 있어 답답한 느낌임

⭕ 세로선을 빼고 -로 나타냄

```

# 24.06.17

steam 및 나무위키에서 ark 사전조사 및 피그마 디자인 작업 완료

**문제점 및 해결**

```

❌ 나무위키에 있는 사진 해상도가 떨어짐

⭕ [[ARK:SE] Pteranodon by Phelcer on DeviantArt](https://www.deviantart.com/phelcer/art/ARK-SE-Pteranodon-596802850)라는 사이트 발견

```
