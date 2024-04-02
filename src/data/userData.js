import { getRandomBoolean, getRandomName } from "./randomData.js";

const userLikeData = { results: [] };

for (let i = 1; i <= 10; i++) {
  userLikeData.results.push({
    userId: i,
    userType: getRandomBoolean() ? "예술인" : "기획자",
    nickname: getRandomName(),
  });
}

export { userLikeData };
