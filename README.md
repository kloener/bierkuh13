
# Bierkuh13

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Common Generation snipps

Domäne

```bash
export DOMAIN=beer-brands
ng g m modules/${DOMAIN}
ng g s modules/${DOMAIN}/api/${DOMAIN}-api
ng g s modules/${DOMAIN}/application/${DOMAIN}-facade
ng g class modules/${DOMAIN}/domain/${DOMAIN}
ng g interface modules/${DOMAIN}/models/${DOMAIN}-dto
ng g s modules/${DOMAIN}/infrastructure/${DOMAIN}-data
```

Domäne Feature SCAM Module

```bash
export DOMAIN=beer-brands
export FEATURE=beer-brands-manage
ng g m modules/${DOMAIN}/features/${FEATURE}
ng g c modules/${DOMAIN}/features/${FEATURE} --export
ng g s modules/${DOMAIN}/features/${FEATURE}/${FEATURE}-facade
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
export PAGE=admin-beer-brands
ng g m pages/${PAGE}-page --route ${PAGE} --routing -m app
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Firebase Deployment

### Manual Deployment

To deploy to Firebase Hosting manually:

1. Build the project: `npm run build`
2. Deploy: `firebase deploy`

Project will be available at: <https://bierkuh-ef2d6.web.app/>

### Automated Deployment (GitHub Actions)

The project automatically deploys to Firebase when changes are merged to the `main` branch via GitHub Actions.

#### Required GitHub Secrets

To enable automated deployment, configure these secrets in your GitHub repository:

**1. GITHUB_TOKEN**
- **What it is:** Automatically provided by GitHub for all repositories
- **Purpose:** Allows the action to access repository information and create deployment comments
- **Setup:** No setup required - GitHub provides this automatically

**2. FIREBASE_SERVICE_ACCOUNT_BIERKUH_EF2D6**
- **What it is:** A Firebase service account key for authentication
- **Purpose:** Allows GitHub Actions to deploy to your Firebase project
- **Setup:**
  1. Go to [Firebase Console](https://console.firebase.google.com/)
  2. Select your project (`bierkuh-ef2d6`)
  3. Go to Project Settings → Service Accounts
  4. Click "Generate new private key"
  5. Download the JSON file
  6. In GitHub: Go to Settings → Secrets and variables → Actions
  7. Click "New repository secret"
  8. Name: `FIREBASE_SERVICE_ACCOUNT_BIERKUH_EF2D6`
  9. Value: Paste the entire JSON content from the downloaded file

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
