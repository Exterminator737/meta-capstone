import React, { useEffect, useReducer}  from "react";
import Header from "./Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";


export default function Main() {

    function seedRandom(seed) {
        var m = 2**35 - 31
        var a = 185852
        var s = seed % m
        return function() {
            return (s=s*a%m) /m
        }
    }

    function fetchAPI(date) {
        let result = []
        let random = seedRandom(date.getDate())

        for (let i=17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i+ ':00')
            }
            if(random() < 0.5) {
                result.push(i+ ':30')
            }
        }
        return result
    }

    function submitAPI(FormData) {
        return true
    }

    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState)

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const navigate = useNavigate()

    function submitForm (FormData) {
        if (submitAPI(FormData)) 
            navigate("/confirmed")
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Header/>}/>
                <Route path="/booking" element={<Booking availableTimes = {state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path="/confirmed" element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    )}