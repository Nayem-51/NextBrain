import { initialItems } from '@/data/items';

// Global variable to hold state in memory
let items = [...initialItems];

export const getItems = () => items;

export const addItem = (item) => {
    items.push(item);
    return item;
};

export const getItemById = (id) => {
    return items.find(i => i.id == id);
};
