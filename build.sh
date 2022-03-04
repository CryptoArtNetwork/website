#!/bin/sh

docker build -t official-website .
docker tag official-website registry.cn-hongkong.aliyuncs.com/tatmas/official-website
docker login --username=lixiumiao@1837074167842277 registry.cn-hongkong.aliyuncs.com
docker push registry.cn-hongkong.aliyuncs.com/tatmas/official-website

