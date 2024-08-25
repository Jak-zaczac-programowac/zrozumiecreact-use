import { use } from "react";
import { Person } from "./Person";

const BACK_END_URL = "http://localhost:3000";
const getPeople = fetch(`${BACK_END_URL}/people`).then((res) => res.json());

export function People() {
    const people = use(getPeople);

    return (
        <>
            <h2>Lista pracowników:</h2>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        <Person data={person} />
                    </li>
                ))}
            </ul>
        </>
    );
}
