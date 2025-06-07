"use client";
import { education } from "@/data";
import Timeline from "./Timeline";
import GitHubContributions from "./GitHubContributions";
import RecentCommits from "./RecentCommits";

import { LeetCodeContest } from "./LeetCodeContest";
import { LeetCodeHeatmap } from "./LeetCodeHeatmap";
import LeetCodeStats from "./LeetCodeStats";
import { CTAButton } from "./CTAButton";
import { BlogList } from "./BlogList";
import SkillsSection from "./SkillsSection";
import Achievements from "./Achievements";

export const Grid2 = () => {
    return (
        <section id="about" className="grid grid-cols-1 md:grid-cols-5 gap-6">

            <div className="col-span-1 md:col-span-2">
                <SkillsSection />
            </div>

            <div className="col-span-1 md:col-span-3">
                <Achievements />
            </div>

            <div className="col-span-1 md:col-span-3">
                <Timeline details={education} />
            </div>
            <div className="col-span-1 md:col-span-2">
                <RecentCommits />
            </div>
            <div className="col-span-1 md:col-span-2 flex items-center justify-center">
                <CTAButton />
            </div>

            <div className="col-span-1 md:col-span-3">
                <GitHubContributions />
            </div>
            <div className="col-span-1 md:col-span-3">
                <LeetCodeContest />
            </div>
            <div className="col-span-1 md:col-span-2">
                <LeetCodeStats />
            </div>
            <div className="col-span-1 md:col-span-3">
                <LeetCodeHeatmap />
            </div>
            <div className="col-span-1 md:col-span-2">
                <BlogList />
            </div>
        </section>
    );
};