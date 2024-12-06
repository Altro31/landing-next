"use server"

import { RegisterSchemaType } from "@/sections/register/form/register-schema";

export default function request(data: RegisterSchemaType) {
    const url = `${process.env.VITE_REACT_APP_API_URL}/demo/request`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}