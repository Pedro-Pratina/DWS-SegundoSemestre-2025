import { Routes, Route } from "react-router"
import { PersonalHub } from '../pages/PersonalHub.jsx'
import { SomaInput } from "../projects/1.jsx"

export function AppRouters(){
    return(
        <Routes>
            <Route path="/" element={<PersonalHub />} />
            <Route path="/project/1" element={<SomaInput />} />
        </Routes>
    )
}