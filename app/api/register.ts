// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: any, res: any) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    const response = await fetch(
      `http:localhost:1337/api/auth/local/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      res.status(200).json({ message: "User registration successfully" });
    } else {
      res
        .status(data.statusCode)
        .json({ error: data.message[0].messages[0].messages });
    }
  } else {
    res.status(405).json({ error: "METHOD NOT ALLOWED" });
  }
};
