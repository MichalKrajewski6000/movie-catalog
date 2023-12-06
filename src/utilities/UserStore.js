import { onValue, ref } from "firebase/database";
import { makeAutoObservable } from "mobx";
import { db, firestore } from "./Firebase";
import Cookies from "js-cookie";
import { doc, getDoc, setDoc } from "firebase/firestore";

class UserStore {
  currentUser = null;
  currentFirestoreObj = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    const uid = Cookies.get("uid");

    onValue(ref(db, `/users/${uid}`), async (snapshot) => {
      this.currentUser = snapshot.val();

      if (this.currentUser) {
        const userMovies = await getDoc(doc(firestore, "movie-catalog", uid));

        if (!userMovies.exists()) {
          setDoc(doc(firestore, "movie-catalog", uid), {
            UID: uid,
            toWatch: [],
            alreadySeen: [],
          });

          this.currentFirestoreObj = {
            UID: uid,
            toWatch: [],
            alreadySeen: [],
          };
        } else {
          this.currentFirestoreObj = userMovies.data();
        }
      }
    });
  }
}

export default new UserStore();
