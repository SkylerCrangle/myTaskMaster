import { generateId } from "../utils.js";

export default class Items {
  constructor(data) {
    this.item = data.item;
    this.id = data.id || generateId();

  }


  get WhatItemId() {
    return (this.id)
  }

}