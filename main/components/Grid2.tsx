import React from "react"
import { education } from "@/data";
import CodingAchievements from "./CodingAchievements";
import Timeline from "./Timeline";

export const Grid2 = () => {
    return (
        <section id="about">
            <CodingAchievements />
            <Timeline details={education} />
        </section>
    )
}
