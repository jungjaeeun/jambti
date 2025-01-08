# JAMTI

## Technologies Used

- Next.js 14
- React
- TypeScript
- react-query
- redux
- Styled-components
- tailwind
- firebase

## Installation

1. 프로젝트를 클론
   ```bash
   git clone https://github.com/jungjaeeun/jambti.git
   ```
2. 프로젝트 디렉토리로 이동
   ```bash
   cd jambti
   ```
3. 의존성 패키지 설치
   ```bash
   npm install
   # 또는 yarn 사용 시
   yarn install
   ```
4. 개발 서버 실행
   ```bash
   npm run dev
   # 또는 yarn 사용 시
   yarn dev
   ```

## Usage

- /home: 홈 페이지
- /community: 커뮤니티 페이지
- /my: 내 정보 페이지

## Folder Structure

```plaintext
src/
  app/
    auth/                   # 인증 관련 페이지 (signin, signup 등)
      sign-in/
        page.tsx
      sign-up/
        page.tsx
      sign-out/
        page.tsx
      reset-password/
        page.tsx
    home/                   # 홈 페이지
      page.tsx
    community/              # 커뮤니티 페이지
      page.tsx
    my/                     # 내 정보 페이지
      page.tsx
    layout.tsx              # 공통 레이아웃
  components/               # 재사용 가능한 UI 컴포넌트
    Button.tsx
    Card.tsx
    Navbar.tsx
  hooks/                    # 커스텀 훅
    useAuth.ts
    useFetch.ts
  styles/                   # 스타일 관련 파일
    theme.ts                # 테마 설정
    globals.css             # 전역 CSS 설정
  utils/                    # 유틸리티 함수들
```
