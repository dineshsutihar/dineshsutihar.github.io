import { NextRequest, NextResponse } from "next/server";

const LEETCODE_API_URL = "https://leetcode.com/graphql";
const LEETCODE_USERNAME = "dineshsutihar";

const HEATMAP_QUERY = `
  query calendar($username: String!, $year: Int) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`;

export async function POST(req: NextRequest) {
  try {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;

    const fetchOptions = (year: number) => ({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: HEATMAP_QUERY,
        variables: { username: LEETCODE_USERNAME, year },
      }),
    });

    // Fetch calendar data for this year and last year concurrently
    const [currentYearRes, previousYearRes] = await Promise.all([
      fetch(LEETCODE_API_URL, fetchOptions(currentYear)),
      fetch(LEETCODE_API_URL, fetchOptions(previousYear)),
    ]);

    if (!currentYearRes.ok || !previousYearRes.ok) {
      throw new Error("Failed to fetch heatmap data from LeetCode API");
    }

    const currentYearData = await currentYearRes.json();
    const previousYearData = await previousYearRes.json();

    // Parse and merge the two calendar data objects
    const currentYearCalendar = JSON.parse(
      currentYearData.data.matchedUser.userCalendar.submissionCalendar || "{}"
    );
    const previousYearCalendar = JSON.parse(
      previousYearData.data.matchedUser.userCalendar.submissionCalendar || "{}"
    );

    const mergedCalendar = { ...previousYearCalendar, ...currentYearCalendar };

    return NextResponse.json({
      submissionCalendar: JSON.stringify(mergedCalendar),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An internal server error occurred" },
      { status: 500 }
    );
  }
}
