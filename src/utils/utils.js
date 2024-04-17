export const maskLoginId = (loginId) => {
  if (typeof loginId !== "string" || loginId.length === 0) {
    return "";
  }

  // 맨 앞 2자리만 노출시키고 나머지를 마스킹 처리
  const visibleChars = loginId.slice(0, 2);
  const maskedPart = "*".repeat(loginId.length - 2);

  return visibleChars + maskedPart;
};

export const maskEmail = (email) => {
  if (typeof email !== "string" || email.length === 0) {
    return "";
  }

  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  // 맨 앞글자만 노출시키고 나머지를 마스킹 처리
  const maskedUsername = username.charAt(0) + "*".repeat(username.length - 1);

  return maskedUsername + "@" + domain;
};

export const getUserToken = (authorization) => {
  if (!authorization) return;

  return authorization.replace(/Bearer /g, "");
};
