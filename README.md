# 두리묭실(Doori-Salon)

<br/>

<img height="150" alt="logo2" src="https://github.com/user-attachments/assets/dc02fab4-f23e-46b7-93c4-fe471f4aba60" />
<img height="150" alt="logo1" style="margin-right: 20px;" src="https://github.com/user-attachments/assets/f470c3c6-84bc-41cd-80a8-02b8da60cb30" />

### 반려견 케어와 미용사의 가치를 함께 완성하는 새로운 반려견 미용 중계 서비스, 두리묭실
</div>
<br/>

(현재는 서버 중지했습니다.)
| Service           | URL                           |
| -------------- | ----------------------------- |
| 고객 서비스 | https://www.duri-salon.store, https://duri-saloncom.vercel.app |
| 미용사 서비스  | https://salon-duri-salon.vercel.app   |
| 관리자 서비스    | https://adminduri-saloncom.vercel.app   |


#### Demo Video
<div>
<a href="https://www.youtube.com/watch?v=75HMZXuKFms"><img src="https://img.shields.io/badge/YOUTUBE-FF0000?style=for-the-badge&logo=YouTube&logoColor=white&link=https://www.youtube.com/watch?v=oD8ShZGQrqo"/></a>
</div>
</br></br>

## 두리묭실 기능 및 UI

### Design System
[두리묭실 Storybook 링크](https://storybook-durisalon.vercel.app/?path=/docs)
<br/>

<img width="648" alt="storybook screenshot" src="https://github.com/user-attachments/assets/45f3eaee-36a2-4eff-a6dd-c8813da81322" />

### Service UI
<img width="448" src="https://github.com/user-attachments/assets/2721ba03-1cb3-4ce6-a99a-ebe993f07356" />

<br/>
<br/>

**미용 예약 스케줄 관리**

<img alt="미용 예약 스케줄 관리" src="https://github.com/user-attachments/assets/15fef83a-1288-4a6f-9c8e-fe4e1511f473" />

<br/>
<br/>

**고객 미용일기, 미용사 포트폴리오 서비스**
<br/>

<img height="280" alt="고객 미용일기, 미용사 포트폴리오 서비스" src="https://github.com/user-attachments/assets/f7897239-d840-4d56-8746-955b7f132438" />

<br/>
<br/>

**견적서 요청, 견적서 전송 서비스**
<br/>

- 고객
  
<img alt="견적서 요청, 견적서 전송 서비스1" src="https://github.com/user-attachments/assets/8e777ee6-750b-4b21-9780-8d33518373f1" />

<br/>

- 미용사

<img alt="견적서 요청, 견적서 전송 서비스2" src="https://github.com/user-attachments/assets/db759de4-a0fd-4b30-b2bd-2fb93614c117" />

<br/>
<br/>

**AI 미용 서비스**

<br/>

<img alt="AI 미용 서비스" src="https://github.com/user-attachments/assets/d80e1109-46ed-4750-9b6e-f017c04d3dc5" />

<br/>
<br/>

**미용사 월 매출 통계 서비스**
<br/>

<img alt="미용사 월 매출 통계 서비스" src="https://github.com/user-attachments/assets/e2bafcc2-2f1d-45ba-954c-e7fe38cf3bcd" />

<br/>
<br/>

**맞는 가게 추천을 위한 상세한 온보딩**
<br/>

- 고객
<img alt="상세한 온보딩1" src="https://github.com/user-attachments/assets/57aef78c-ea56-42d5-812e-0714d549f9a7" />

<br/>

- 미용사
<img height="320" alt="상세한 온보딩2" src="https://github.com/user-attachments/assets/342ed345-cc68-4041-9b23-dc7fb81c64d4" />

<br/>
<br/>

**입점 요청, 수락**
<br/>

<img height="280" alt="입점 요청, 수락" src="https://github.com/user-attachments/assets/350ee85c-44bf-4e23-86a3-a7d10402cb96" />


<br/>
<br/>


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
