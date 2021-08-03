// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'https://localhost:44351',
  auth_token_key: 'airbnb_auth_token',
  autho_token_value: localStorage.getItem('airbnb_auth_token'),
  user_data_key:"airbnb_user_data",
  user_data_value: localStorage.getItem('airbnb_user_data')

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
