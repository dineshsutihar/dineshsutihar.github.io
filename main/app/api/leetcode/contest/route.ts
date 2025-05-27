import { NextRequest, NextResponse } from "next/server";

const LEETCODE_API_URL = "https://leetcode.com/graphql";
const LEETCODE_USERNAME = "dineshsutihar";

const CONTEST_QUERY = `
  query userContestRankingInfo($username: String!) {
    userContestRanking(username: $username) {
      attendedContestsCount
      rating
      globalRanking
      topPercentage
    }
  }
`;

const CONTEST_HISTORY_QUERY = `
  query userContestRankingHistory($username: String!) {
    userContestRankingHistory(username: $username) {
      attended
      rating
      contest {
        startTime
      }
    }
  }
`;

export async function POST(req: NextRequest) {
  try {
    const fetchOptions = (query: string) => ({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { username: LEETCODE_USERNAME },
      }),
    });

    const [contestRes, historyRes] = await Promise.all([
      fetch(LEETCODE_API_URL, fetchOptions(CONTEST_QUERY)),
      fetch(LEETCODE_API_URL, fetchOptions(CONTEST_HISTORY_QUERY)),
    ]);

    if (!contestRes.ok || !historyRes.ok) {
      throw new Error("Failed to fetch contest data from LeetCode API");
    }

    const contestData = await contestRes.json();
    const historyData = await historyRes.json();

    const responseData = {
      contest: contestData.data.userContestRanking,
      history:
        historyData.data.userContestRankingHistory?.filter(
          (item: any) => item.attended
        ) || [],
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An internal server error occurred" },
      { status: 500 }
    );
  }
}
