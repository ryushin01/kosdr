# 신협 전자등기 프로젝트

***TODO***: 20250113

- Gitlab Merge Request Pipeline Stuck
    - https://jost-do-it.tistory.com/entry/Gitlab-CICD%EC%97%90%EC%84%9C-Merge-Request-%EC%8B%9C-CIPIPELINESOURCE%EA%B0%80-push%EB%A1%9C-%EC%8B%A4%ED%96%89%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
    - https://saramin.github.io/2021-11-09-gitlab-runner
    - https://workshop.infograb.io/gitlab-ci/22_configure_gitlab_ci_pipeline/5_run_and_test/
    - https://tofusand-dev.tistory.com/150
    - https://gitlab-docs.infograb.net/ee/ci/pipelines/merge_request_pipelines.html
- Axios 공통 모듈 개발 > ref interceptor 파일 참조
    - 기본 모듈
    - 요청 시 인증 토근 추가 모듈
    - GET 요청 함수
    - POST 요청 함수
    - refresh token
- 참고: next.js axios / axios 커스텀 refresh token / axios react-error-boundary
    - https://velog.io/@syoo970/%EB%82%B4%EA%B0%80-next.js%EC%99%80-axios%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
    - https://white-blank.tistory.com/182
    - https://velog.io/@codenmh0822/Axios-Interceptor-Customizing
    - https://coding-levup.tistory.com/82
    - https://many.tistory.com/103
    - https://want-all.tistory.com/14
    - https://velog.io/@crab4862/refresh-token-%EA%B5%AC%ED%98%84-axios-interseptors
    - https://ramincoding.tistory.com/entry/React-Axios-instance-%EC%99%80-interceptors-%EB%A1%9C-Axios-%ED%9A%A8%EC%9C%A8%EC%84%B1-%EB%86%92%EC%9D%B4%EA%B8%B0
    - https://velog.io/@hwon3814/React-%EC%BB%A4%EC%8A%A4%ED%85%80-axios-%EB%A7%8C%EB%93%A4%EC%96%B4-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
    - https://velog.io/@2wndrhs/Axios-interceptor%EB%A1%9C-API-%EC%9D%91%EB%8B%B5-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0
    - https://kimyouknow.github.io/fe/Axios%20Instance%EC%99%80%20Interceptor:%20HTTP%20%EC%9A%94%EC%B2%AD%EA%B3%BC%20%EC%9D%91%EB%8B%B5%20%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
    - https://1yoouoo.tistory.com/36
    - https://dev-astra.tistory.com/594
    - https://sugarsyrup.tistory.com/entry/Axios-Custom-Hook-TypeScript-%ED%99%98%EA%B2%BD%EC%9C%BC%EB%A1%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0
    - https://growing-jiwoo.tistory.com/102
    - https://velog.io/@thkim/Error-Boundary%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0
    - https://lasbe.tistory.com/204
    - https://velog.io/@jibyo/React-Error-Handlingfeat.-react-query-axios
    - https://blog.naver.com/dlaxodud2388/223293010810
    - https://mitchell-up.github.io/mitchell-dictionary/blog/error-handle/

***
> 개발 후 반드시 lint 실행을 통해 `No ESLint warnings or errors` 문구 출력이 확인된 상태에서 소스 코드를 저장소로 올립니다.
***

## 시작 가이드

### 요구 사항

- Node.js v22.13.0 (LTS)
- nvm v0.40.1 이상
- pnpm v9

### 설치 및 실행

```bash
// nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

// Node.js v22.13.0 (LTS)
nvm install 22

// pnpm
corepack enable pnpm

// package
pnpm install

// run
pnpm run dev
```

***

## 프로젝트 정보

### 기술 스택

![My Skills](https://skillicons.dev/icons?i=react,nextjs,tailwind,js,ts,pnpm,docker)

### 프로젝트 구조

```
📦 project
├── 🗂️ public
│ ├── 🗂️ fonts        // 웹 폰트
│ ├── 🗂️ icons        // svg 아이콘
│ └── 🗂️ images       // 이미지 파일
│ └── 🏙️ logo.svg     // 파비콘
│
├── 🗂️ src
│ ├── 🗂️ app          // 라우팅 관련 파일
│ ├── 🗂️ components   // 공통 컴포넌트
│ ├── 🗂️ constants    // 공통 상수값
│ ├── 🗂️ hooks        // 공통 커스텀 훅
│ ├── 🗂️ libs         // 외부 라이브러리
│ ├── 🗂️ services     // 각종 API 요청
│ ├── 🗂️ stores       // 전역 상태 관리 대상인 state
│ ├── 🗂️ styles       // 전역 및 모듈화된 스타일 파일
│ ├── 🗂️ types        // 각종 타입스크립트 타입 정의
│ └── 🗂️ utils        // 공통 유틸리티 함수
```

***

## 부가 설정

### ![My Skills](https://skillicons.dev/icons?i=idea)

> ***ESLint***
>
> IntelliJ - 설정 - 언어 및 프레임워크 - JavaScript - 코드 품질 도구 - ESLint - `수동 ESLint 구성` 체크 활성화 - ESLint 패키지 경로 지정 - 구성 파일 경로
> 지정 - `저장 시 eslint --fix 실행` 체크 활성화

> ***Prettier***
>
> IntelliJ - 설정 - 플러그인 - Prettier 설치 - 언어 및 프레임워크 - JavaScript - Prettier - `수동 Prettier 구성` 체크 활성화 - Prettier 패키지 경로
> 지정 - `'코드 서식 다시 지정' 액션 시 실행` 체크 활성화 - `저장 시 실행` 체크 활성화

> ***파일 저장 시 자동 코드 정렬 기능 활성화***
>
> IntelliJ - 설정 - 도구 - 저장 시 액션 - `코드 서식 다시 지정` 체크 활성화

> ***주석 태그 활용 및 커밋 옵션 제외 처리***
>
> IntelliJ - 기본 설정 - 설정 - 에디터 - 할일 목록 - 추가 - `NOTE` 패턴 입력 - `색 구성표 TODO 디폴트 색상 사용` 체크 비활성화 - 전경 헥스코드 영역 클릭 - `00a8ff` 헥스
> 코드 입력 후 선택 - 확인 - 적용 - 확인
>
> IntelliJ - 커밋 탭 - 커밋 및 푸시 버튼 우측의 커밋 옵션 표시 - `TODO 확인` 체크 비활성화

### ![My Skills](https://skillicons.dev/icons?i=vscode)

> ***ESLint***
>
> Visual Studio Code - 기본 설정 - 확장 - ESLint 검색 후 설치

> ***Prettier***
>
> Visual Studio Code - 기본 설정 - 확장 - Prettier 검색 후 설치 - 기본 설정 - 설정 - `default formatter` 검색 - 텍스트 편집기 -
> 셀렉터에서 `Prettier - Code formatter` 선택

> ***파일 저장 시 자동 코드 정렬 기능 활성화***
>
> Visual Studio Code - 기본 설정 - 설정 - `format on save` 검색 - `Editor: Format On Save` 체크 활성화
