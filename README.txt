ICTD Weekly Reporting System — Step 4 HTML/CSS Prototype

Files
-----
index.html
    CIO Executive Dashboard

sector-report.html
    Sector manager weekly reporting form

assets/css/styles.css
    Shared responsive styling

assets/js/common.js
    Shared definitions and helper functions

assets/js/dashboard.js
    Dashboard rendering, filtering, JSON import logic

assets/js/sector-form.js
    Sector form logic, KPI handling, local draft, JSON export

data/sample-reports.json
    Demonstration data for NOC, SOC, CCCU, AAU, and Operations

How to run
----------
Because the dashboard loads sample data using fetch(), open the folder through a local web server.

Python:
    python -m http.server 8000

Then open:
    http://localhost:8000

No backend is included in Step 4.
No data is transmitted externally.
The sector form stores draft data only in browser localStorage.

Recommended Step 5 integration:
    Google Workspace authentication
    Google Apps Script API
    Google Sheets data store
    Google Drive attachments
    Optional n8n reminders / weekly automation
