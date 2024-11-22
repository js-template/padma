export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: { url: string | URL }) {
  const { searchParams } = new URL(req.url);
}
