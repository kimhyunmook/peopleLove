"use client"

import Children from "../types/children"
interface Container extends Children {}

export default function Container({children}:Container) {
    return (
        <div className="container">
            {children}
        </div>
    )
}