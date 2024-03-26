const getRandomImageUrl = () => {
  const url = [
    "http://localhost:3001/static/images/portfolios/01.jpg",
    "http://localhost:3001/static/images/portfolios/02.jpg",
    "http://localhost:3001/static/images/portfolios/03.jpg",
    "http://localhost:3001/static/images/portfolios/04.jpg",
    "http://localhost:3001/static/images/portfolios/05.jpg",
    "http://localhost:3001/static/images/portfolios/06.jpg",
  ];
  return url[Math.floor(Math.random() * url.length)];
};

const getRandomRecruitsTitle = () => {
  const titles = [
    "작가구함",
    "디자이너 모집",
    "개발자 채용",
    "마케팅 인턴 모집",
    "경영지원 부서 채용",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
};

const getRandomPortfolioTitle = () => {
  const titles = [
    "동시대의 역사를 발언하는 한국 현대미술",
    "LEE CHANGWOON 반복되는 편도여행을 위한 우연한 안내서",
    "반클리프 아펠: 시간, 자연, 사랑",
    "문화-기후행동 (Climate Action)",
    "작은 파티 드레스",
    "기후협력: 모두의 언어, 모두의 고민, 모두의 해결책",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
};

const getRandomName = () => {
  const names = [
    "홍길동",
    "김철수",
    "이영희",
    "박영수",
    "최지우",
    "정민수",
    "송미영",
    "강동희",
    "임성준",
    "오지훈",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomLocation = () => {
  const location = [
    { code: "I000", label: "서울" },
    { code: "B000", label: "경기" },
    { code: "K000", label: "인천" },
    { code: "G000", label: "대전" },
    { code: "1000", label: "세종" },
    { code: "O000", label: "충남" },
    { code: "P000", label: "충북" },
    { code: "E000", label: "광주" },
    { code: "L000", label: "전남" },
    { code: "M000", label: "전북" },
    { code: "F000", label: "대구" },
    { code: "D000", label: "경북" },
    { code: "H000", label: "부산" },
    { code: "J000", label: "울산" },
    { code: "C000", label: "경남" },
    { code: "A000", label: "강원" },
    { code: "N000", label: "제주" },
    { code: "Q000", label: "전국" },
  ];
  return location[Math.floor(Math.random() * location.length)];
};

const getRandomField = () => {
  const field = [
    { code: "A000", label: "미술" },
    { code: "B000", label: "공예" },
    { code: "C000", label: "디자인" },
    { code: "D000", label: "사진영상" },
    { code: "E000", label: "음악" },
    { code: "F000", label: "문학무용" },
    { code: "G000", label: "기획" },
  ];
  return field[Math.floor(Math.random() * field.length)];
};

export {
  getRandomImageUrl,
  getRandomRecruitsTitle,
  getRandomLocation,
  getRandomName,
  getRandomField,
  getRandomPortfolioTitle,
};
