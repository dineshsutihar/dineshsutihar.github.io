import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const username = "dineshsutihar";

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
        repositories(first: 100, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            stargazerCount
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
