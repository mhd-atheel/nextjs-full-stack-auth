"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Profile() {
    const [data, setData] = useState({
        _id: "",
        email: "",
        username: "",
    });
    const fetchUser = async () => {
        try {
            const response = await axios.get("/api/users/me");
            setData({
                ...data,
                email: response.data.user.email,
                _id: response.data.user._id,
                username: response.data.user.username,
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    const router = useRouter();
    return (
        <div className="mx-auto h-screen justify-center items-center flex flex-col">
            <h1 className="font-bold text-3xl">Hello {data.username}</h1> <br />
            <h4 className="text-center text-white font-bold text-lg ">{data.email}</h4>
            <button
                className="bg-orange-500 p-5 rounded-lg"
                onClick={() => router.push(`/profile/${data._id}`)}
            >
                <h1 className="text-center text-white font-bold text-4xl ">Go View</h1>
            </button>
        </div>
    );
}
