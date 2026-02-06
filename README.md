# Paw Bondhu

Frontend-first social database app for:
- Lost and found pet coordination
- Reunited case tracking
- Pet-related donation campaigns
- Comment threads on cases and donations
- Nearby pet clinic utility (lightweight)
- Mandatory photo support for every alert/campaign post
- Lightweight image hosting integration (Cloudinary or Imgur)

## Key product behavior

- Home UX is action-first: `Report Lost Pet` and `I Found a Pet`.
- Donations require a valid `facebook.com` post URL before a campaign can be published.
- Every pet alert and donation campaign requires a valid image URL.
- UI supports bilingual switching: English and Bangla.
- Data model is pagination-friendly and scalable (`petCases`, `donations`, per-entity `comments`).

## Image Upload Provider Setup (required for one-click file uploads)

File: `image-upload-config.js`

Supported providers:
- `cloudinary` (recommended): unsigned upload preset
- `imgur`: Client-ID

You can still paste direct image URLs manually if uploader keys are not configured, but image URL is always mandatory on submit.

### Cloudinary example
```js
window.PAW_BONDHU_IMAGE_UPLOAD = {
  provider: "cloudinary",
  cloudName: "your-cloud-name",
  uploadPreset: "your-unsigned-preset",
  uploadFolder: "paw-bondhu",
  maxFileSizeMb: 8,
};
```

### Imgur example
```js
window.PAW_BONDHU_IMAGE_UPLOAD = {
  provider: "imgur",
  imgurClientId: "your-client-id",
  maxFileSizeMb: 8,
};
```

## Run (Local DB testing)

The default mode is `Local DB (Testing)` using browser `localStorage`.

1. Start a static server from this folder:
```bash
python3 -m http.server 5173
```
2. Open:
`http://localhost:5173`

## Enable Firebase + Firestore Emulator (optional)

1. Create a Firebase project and Firestore database.
2. Put your web config in `firebase-config.js`:
- `projectId` must be set.
3. Install Firebase CLI (if missing):
```bash
npm install -g firebase-tools
```
4. Login and link project:
```bash
firebase login
firebase use --add
```
5. Start Firestore emulator:
```bash
firebase emulators:start --only firestore
```
6. In the app, click `Switch to Firebase`.

When running on `localhost`, the app automatically uses:
- Host: `127.0.0.1`
- Port: `8080`

You can change these in `firebase-config.js`.
