const exec = require('child_process').execSync;

exec(`protoc --proto_path=. --plugin=/usr/local/bin/protoc-gen-ts --ts_out=. realtime.proto`);
