import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./firebase";
import Dot from "./dot";
import {
  handleNew,
  handleEdit,
  handleDelete,
  handleQueryDelete,
} from "./utils";




export default function App() {
  const [events, setEvents] = useState([{ name: "Loading...", id: "initial" }]);

  useEffect(() => {
    const collectionRef = collection(db, "events");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setEvents(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>
        New
      </button>
      <button className="button" onClick={handleQueryDelete}>
        Query Delete
      </button>

      <ul>
        {events.map((event) => (
          <li key={event.title}>
            <button className="button2" onClick={() => handleEdit(event.title)}>
              edit
            </button>
            <button className="button2" onClick={() => handleDelete(event.title)}>
              delete
            </button>
            <Dot color="white" /> {event.title} { Date(event.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
