
# Bierkuh13

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Common Generation snipps

Domäne

```bash
export DOMAIN=crown-caps
ng g m modules/${DOMAIN}
ng g s modules/${DOMAIN}/api/${DOMAIN}-api
ng g class modules/${DOMAIN}/domain/${DOMAIN}
ng g interface modules/${DOMAIN}/models/${DOMAIN}-dto
ng g s modules/${DOMAIN}/infrastructure/${DOMAIN}-data
```

Domäne Feature SCAM Module 

```bash
export DOMAIN=crown-caps
export FEATURE=crown-caps-update-form
ng g m modules/${DOMAIN}/features/${FEATURE}
ng g s modules/${DOMAIN}/application/${FEATURE}-facade
ng g c modules/${DOMAIN}/features/${FEATURE} --export
```

Domänen Store Feature Module

```bash
export DOMAIN=user
export FEATURE=user-store
ng g m modules/${DOMAIN}/store/${FEATURE} -m root-store
ng g feature modules/${DOMAIN}/store/${FEATURE}/${FEATURE} -a -c -g -m modules/${DOMAIN}/store/${FEATURE} --prefix load
```

SHARED SCAM Module 

```bash
export FEATURE=upload-button
ng g m shared/${FEATURE}
ng g c shared/${FEATURE} --export
```

PAGE Module

```bash
export PAGE=admin-login
ng g m pages/${PAGE}-page --route ${PAGE} --routing -m app
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
