#!/bin/bash


protoc --js_out=import_style=commonjs,binary:frontend/src/   --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src/   proto/ping.proto