// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: 'http://ab083b225d81146a195b9777b7ac3774-1012515056.us-east-2.elb.amazonaws.com:8080/api/v0'
  // apiHost: 'http://localhost:8080/api/v0'
  // apiHost: 'http://a353a377d09bc40d881322b96cc65cbe-661826439.us-east-2.elb.amazonaws.com/api/v0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
