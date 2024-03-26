import {
  getRandomImageUrl,
  getRandomField,
  getRandomName,
  getRandomPortfolioTitle,
  getRandomLocation,
} from "./randomData.js";

const portfoliosData = { results: [] };

for (let i = 1; i <= 80; i++) {
  portfoliosData.results.push({
    id: i,
    imageUrl: getRandomImageUrl(),
    artist: getRandomName(),
    title: getRandomPortfolioTitle(),
    location: getRandomLocation(),
    field: getRandomField(),
    RegDate: "20240229",
    like: 32,
    view: 101,
    content:
      "<h1>포트폴리오페이지</h1><p>나는 바보입니다. 바보입니다.</p><h2>Additional Content</h2><p>This is more HTML content added dynamically.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
  });
}

export default portfoliosData;
