# 뉴욕 타임즈 기사 API를 활용한 리액트 프로젝트
<img width="252" alt="image" src="https://user-images.githubusercontent.com/85912592/180590466-244c0428-5169-4523-b0db-0f97bc1cc4db.png">
배포 링크 : https://jsk3342.github.io/NYT

## 목표
- 리액트, 리덕스를 활용하여 뉴욕 타임즈 기사 구현

## 사용 스택
- react, redux, react-router v6, axios, styled-component

## 프로젝트 구조

```
📦NYT
 ┣ 📂.github
 ┃ ┗ 📂workflow
 ┃ ┃ ┗ 📜deploy.yml
 ┣ 📂public
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📜btn_Home_Select.png
 ┃ ┃ ┣ 📜btn_Home_Select_black.png
 ┃ ┃ ┣ 📜btn_Sheet.png
 ┃ ┃ ┣ 📜btn_Sheet_black.png
 ┃ ┃ ┣ 📜date.png
 ┃ ┃ ┣ 📜file-text.png
 ┃ ┃ ┣ 📜serch.png
 ┃ ┃ ┣ 📜star-empty.png
 ┃ ┃ ┗ 📜star-fill.png
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Card
 ┃ ┃ ┃ ┣ 📂Byline
 ┃ ┃ ┃ ┃ ┣ 📜Byline.js
 ┃ ┃ ┃ ┃ ┗ 📜Byline.module.css
 ┃ ┃ ┃ ┣ 📂CreationDate
 ┃ ┃ ┃ ┃ ┣ 📜CreationDate.js
 ┃ ┃ ┃ ┃ ┗ 📜CreationDate.module.css
 ┃ ┃ ┃ ┣ 📂Title
 ┃ ┃ ┃ ┃ ┣ 📜Title.js
 ┃ ┃ ┃ ┃ ┗ 📜Title.module.css
 ┃ ┃ ┃ ┣ 📜Card.js
 ┃ ┃ ┃ ┗ 📜Card.module.css
 ┃ ┃ ┣ 📂Date
 ┃ ┃ ┃ ┣ 📜Date.js
 ┃ ┃ ┃ ┗ 📜Date.module.css
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┃ ┣ 📜HomeButton.js
 ┃ ┃ ┃ ┃ ┣ 📜HomeButton.module.css
 ┃ ┃ ┃ ┃ ┣ 📜ScrapButton.js
 ┃ ┃ ┃ ┃ ┗ 📜ScrapButton.module.css
 ┃ ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┃ ┣ 📂HeadLine
 ┃ ┃ ┃ ┣ 📜HeadLine.js
 ┃ ┃ ┃ ┗ 📜HeadLine.module.css
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📂SelectCountry
 ┃ ┃ ┃ ┃ ┣ 📜SelectCountry.js
 ┃ ┃ ┃ ┃ ┗ 📜SelectCountry.module.css
 ┃ ┃ ┃ ┣ 📂SelectDate
 ┃ ┃ ┃ ┃ ┣ 📜SelectDate.js
 ┃ ┃ ┃ ┃ ┗ 📜SelectDate.module.css
 ┃ ┃ ┃ ┣ 📂SelectHeadLine
 ┃ ┃ ┃ ┃ ┣ 📜SelectHeadLine.js
 ┃ ┃ ┃ ┃ ┗ 📜SelectHeadLine.module.css
 ┃ ┃ ┃ ┣ 📜Header.js
 ┃ ┃ ┃ ┗ 📜Header.module.css
 ┃ ┃ ┣ 📂Hidden
 ┃ ┃ ┃ ┣ 📜Hidden.js
 ┃ ┃ ┃ ┗ 📜Hidden.module.css
 ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┣ 📜Modal.js
 ┃ ┃ ┃ ┗ 📜Modal.module.css
 ┃ ┃ ┣ 📂Nation
 ┃ ┃ ┃ ┣ 📂NationButtons
 ┃ ┃ ┃ ┃ ┣ 📜NationButtons.js
 ┃ ┃ ┃ ┃ ┗ 📜NationButtons.module.css
 ┃ ┃ ┃ ┣ 📜Nation.js
 ┃ ┃ ┃ ┗ 📜Nation.module.css
 ┃ ┃ ┣ 📜LikeButton.js
 ┃ ┃ ┣ 📜LikeButton.module.css
 ┃ ┃ ┣ 📜Nav.js
 ┃ ┃ ┗ 📜Nav.module.css
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂Scrap
 ┃ ┃ ┃ ┣ 📂EmptyScrap
 ┃ ┃ ┃ ┃ ┣ 📜EmptyScrap.js
 ┃ ┃ ┃ ┃ ┗ 📜EmptyScrap.module.css
 ┃ ┃ ┃ ┣ 📜Scrap.js
 ┃ ┃ ┃ ┗ 📜Scrap.module.css
 ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┣ 📂Main
 ┃ ┃ ┃ ┃ ┣ 📜Main.js
 ┃ ┃ ┃ ┃ ┗ 📜Main.module.css
 ┃ ┃ ┃ ┣ 📜Home.js
 ┃ ┃ ┃ ┗ 📜Home.module.css
 ┃ ┣ 📂store
 ┃ ┃ ┣ 📜API.js
 ┃ ┃ ┣ 📜getArticle.js
 ┃ ┃ ┣ 📜headline.js
 ┃ ┃ ┣ 📜modal.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.json
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

##
앱 시작시에 바로 나오는 화면입니다.
new york times의 Article Search api 호출 데이터로 기사를 리스트업 해주고, 메인 타이틀 클릭 시 기사의 URL로 리다이렉트 됩니다.
헤더의 버튼들을 누르면 모달창이 나오게 되고 키워드를 입력하게 되면 기사의 리스트를 불러오게 됩니다. 적용을 누르면 모달창은 사라집니다.
타이틀과 저자가 길어지면 말줄임표를 사용하여 처리하였습니다.


## 미구현 도전과제
Datepicker로 달력 구현하기
“국가" 선택지들은 체크박스 구현하기
기사 옆 별표로 데이터 스크랩 하기
