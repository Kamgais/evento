import { User } from "@/utils/types/user";

export const signUp = async (user: User) => {
    try {
        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               username: user.username,
                password: user.password
            })
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}