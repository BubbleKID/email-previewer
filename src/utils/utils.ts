export const getClients = (clientsData: any): any => {
  return Object.keys(clientsData);
} 

export const getClientNicename = (client: string, clientsData: any): any => {
  return clientsData[client].nicename;
}

export const getPlatformsByClient = (client: string, clientsData: any): any => {
  return clientsData[client].platforms;
}

export const getPlatformNicename = (platform: string, platformsData: any): any => {
  return platformsData[platform];
}