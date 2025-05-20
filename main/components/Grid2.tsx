import React from "react"
import { education } from "@/data";
import CodingAchievements from "./CodingAchievements";
import Timeline from "./Timeline";
import GitHubContributions from "./GitHubContributions";
import RecentCommits from "./RecentCommits";

export const Grid2 = () => {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Timeline details={education} />
            <RecentCommits />
            {/* <GitHubContributions /> */}
            {/* <CodingAchievements /> */}
        </section>
    )
}
