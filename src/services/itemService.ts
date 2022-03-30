import axios from 'axios';
import { loadFromStorage, saveToStorage } from './storageService'
import { Item } from '../models/item.model';


const KEY_ITEMS = 'ITEMS';
let gItems: Item[] = loadFromStorage(KEY_ITEMS) || null;



const BASE_URL = 'https://rickandmortyapi.com/api/character/?count=20'


export const loadItems = async () : Promise<Item[]> => {
    if (!gItems) {
        let res = await axios.get(`${BASE_URL}`)
        gItems = res.data.results;
        saveToStorage(KEY_ITEMS, gItems);
    }

    return gItems
}

// export const getById = (studentId: string) : Promise<t> | any => {
//     const student = gItems.find(student => student._id === studentId);
//     return Promise.resolve(student);
// }

// export const remove = () : void => {
//     gItems = gItems.filter(student => !student.isSelected)
//     if (!gItems.length) saveToStorage(KEY_ITEMS, null);
//     else saveToStorage(KEY_ITEMS, gItems);
    
// }

// export const save = (currStudent: Student) : Promise<Student> => {
//     const idx = gItems.findIndex(student => student._id === currStudent._id)
//     gItems.splice(idx, 1, currStudent);
//     saveToStorage(KEY_ITEMS, gItems);

//     return Promise.resolve(currStudent);
// }

// export const getPrevNextId = (currStudent: Student) => {

//     const currIdx = gItems.findIndex(student => student._id === currStudent._id)
//     const nextStudent = gItems[currIdx + 1] || gItems[0]
//     const prevStudent = gItems[currIdx - 1] || gItems[gItems.length - 1]

//     return Promise.resolve({
//         prevId: prevStudent._id,
//         nextId: nextStudent._id
//     })
// }

// export const getPageData = () : Promise<PageData> => {
//     gPageData = loadFromStorage(KEY_PAGE) || { chosenBtn: 0, pageIdx: 0 }
//     return Promise.resolve(gPageData)
// }

// export const setPageData = (chosenBtn:any, pageIdx:any) : void => {
//     gPageData = { chosenBtn, pageIdx };
//     saveToStorage(KEY_PAGE, gPageData)
// }



















