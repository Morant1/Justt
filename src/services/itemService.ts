import axios from 'axios';
import { loadFromStorage, saveToStorage } from './storageService'
import { Item } from '../models/item.model';

const KEY_ITEMS = 'ITEMS';
const BASE_URL = 'https://rickandmortyapi.com/api/character/';

let gItems: Item[] = loadFromStorage(KEY_ITEMS) || null;

export const loadItems = async (): Promise<Item[]> => {
    try {
        if (!gItems) {
            let res = await axios.get(`${BASE_URL}?count=20`)
            gItems = res.data.results;
            if (gItems && gItems.length) {
                gItems.forEach((curr: Item) => {
                    curr.originName = curr.origin.name;
                })
            }
            saveToStorage(KEY_ITEMS, gItems);
        }

        return gItems

    } catch (e: any) {
        console.error("error with fetching data:", e);
        return [];
    }

}

export const browseInput = async (str: string): Promise<Item[]> => {
    try {
        let result = await (await axios.get(`${BASE_URL}?name=${str}`)).data.results;
        if (result && result.length) {
            result.forEach((curr: Item) => {
                curr.originName = curr.origin.name;
            })
        }
        return result;
    } catch (e: any) {
        console.error("error with fetching data:", e);
        return [];
    }
}

export const searchCharacterInput = async (str: string): Promise<Item | null> => {
    try {
        let result = await (await axios.get(`${BASE_URL}${str}`)).data;
        result.originName = result.origin.name;
        return result;
    } catch (e: any) {
        console.error("error with fetching data:", e);
        return null;
    }

}
