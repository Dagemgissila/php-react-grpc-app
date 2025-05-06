<?php

namespace App\Service;

use App\PingRequest;
use App\PingResponse;
use Spiral\GRPC;

class PingService implements \App\PingServiceInterface
{
    public function Ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse
    {
        $response = new PingResponse();
        $response->setMessage($in->getMessage());
        return $response;
    }
}