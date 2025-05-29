# TODOLIST

할 일 게시, 삭제, 완료 여부를 표시할 수 있는 투두 리스트입니다
 ---> [🌝](https://todos-pi-three.vercel.app/)

## 개요

### `개발 환경`

React, SCSS, MongoDB, axios, Zustand

### `제작 기간`

2024.09 - 약 3일

### `기능`

- 등록
- 삭제 / id가 다른 데이터만 필터
- 완료/진행중 키고 끄기
- 할 일 All, Active, Completed로 구분

## 트러블슈팅
- 할 일 등록 후에 할일이 지워지지 않음<br/>
  : value값을 비우는 코드 추가
- 데이터를 추가/삭제 했을 때 갱신되지 않음<br/>
 : 의존성 배열에 data 넣음