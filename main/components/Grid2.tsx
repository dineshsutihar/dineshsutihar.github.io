import React from "react"
import { education } from "@/data";
// import CodingAchievements from "./CodingAchievements";
import Timeline from "./Timeline";
import GitHubContributions from "./GitHubContributions";
import RecentCommits from "./RecentCommits";
import LeetCodeStats from "./LeetCodeStats";

export const Grid2 = () => {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-5 gap-6"> {/* Later grid row should be added and grid2 name should be changed*/}
            <Timeline details={education} />
            <RecentCommits />
            <LeetCodeStats />
            <GitHubContributions />
            {/* <CodingAchievements /> */}
        </section>
    )
}
