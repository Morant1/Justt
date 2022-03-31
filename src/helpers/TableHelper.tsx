import {Item} from '../models/item.model'
    
export const headCells : {
    id: keyof Item;
    disablePadding:boolean;
    label:string;
}[] = [
  {
    id: "id",
    disablePadding: false,
    label: "I.d"
  },
  {
    id: "name",
    disablePadding: false,
    label: "Name"
  },
  {
    id: "species",
    disablePadding: false,
    label: "Species"
  },
  {
    id: "status",
    disablePadding: false,
    label: "Status"
  },
  {
    id: "originName",
    disablePadding: false,
    label: "Origin"
  },
  {
    id: "gender",
    disablePadding: false,
    label: "Gender"
  },
  {
    id: "more",
    disablePadding: false,
    label: "More"
  }
];