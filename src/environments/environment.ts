// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // masterUrl: "https://dev.technotrant.com/"
  masterUrl: 'http://localhost:8080/',
  stripePublishableKey:
    'pk_test_51RLUm9PqCWcBWkKoFw0sR64HaSgjIri44mkyMWfjC1HBdYNvcGV4GSOlnYRmI3ZByhtTz3gORTWSmpCX0RBhSm1f00UUUP1usX',
  profileImageUrl: 'https://bounxacademystaging.blob.core.windows.net/student/',
  badgeImageUrl: 'https://bounxacademystaging.blob.core.windows.net/badges/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
