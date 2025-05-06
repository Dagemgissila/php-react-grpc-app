FROM php:7.3-cli

# Install system dependencies and build tools
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    autoconf \
    build-essential \
    zlib1g-dev \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Install protobuf compiler
RUN apt-get update && apt-get install -y protobuf-compiler

# Install PHP extensions with specific versions compatible with PHP 7.3
RUN pecl install grpc-1.41.0 \
    && pecl install protobuf-3.19.4 \
    && docker-php-ext-enable grpc protobuf

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app
COPY . .





# Get RoadRunner binary

CMD [ "php", "./rr-worker.php" ]