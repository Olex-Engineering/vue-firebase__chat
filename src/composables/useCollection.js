import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
    const error = ref(null);

    const addDoc = async (doc) => {
        error.value = null;

        try {
            console.log('try')
            await projectFirestore.collection(collection).add(doc);
            console.log('tendry')
        } catch (err) {
            console.log(err.message);
            error.value = 'Could not send the message'
        }
    }

    return { error, addDoc }
}

export default useCollection;