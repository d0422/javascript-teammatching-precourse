# 기능 구현

## 공통

1. ~~크루관리와 팀매칭 관리 탭이동~~
2. 다른탭에 이동했다가 돌아와도 기존 탭에 상태 유지 -> localstorage사용

## 크루 관리

1. ~~코스별로 크루 추가 -> 유효성 검사(5글자,중복검사)~~
   1. 인덱스 추가, 이름, 삭제버튼 => class로 설계
   2. 로컬스토리지에 저장
2. 코스별 크루 삭제(confirm 체크)

## 팀매칭관리

1. 미션마다 무작위 팀을 매칭 => Random.shuffle이용
2. 적어도 n명으로 구성
   1. 일단, n명으로 구성
   2. 나머지는 한명씩 배부
