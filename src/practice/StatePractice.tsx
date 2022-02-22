import { useState } from "react";
import { User } from "./interface";

const StatePractice = () => {
    const [user, setUser] = useState<User | null>(null);

    const fetchUser = () => setUser({
        name: "HongBae",
        age: 24,
        country: "South Korea",
        address: {
            location: "ChunCheon",
            number: 88
        },
        admin: false
    })

    return (
        <>
            <button onClick={fetchUser}>Click here</button>
            {user && <p>{`Welcome ${user.name}`}</p>}
        </>
    )
}

export default StatePractice;