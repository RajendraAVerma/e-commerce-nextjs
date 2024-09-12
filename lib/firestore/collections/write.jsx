import { db, storage } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const createNewCollection = async ({ data, image }) => {
  if (!image) {
    throw new Error("Image is Required");
  }
  if (!data?.title) {
    throw new Error("Name is required");
  }
  if (!data?.products || data?.products?.length === 0) {
    throw new Error("Products is required");
  }
  const newId = doc(collection(db, `ids`)).id;
  const imageRef = ref(storage, `collections/${newId}`);
  await uploadBytes(imageRef, image);
  const imageURL = await getDownloadURL(imageRef);

  await setDoc(doc(db, `collections/${newId}`), {
    ...data,
    id: newId,
    imageURL: imageURL,
    timestampCreate: Timestamp.now(),
  });
};

export const updateCollection = async ({ data, image }) => {
  if (!data?.title) {
    throw new Error("Name is required");
  }
  if (!data?.products || data?.products?.length === 0) {
    throw new Error("Products is required");
  }
  if (!data?.id) {
    throw new Error("ID is required");
  }

  const id = data?.id;

  let imageURL = data?.imageURL;

  if (image) {
    const imageRef = ref(storage, `collections/${id}`);
    await uploadBytes(imageRef, image);
    imageURL = await getDownloadURL(imageRef);
  }

  await updateDoc(doc(db, `collections/${id}`), {
    ...data,
    imageURL: imageURL,
    timestampUpdate: Timestamp.now(),
  });
};

export const deleteCollection = async ({ id }) => {
  if (!id) {
    throw new Error("ID is required");
  }
  await deleteDoc(doc(db, `collections/${id}`));
};
