export async function userLogin(id, password) {
  const accounts = [
    { id: "likelion1@example.com", password: "qwerty123", name: "김멋사" },
    { id: "likelion2@example.com", password: "asdf1234", name: "멋쟁이사자" },
  ];

  const account = accounts.find((item) => item.id === id);

  if (!account) {
    return null;
  }

  if (account.password !== password) {
    return null;
  }

  return {
    email: account.id,
    name: account.name,
    access_token: "token1",
    refresh_token: "token2",
  };
}
