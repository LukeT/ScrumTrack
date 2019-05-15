#!/usr/local/bin/node
const fs = require('fs');
const exec = require('child_process').execSync;

try {
	exec('rm -r .out');
} catch(e) {
}

fs.mkdirSync('.out');

const services = [
	"router",
	"common",

	"services/user",
	"services/mail",
	"services/auth",
	"services/history",
	"services/project",
	"services/ticket",
	"services/sprint",
	"services/workflow",
];

for (const svc of services) {
	// Generate golang
	exec(`protoc --proto_path=. -Isrc/app/common/proto --go_out=plugins=grpc:. --plugin=build/protoc/plugin/bin/protoc-gen-track --track_out=.  src/app/${svc}/proto/*.proto`);
	exec(`ls src/app/${svc}/proto/*.pb.go | xargs -n1 -IX bash -c "sed -e 's/,omitempty//' X > X.tmp && mv X{.tmp,}"`);

	// Generate Javascript
	exec(`grpc_tools_node_protoc --proto_path=. -Isrc/app/common/proto --js_out=import_style=commonjs,binary:.out --grpc_out=.out --plugin=protoc-gen-grpc=\`which grpc_tools_node_protoc_plugin\` src/app/${svc}/proto/*.proto`)
	exec(`protoc --proto_path=. -Isrc/app/common/proto --plugin=/usr/local/bin/protoc-gen-ts --ts_out=.out  src/app/${svc}/proto/*.proto`);

	let serviceName = svc.split('/');
	serviceName = serviceName[serviceName.length - 1];

	if (svc === 'common') {
		continue;
	}

	// Remap files to new location
	for (const file of [`${serviceName}_grpc_pb.d.ts`, `${serviceName}_grpc_pb.js`, `${serviceName}_pb.d.ts`, `${serviceName}_pb.js`]) {
		let f = fs.readFileSync(`.out/src/app/${svc}/proto/${file}`, 'utf8');
		f = f.replace(`../../../../../src/app/${svc}/proto/`, './');
		f = f.replace(`../../../../../common_pb`, '../../../common/proto/common_pb');
		fs.writeFileSync(`.out/src/app/${svc}/proto/${file}`, f, 'utf8')
	}
}

fs.unlinkSync('src/app/common/proto/common.track.go');
fs.renameSync('app/common/proto/common.pb.go', 'src/app/common/proto/common.pb.go');
exec('rm -r src/realtime/services');
exec('mv .out/src/app src/realtime/services');
exec('rm -r .out');
exec('rm -r app/');
exec('perl -pi -e "s/package proto/package ticket_common/" src/app/common/proto/common.pb.go');
