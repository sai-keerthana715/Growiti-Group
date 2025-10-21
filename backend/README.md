Local development and deployment notes

This backend is a minimal Node/Express app used only to accept contact form submissions and optionally send an email notification.

Quick start (local):

1. Copy `.env.example` to `.env` and fill values. For email use a Gmail account with an App Password if using Gmail.

2. Install dependencies:
   npm install

3. Run the server:
   npm start

Notes about hosting:
- HostGator shared hosting usually does not support long-running Node processes or MongoDB directly. If your DevOps team deployed the project to a traditional shared host, the backend may not be running at all. Consider using a PaaS (Heroku, Railway, Render) or a VPS that supports Node and a MongoDB instance.
- Do NOT commit `.env` or credentials. Use environment variables on the host.
- If you only need static site hosting, HostGator can serve the front-end HTML/CSS/JS. The contact form will need a reachable backend URL (update the form action).