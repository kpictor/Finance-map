#!/bin/bash
# Finance-map VPS 初始化脚本
# 使用方法: curl -fsSL https://raw.githubusercontent.com/kpictor/Finance-map/main/setup-vps.sh | bash

set -e

echo "🚀 开始配置 Finance-map 服务器..."

# 更新系统
echo "📦 更新系统..."
sudo apt update && sudo apt upgrade -y

# 安装必要软件
echo "📦 安装 Nginx 和 Git..."
sudo apt install nginx git -y

# 安装 Node.js 20
echo "📦 安装 Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

# 克隆项目
echo "📥 克隆项目..."
sudo mkdir -p /var/www
cd /var/www
if [ -d "Finance-map" ]; then
    echo "项目已存在，更新中..."
    cd Finance-map
    sudo git pull
else
    sudo git clone https://github.com/kpictor/Finance-map.git
    cd Finance-map
fi

# 设置权限
sudo chown -R $USER:$USER /var/www/Finance-map

# 安装依赖并构建
echo "🔨 安装依赖并构建..."
npm install
npm run build

# 获取服务器 IP
SERVER_IP=$(curl -s ifconfig.me)

# 配置 Nginx
echo "⚙️ 配置 Nginx..."
sudo tee /etc/nginx/sites-available/finance-map > /dev/null <<EOF
server {
    listen 80;
    server_name $SERVER_IP;

    root /var/www/Finance-map/dist;
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF

# 启用站点
sudo ln -sf /etc/nginx/sites-available/finance-map /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# 测试并重启 Nginx
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# 配置防火墙
echo "🔥 配置防火墙..."
sudo apt install iptables-persistent -y || true
sudo iptables -I INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save || true

# 创建更新脚本
echo "📝 创建更新脚本..."
sudo tee /usr/local/bin/update-finance-map > /dev/null <<'EOF'
#!/bin/bash
cd /var/www/Finance-map
git pull origin main
npm install
npm run build
echo "✅ 更新完成！"
EOF
sudo chmod +x /usr/local/bin/update-finance-map

echo ""
echo "=============================================="
echo "✅ 部署完成！"
echo "🌐 访问地址: http://$SERVER_IP"
echo ""
echo "📌 以后更新运行: update-finance-map"
echo "=============================================="
