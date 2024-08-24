import { use, useMemo } from "react";
import { Person } from "./Person";

export function People({ endpoint }) {
    const BACK_END_URL = "http://localhost:3000";
    const getPeople = useMemo(
        () => fetch(`${BACK_END_URL}/${endpoint}`).then((res) => res.json()),
        [endpoint]
    );

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
