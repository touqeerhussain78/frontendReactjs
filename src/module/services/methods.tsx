import { Delete, Get, Patch, Post, Put } from "../../common/axios/requests";
import { endpoints } from "./endpoints";

function getRecipients() {
  return Get(`${endpoints.recipients()}`);
}

function getRecipient(id) {
  return Get(`${endpoints.getRecipient(id)}`);
}

function createRecipients(params) {
  return Post(`${endpoints.recipients()}`, params);
}

function updateRecipients(id, params) {
   return Put(`${endpoints.updateRecipient(id)}`, params);
}

function deleteRecipients(id) {
   return Delete(`${endpoints.deleteRecipients(id)}`);
}

export const adminServices = {
    getRecipients,
    getRecipient,
    createRecipients,
    updateRecipients,
    deleteRecipients,
}