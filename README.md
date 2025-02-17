<div align = "center">
  
# 두리묭실(Doori-Salon)

<br/>
<img width="540" alt="Frame 60311" src="https://github.com/user-attachments/assets/f470c3c6-84bc-41cd-80a8-02b8da60cb30" />

### 반려견 케어와 미용사의 가치를 함께 완성하는 새로운 반려견 미용 중계 서비스, 두리묭실
</div>
<br/>


## 두리묭실 UI

### Design System
[두리묭실 Storybook 링크](https://storybook-durisalon.vercel.app/?path=/docs)
<br/>

<img width="648" alt="storybook screenshot" src="https://github.com/user-attachments/assets/45f3eaee-36a2-4eff-a6dd-c8813da81322" />

### Service UI
<img width="648" src="https://github.com/user-attachments/assets/2721ba03-1cb3-4ce6-a99a-ebe993f07356" />

**고객 미용일기, 미용사 포트폴리오 서비스**

**견적서 요청, 견적서 전송 서비스**

**AI 미용 서비스**

**미용 후기 및 별점 작성, 확인 서비스**

**미용사 월 매출 통계 서비스**

**자세한 온보딩**

**입점 요청, 수락**



## 폴더 구조

<details>
<summary> 두리묭실 폴더 구조 </summary>
<br/>

```root/
├─ apps/
│  ├─ duri/
│  │  ├─ src/
│  │  │  ├─ apis/
│  │  │  │  ├─ client.ts
│  │  │  │  └─ hooks/
│  │  │  │
│  │  │  ├─ components/
│  │  │  │  ├─ home/
│  │  │  │  ├─ map/
│  │  │  │  ├─ estimation/
│  │  │  │  ├─ diary/
│  │  │  │  └─ mypage/
│  │  │  │
│  │  │  ├─ pages/
│  │  │  │  ├─ home/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ map/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ estimation/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ diary/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ mypage/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ app.tsx
│  │  │  │  ├─ 404.tsx
│  │  │  │  └─ index.tsx
│  │  │  │
│  │  │  ├─ public/
│  │  │  │  ├─ fonts/
│  │  │  │  ├─ lotties/
│  │  │  │  ├─ pngs/
│  │  │  │  └─ svgs/
│  │  │  │
│  │  │  ├─ styles/
│  │  │  └─ utils/
│  │  │
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│  │
│  ├─ salon/
│  │  ├─ src/
│  │  │  ├─ apis/
│  │  │  ├─ components/
│  │  │  │  ├─ home/
│  │  │  │  ├─ history/
│  │  │  │  ├─ portfolio/
│  │  │  │  └─ mysalon/
│  │  │  │
│  │  │  ├─ pages/
│  │  │  │  ├─ home/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ history/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ portfolio/
│  │  │  │  │  └─ index.ts
│  │  │  │  ├─ mysalon/
│  │  │  │  │  └─ index.ts
│  │  │  │  │
│  │  │  │  ├─ app.tsx
│  │  │  │  ├─ 404.tsx
│  │  │  │  └─ index.tsx
│  │  │  │
│  │  │  ├─ public/
│  │  │  │  ├─ fonts/
│  │  │  │  ├─ lotties/
│  │  │  │  ├─ pngs/
│  │  │  │  └─ svgs/
│  │  │  │
│  │  │  ├─ styles/
│  │  │  └─ utils/
│  │  │
│  │  ├─ package.json
│  │  ├─ tsconfig.json
│  │  └─ turbo.json
│
├─ packages/
│  ├─ ui/
│  ├─ utils/
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ turbo.json
│
├─ node_modules/
├─ turbo.json
├─ package.json
├─ tsconfig.base.json
├─ yarn.lock
└─ .gitignore


```
</details>
<br />


## Technology Stack (기술 스택)
<img width="500" alt="architecture" src="https://github.com/user-attachments/assets/cf16f43b-2c78-446e-8799-13a95f91fae3">
<br/>
<table>
  <tr>
    <th>React</th><th>TypeScript</th><th>React-Query</th>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/e3b49dbb-981b-4804-acf9-012c854a2fd2" alt="React" width="50"></td>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="TypeScript" width="50"></td>
    <td align="center"><img src="https://blog.kakaocdn.net/dn/bn46NQ/btrUYpxt8eu/iIkghrhyYOztpLU3KcTrD0/img.png" alt="React-Query" width="50"></td>
  </tr>
</table>

<table>
  <tr>
    <th>Git</th><th>Figma</th><th>Notion</th><th>Jira</th>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" alt="Git" width="50"></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/aa07f6bc-5034-4461-babf-82ada48f36b0" alt="Figma" width="50"></td>
    <td align="center"><img src="https://github.com/user-attachments/assets/34141eb9-deca-416a-a83f-ff9543cc2f9a" alt="Notion" width="50"></td>
    <td align="center"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png" alt="Jira" width="50"></td>
  </tr>
</table>

<br/>

## 실행 방법

```
# 레포지토리를 클론 + 폴더 이동
git clone https://github.com/Duri-Salon/Duri-FE.git && cd Duri-FE

# 의존성 설치 (yarn-berry 이용)
yarn install

# 개발 서버를 실행 (http://localhost:3000, http://localhost:3001, http://localhost:3002)
yarn dev

# 프로덕션 빌드 파일을 생성 (dist 폴더에 저장됨.)
yarn build
yarn preview

```

<br />


## 팀 규칙

### **커뮤니케이션 규칙**
- 매일 **오전 9시** 데일리 스크럼 진행
    - **어제 한 일**, **오늘 할 일**, **문제점**을 공유하며 진행 상황 점검.
- 문서 공유 및 회의 기록은 **Notion**을 통해 관리.
- 매주 **일요일 저녁 10시** 정기 회의 진행
    - 주간 작업 점검 및 다음 주 계획 수립.

### 개발 컨벤션**

#### **코딩 컨벤션**
- **프론트엔드 코딩 컨벤션**: [노션링크](https://checkered-muscari-213.notion.site/f526ae57696c49ddbdfc67662d7971d4?pvs=4)
- **백엔드 코딩 컨벤션**: [노션링크](https://checkered-muscari-213.notion.site/da1788e44f3249799b0f5158e2a4ceb8?pvs=4)

#### **브랜치 명명 규칙**
- **브랜치 명명 규칙**: [노션링크](https://checkered-muscari-213.notion.site/780701593d864f288238478aa6395224?pvs=4)

#### **Pull Request 컨벤션**
- **Pull Request 컨벤션**: [노션링크](https://checkered-muscari-213.notion.site/PR-1dbbb6a28d2d4784964e4e855629656c?pvs=4)


### **Jira로 작업 방식**
- Epic, Story, Task 등 우선순위와 작업 단계를 명확히 구분.
- 작업 상태는 **To Do → In Progress → Done**으로 관리.
- 각 Task 완료 시, 관련 **Pull Request 링크**를 Jira에 첨부.

<br/>



## Team Members (팀원 및 팀 소개)
### 구름잉
- 애견 미용을 뜻하는 Grooming에서 영감을 받은 이름으로, 구름처럼 포근하고 믿음직한 서비스를 제공하겠다는 목표를 담음.

### 프론트엔드 팀원
|                   노이진                    |                   김찬별                   |                   심승보                    |   
|:----------------------------------------:|:---------------------------------------:|:----------------------------------------:|    
 |<img src="https://avatars.githubusercontent.com/u/52371699?v=4" alt="노이진" width="100">    |   <img src="https://avatars.githubusercontent.com/u/47071366?v=4" alt="김찬별" width="100">    |    <img src="https://avatars.githubusercontent.com/u/112371013?v=4" alt="심승보" width="100">    |   
|                 FrontEnd                 |                FrontEnd                 |                 FrontEnd                 |       
| [GitHub](https://github.com/leejin-rho) | [GitHub](https://github.com/cksquf98) | [GitHub](https://github.com/seungboshim) |    



<br/>
