import { db } from "./config";

const onSnapshot = (snapshot, callback) => {
  const result = snapshot.docs.map(v => ({ id: v.id, ...v.data() }));
  return callback(result);
};

export const addData = async (collection, data) => {
  // return;
  try {
    await db.collection(collection).add({
      ...data,
      registrationDate: new Date()
    });
    return { status: true };
  } catch (error) {
    return { etatus: false, error };
  }
};

export const loadScreens = callback => {
  const unsubscribe = db
    .collection("screens")
    .orderBy("id", "asc")
    .onSnapshot(snapshot => onSnapshot(snapshot, callback));
  return unsubscribe;
};

export const loadMembers = callback => {
  const unsubscribe = db
    .collection("members")
    .orderBy("first", "desc")
    .orderBy("name", "desc")
    .onSnapshot(snapshot => onSnapshot(snapshot, callback));
  return unsubscribe;
};

export const loadNews = (callback, { limit }) => {
  const unsubscribe = db
    .collection("news")
    .orderBy("date", "asc")
    .limit(limit)
    .onSnapshot(snapshot => onSnapshot(snapshot, callback));
  return unsubscribe;
};

export const loadProjects = callback => {
  const unsubscribe = db
    .collection("projects")
    .orderBy("date", "asc")
    .onSnapshot(snapshot => onSnapshot(snapshot, callback));
  return unsubscribe;
};
