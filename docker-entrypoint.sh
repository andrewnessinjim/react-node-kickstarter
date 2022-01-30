cd /app/client 
npm install --no-audit
npm start & >&1

npm install --global gulp-cli
cd /app/server
npm install --no-audit
gulp dev