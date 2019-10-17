# GoogleAnalyticsDashboardPrototype

This is a simple HTML prototype for the dashboard for web or mobile apps for User activity tracking for Google user with multiple themes in the same prototype. It clearly demonstrates deferred Object/Promise pattern. There is authentication meant to let user give consent for the prototype to use/monitor his personal data by Google Analytics. Being just a prototype complicated file structure is avaoided. For better responsiveness, client-side javascript is implemented. Server file for this prototype is just a backbone to support client file, rest all interactions are handled by Google server. Being a prototype, server-to-server interactions are not demonstrated.

Please note:
  "auth_uri":"https://accounts.google.com/o/oauth2/auth",
  
  "token_uri":"https://oauth2.googleapis.com/token",
  
  "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
  
  "client_secret":"******************",
  
  "redirect_uris":["http://localhost:8080/oauth2callback"],
  
  "javascript_origins":["http://localhost:8080"]
  
  
  
