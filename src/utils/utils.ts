import clientsData from '../data/clients.json';

export const getClients = (clientsData: any): any => {
  return Object.keys(clientsData);
} 


export const getPlatformsByClient = (client: string, clientsData: any): any => {
  return clientsData[client].platforms;
} 