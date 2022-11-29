import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

export const getUsers = () => getDocs(collection(db, 'users'));
