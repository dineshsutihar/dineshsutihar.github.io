"use client"

import { useEffect } from "react"

// This component does nothing just wake up the server 
export default function DataFetcher() {
    useEffect(() => {
        fetch("https://todo-fullstack-backend-ejb4.onrender.com").then(() => console.log("Todo Backend is Active"))

        fetch("clarity.dineshsutihar.me").then(() => console.log("Clarity Backend is Active"))

    }, [])
    return (
        <>
        </>
    )
}
