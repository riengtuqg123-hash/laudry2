# Giặt Là online — Render

Bản độc lập: React/Vite, Node/Express và PostgreSQL. Không dùng đăng nhập ChatGPT.

## Triển khai
1. Đưa thư mục này lên kho GitHub riêng.
2. Kết nối kho với Render rồi triển khai render.yaml.
3. Lấy BOOTSTRAP_TOKEN trong Environment của dịch vụ; dùng mã một lần để tạo tài khoản chủ trên trang đầu.
4. Tạo tài khoản nhân viên trong mục Nhân viên, cung cấp mật khẩu tạm riêng.

## Phạm vi
- Đơn và ảnh nằm trong PostgreSQL, không lưu ảnh trên ổ tạm Render.
- Phân quyền số liệu phía máy chủ, khóa thống kê bằng mật khẩu riêng.
- Ảnh chưa tự xóa; chưa nhập dữ liệu bản ZIP cũ.
- Gói thử PostgreSQL miễn phí Render 1 GB và hết hạn sau 30 ngày. Không dùng cho vận hành lâu dài.
- Đã kiểm tra TypeScript và build; chưa kiểm tra tích hợp với cơ sở dữ liệu Render.

## Chạy local
Cài Node 22+, npm ci, cấu hình DATABASE_URL và BOOTSTRAP_TOKEN; npm run build rồi npm start. Chỉ khi thử local đặt COOKIE_SECURE=false. Không commit mật khẩu hoặc .env.
