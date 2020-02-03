import { db } from "./config";

export const loadScreens = callback => {
  const unsubscribe = db
    .collection("screens")
    .orderBy("id", "asc")
    .onSnapshot(snapshot => {
      const result = snapshot.docs.map(v => ({ id: v.id, ...v.data() }));
      callback(result);
    });
  return unsubscribe;
};

export const loadMembers = callback => {
  const unsubscribe = db
    .collection("members")
    .orderBy("first", "desc")
    .orderBy("name", "desc")
    .onSnapshot(snapshot => {
      const result = snapshot.docs.map(v => ({ id: v.id, ...v.data() }));
      callback(result);
    });
  return unsubscribe;
};
