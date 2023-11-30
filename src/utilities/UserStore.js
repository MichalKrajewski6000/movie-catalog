import { onValue, ref } from "firebase/database";
import { makeAutoObservable } from "mobx";
import { db } from "./Firebase";
import Cookies from "js-cookie";

class UserStore {
  currentUser = null;
  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    const cookieUid = Cookies.get("uid");

    onValue(ref(db, `/users/${cookieUid}`), (snapshot) => {
      this.currentUser = snapshot.val();
    });
  }
}

export default new UserStore();
