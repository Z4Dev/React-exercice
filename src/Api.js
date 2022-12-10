import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import firebaseconfig from './firebaseconfig'

const firebaseApp = firebase.initializeApp(firebaseconfig);
const db = firebaseApp.firestore()

export default {
    loginPopup: async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        let result = await firebaseApp.auth().signInWithPopup(provider)
        return result
    },
    addUser: async (u) => {
        await db.collection('users').doc(u.id).set({
            username: u.username,
            avatar: u.avatar,
            email: u.email,
            id: u.id
        }, {merge:true})
    },
    getUserByEmail: async (email) => {
        const getaccounts = await db.collection('users').get()
        let account = {}
        getaccounts.forEach(doc => {
            if(doc.data().email == email) {
                account = doc.data()
            }
        });
        return account
    },
    getUsersList: async (userId) => {
        let users = [];
        const getusers = await db.collection('users').get()
        await getusers.forEach(value => {
            if(value.data().id && value.data().id != userId) {
                users.push({
                    id: value.data().id,
                    name: value.data().username,
                    avatar: value.data().avatar
                })
            }
        })
        return users
    }
}