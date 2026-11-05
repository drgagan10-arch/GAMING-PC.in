# GAMING PC website (Amritsar)

Multi-page static site (HTML, one `style.css`, one `main.js`, one `firebase.js`) using Firebase Auth, Firestore, Storage and Analytics (project `ai-tool-m`).

## Run locally
Open the folder in VS Code and use the Live Server extension (ES modules need http://, not file://).

## Firebase setup (required before the admin page or saving works)
1. Console > Authentication > enable Email/Password, add your admin user, copy its UID.
2. Put that UID in `firestore.rules` and `storage.rules` (replace `kcYrl8PNXydzKOcxOlqrvPg7yRf2`).
3. Create Firestore, paste `firestore.rules`, publish. Set up Storage (may need the Blaze plan), paste `storage.rules`, publish.
4. Authentication > Settings > Authorized domains: add your GitHub Pages domain.
5. Recommended: enable App Check and restrict the API key to your domain.
Or with the Firebase CLI: `firebase deploy --only firestore:rules,storage`.

## Firestore collections
- `products`: name, brand, category, description, specs, price (optional), stock, imageUrl, createdAt
- `games`: document id = slug of the title (e.g. `grand-theft-auto-v`); title, genre, platform, status, imageUrl. Overrides or extends the built-in library in `main.js`.
- `gallery`: category, alt, imageUrl, createdAt
- `reviews`: name, rating, text, status (pending/approved/rejected), createdAt
- `enquiries`, `quotations`, `bookings`: type, fields, status, createdAt (public create only; admin read)

## Adding content
Sign in at `admin.html`. Add products with your own photos, set game artwork and status, add gallery photos, approve reviews. Public pages update live (Firestore listeners).

## Publish on GitHub Pages
Upload the folder contents to a repository root, Settings > Pages > branch `main` / root. Then replace `https://YOUR-GITHUB-USERNAME.github.io/GAMING-PC` in all files with your real address (VS Code: Ctrl+Shift+H).
