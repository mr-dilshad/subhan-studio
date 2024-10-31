export const environment = {
  production: true,
  apiUrl: process.env['API_URL'] || '', // Defaults to empty string if not set
  azureFunctionKey: process.env['AZURE_FUNCTION_KEY'] || '' // Defaults to empty string if not set
};
