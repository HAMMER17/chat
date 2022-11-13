import { ref, set } from "firebase/database";
import { dbr } from '../firebase'

export const writeUserData = async (userId, password, email, imageUrl) => {

  await set(ref(dbr, 'users/' + userId), {
    email: email,
    password: password,
    imageUrl: imageUrl
  });
}