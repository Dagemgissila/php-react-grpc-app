<?php

require __DIR__ . '/vendor/autoload.php';

use App\Service\PingService;
use Spiral\GRPC\Server;
use Spiral\RoadRunner\Worker;

$server = new Server();
$server->registerService(\App\PingServiceInterface::class, new PingService());

$worker = new Worker();
$server->serve($worker);