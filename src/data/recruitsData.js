import {
  getRandomName,
  getRandomRecruitsTitle,
  getRandomLocation,
  getRandomField,
  getRandomBoolean
} from "./randomData.js";

const recruitsData = { results: [] };

for (let i = 1; i <= 80; i++) {
  recruitsData.results.push({
    id: i,
    name: getRandomName(),
    title: getRandomRecruitsTitle(),
    regions: getRandomLocation(),
    fields: getRandomField(),
    isScrap: getRandomBoolean(),
    view: 101,
    RegDate: "20240229",
    content:
      "<h1>공고페이지</h1><p>나는 바보입니다. 바보입니다.</p><h2>Additional Content</h2><p>This is more HTML content added dynamically.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
  });
}

export default recruitsData;
