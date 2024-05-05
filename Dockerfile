# Sử dụng PHP làm image cơ sở
FROM php:latest

# Cài đặt các thư viện và công cụ cần thiết
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Sao chép mã nguồn của ứng dụng vào image
COPY . /var/www/html

# Đặt thư mục làm thư mục làm việc
WORKDIR /var/www/html

# Mở cổng 80
EXPOSE 80

# Chạy ứng dụng PHP
CMD ["php", "-S", "0.0.0.0:80"]
