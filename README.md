# 🏥 Hệ Thống Quản Lý Bệnh Viện - MediCare Pro

## 📋 Mô tả dự án

MediCare Pro là một hệ thống quản lý bệnh viện toàn diện được phát triển bằng React.js, cung cấp các tính năng quản lý cho nhiều vai trò khác nhau trong bệnh viện bao gồm bác sĩ, y tá, lễ tân, dược sĩ, bệnh nhân và quản trị viên.

## 🚀 Tính năng chính

### 👥 Quản lý người dùng và phân quyền

#### 🔐 Hệ thống xác thực
- **Đăng nhập/Đăng xuất**: Hỗ trợ đa vai trò với xác thực an toàn
- **Đăng ký bệnh nhân**: Form đăng ký thông tin cá nhân chi tiết
- **Quên mật khẩu**: Chức năng khôi phục mật khẩu qua email
- **Phân quyền**: Kiểm soát truy cập dựa trên vai trò người dùng

#### 👤 Quản lý thông tin cá nhân
- **Chỉnh sửa thông tin**: Cập nhật thông tin cá nhân cho tất cả vai trò
- **Hồ sơ bác sĩ**: Quản lý thông tin chuyên môn và lịch sử công việc
- **Hồ sơ bệnh nhân**: Lưu trữ thông tin y tế và lịch sử khám bệnh

### 🏥 Dashboard cho từng vai trò

#### 👨‍⚕️ Dashboard Bác sĩ
- **Quản lý danh sách chờ khám**: Theo dõi bệnh nhân đang chờ khám
- **Quy trình khám chữa bệnh 5 bước**:
  1. Chờ khám ban đầu
  2. Đã khám - cần chỉ định dịch vụ
  3. Đang thực hiện dịch vụ
  4. Có kết quả - cần kết luận điều trị
  5. Đã hoàn thành điều trị
- **Khám bệnh**: Ghi nhận triệu chứng, chẩn đoán sơ bộ
- **Chỉ định dịch vụ**: Lựa chọn và gán các dịch vụ y tế cần thiết
- **Kết luận điều trị**: Đưa ra chẩn đoán cuối cùng và phác đồ điều trị
- **Kê đơn thuốc**: Tạo đơn thuốc với liều lượng chi tiết
- **Xuất PDF**: Tạo báo cáo khám bệnh và đơn thuốc

#### 👩‍⚕️ Dashboard Lễ tân
- **Quản lý lịch hẹn**: Tạo, chỉnh sửa, hủy lịch hẹn khám bệnh
- **Thống kê lịch hẹn**: Biểu đồ theo dõi số lượng lịch hẹn theo trạng thái
- **Danh sách bệnh nhân**: Xem thông tin bệnh nhân đã đăng ký
- **Quản lý phòng khám**: Theo dõi tình trạng các phòng khám
- **Báo cáo hàng ngày**: Thống kê số lượng bệnh nhân khám trong ngày

#### 💊 Dashboard Dược sĩ
- **Quản lý thuốc**: Thêm, sửa, xóa thông tin thuốc trong kho
- **Duyệt đơn thuốc**: Xem và xác nhận đơn thuốc từ bác sĩ
- **Quản lý kho thuốc**: Theo dõi số lượng tồn kho và hạn sử dụng
- **Thống kê thuốc**: Báo cáo thuốc bán ra và nhập vào

#### 👤 Dashboard Bệnh nhân
- **Xem lịch hẹn**: Theo dõi lịch khám bệnh cá nhân
- **Đặt lịch hẹn**: Tạo lịch hẹn mới với bác sĩ
- **Hồ sơ bệnh án**: Xem lịch sử khám bệnh và chẩn đoán
- **Xem hóa đơn**: Theo dõi chi phí khám chữa bệnh
- **Thống kê cá nhân**: Số liệu về số lần khám và tình trạng sức khỏe

#### 👨‍💼 Dashboard Quản trị viên hệ thống
- **Quản lý tài khoản**: Thêm, sửa, xóa tài khoản người dùng
- **Phân quyền**: Cấp quyền truy cập cho từng vai trò
- **Thống kê hệ thống**: Theo dõi hoạt động của toàn bộ hệ thống
- **Lịch sử hoạt động**: Ghi log tất cả thao tác trong hệ thống
- **Bảo trì hệ thống**: Quản lý phiên bản và sao lưu dữ liệu

#### 💰 Dashboard Quản lý tài chính
- **Danh sách hóa đơn**: Xem và quản lý tất cả hóa đơn
- **Thống kê doanh thu**: Báo cáo doanh thu theo thời gian
- **Phân tích tài chính**: Biểu đồ và báo cáo chi tiết
- **Quản lý chi phí**: Theo dõi chi phí vận hành bệnh viện

### 🏥 Quản lý dịch vụ y tế

#### 📋 Dịch vụ khám bệnh
- **Danh sách dịch vụ**: Quản lý các loại dịch vụ y tế
- **Thêm/sửa dịch vụ**: Cập nhật thông tin và giá dịch vụ
- **Phân loại dịch vụ**: Nhóm theo chuyên khoa và loại hình
- **Định giá**: Quản lý giá cả các dịch vụ

#### 🔬 Dịch vụ cận lâm sàng
- **Xét nghiệm**: Quản lý các loại xét nghiệm
- **Chẩn đoán hình ảnh**: X-quang, siêu âm, MRI, CT
- **Kết quả xét nghiệm**: Lưu trữ và hiển thị kết quả
- **Báo cáo kết quả**: Tạo báo cáo chi tiết cho bác sĩ

### 💊 Quản lý thuốc và đơn thuốc

#### 📦 Quản lý kho thuốc
- **Danh sách thuốc**: Thông tin chi tiết về thuốc
- **Thêm thuốc mới**: Cập nhật kho thuốc
- **Quản lý tồn kho**: Theo dõi số lượng và hạn sử dụng
- **Cảnh báo hết hàng**: Thông báo khi thuốc sắp hết

#### 📝 Đơn thuốc
- **Tạo đơn thuốc**: Bác sĩ kê đơn với liều lượng chi tiết
- **Duyệt đơn thuốc**: Dược sĩ xác nhận và chuẩn bị thuốc
- **Lịch sử đơn thuốc**: Theo dõi đơn thuốc đã kê
- **Xuất đơn thuốc**: Tạo file PDF đơn thuốc

### 📊 Báo cáo và thống kê

#### 📈 Thống kê tổng quan
- **Thống kê bệnh nhân**: Số lượng bệnh nhân theo thời gian
- **Thống kê lịch hẹn**: Tỷ lệ đặt lịch và hoàn thành
- **Thống kê doanh thu**: Báo cáo tài chính chi tiết
- **Biểu đồ trực quan**: Hiển thị dữ liệu dưới dạng biểu đồ

#### 📋 Báo cáo chi tiết
- **Báo cáo khám bệnh**: Thống kê theo bác sĩ và khoa
- **Báo cáo thuốc**: Sử dụng thuốc và chi phí
- **Báo cáo dịch vụ**: Hiệu quả các dịch vụ y tế
- **Xuất PDF**: Tạo báo cáo định dạng PDF

### 🏢 Quản lý cơ sở vật chất

#### 🏥 Phòng khám
- **Danh sách phòng**: Quản lý các phòng khám
- **Trạng thái phòng**: Theo dõi phòng đang sử dụng
- **Lịch sử sử dụng**: Ghi nhận thời gian sử dụng phòng

#### 👥 Nhân viên
- **Quản lý bác sĩ**: Thông tin chuyên môn và lịch làm việc
- **Quản lý y tá**: Phân công và theo dõi công việc
- **Quản lý lễ tân**: Thông tin liên hệ và phân ca
- **Quản lý dược sĩ**: Chuyên môn và trách nhiệm

## 🛠️ Công nghệ sử dụng

### Frontend
- **React.js 19.1.0**: Framework chính cho giao diện người dùng
- **React Router DOM 7.6.3**: Điều hướng và routing
- **Bootstrap 4.6.2**: Framework CSS cho responsive design
- **React Bootstrap 2.10.10**: Components Bootstrap cho React
- **Chart.js 4.5.0**: Thư viện tạo biểu đồ
- **React Chart.js 2 5.3.0**: Wrapper Chart.js cho React

### Backend & Database
- **JSONBin.io**: Cloud database để lưu trữ dữ liệu
- **Axios 1.10.0**: HTTP client để gọi API
- **Express 5.1.0**: Server framework (nếu cần)

### Kiến trúc dữ liệu
- **Cloud Database**: Sử dụng JSONBin.io để lưu trữ dữ liệu trên cloud
- **API Layer**: Tự xây dựng API layer với Axios để tương tác với database
- **Local Backup**: File database.json để backup dữ liệu local

### Utilities
- **React Toastify 11.0.5**: Thông báo và notifications
- **jsPDF 3.0.1**: Tạo file PDF
- **html2canvas 1.4.1**: Chụp màn hình để xuất PDF
- **Browser Image Compression 2.0.2**: Nén hình ảnh
- **Cloudinary 2.7.0**: Quản lý hình ảnh

## 📁 Cấu trúc dự án

```
Group_2_ASM_FER202/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── Dashboard_Admin.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── ReceptionistDashboard.jsx
│   │   ├── PharmacistDashboard.jsx
│   │   ├── AdminBusinessDashboard.jsx
│   │   ├── Login.jsx
│   │   ├── RegisterPatient.jsx
│   │   ├── MedicineList.jsx
│   │   ├── ServiceList.jsx
│   │   ├── PDFExport.jsx
│   │   └── ... (các components khác)
│   ├── services/
│   │   └── api.js         # API calls và database operations
│   ├── utils/
│   │   └── dataHelpers.js # Helper functions
│   ├── App.js             # Main application component
│   └── index.js           # Entry point
├── database.json          # Local JSON database (backup)
├── package.json           # Dependencies và scripts
└── README.md             # Documentation
```

## 🚀 Cách cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (version 14 trở lên)
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng
```bash
# Chạy React app
npm start
```

**Lưu ý**: Dự án sử dụng JSONBin.io làm cloud database, không cần chạy JSON Server riêng biệt.

### Build cho production
```bash
npm run build
```

## 👥 Vai trò người dùng

### 1. Bệnh nhân (Patient)
- Đăng ký tài khoản
- Đặt lịch hẹn khám bệnh
- Xem lịch sử khám bệnh
- Xem hóa đơn và thanh toán

### 2. Bác sĩ (Doctor)
- Quản lý danh sách bệnh nhân chờ khám
- Khám bệnh và ghi nhận kết quả
- Chỉ định dịch vụ y tế
- Kê đơn thuốc
- Kết luận điều trị

### 3. Lễ tân (Receptionist)
- Quản lý lịch hẹn
- Đăng ký bệnh nhân
- Hướng dẫn bệnh nhân
- Quản lý phòng khám

### 4. Dược sĩ (Pharmacist)
- Quản lý kho thuốc
- Duyệt đơn thuốc
- Chuẩn bị thuốc cho bệnh nhân
- Kiểm tra hạn sử dụng thuốc

### 5. Quản trị viên hệ thống (AdminSys)
- Quản lý tài khoản người dùng
- Phân quyền truy cập
- Theo dõi hoạt động hệ thống
- Bảo trì và sao lưu dữ liệu

### 6. Quản lý tài chính (AdminBusiness)
- Quản lý hóa đơn
- Thống kê doanh thu
- Báo cáo tài chính
- Phân tích chi phí

## 🔄 Quy trình khám chữa bệnh

### Bước 1: Đặt lịch hẹn
- Bệnh nhân đặt lịch hẹn qua hệ thống
- Lễ tân xác nhận lịch hẹn
- Bệnh nhân nhận thông báo xác nhận

### Bước 2: Khám ban đầu
- Bệnh nhân đến bệnh viện
- Lễ tân check-in và đưa vào danh sách chờ
- Bác sĩ khám và ghi nhận triệu chứng

### Bước 3: Chỉ định dịch vụ
- Bác sĩ chỉ định các dịch vụ cần thiết
- Hệ thống tạo đơn chỉ định dịch vụ
- Bệnh nhân được chuyển đến các khoa tương ứng

### Bước 4: Thực hiện dịch vụ
- Các khoa thực hiện dịch vụ được chỉ định
- Kết quả được cập nhật vào hệ thống
- Bác sĩ xem xét kết quả

### Bước 5: Kết luận và điều trị
- Bác sĩ đưa ra chẩn đoán cuối cùng
- Kê đơn thuốc nếu cần
- Tạo phác đồ điều trị
- Xuất báo cáo khám bệnh

## 📊 Tính năng báo cáo

### Báo cáo cho bác sĩ
- Số lượng bệnh nhân khám trong ngày
- Danh sách bệnh nhân đang chờ
- Thống kê dịch vụ đã chỉ định
- Báo cáo kết quả điều trị

### Báo cáo cho quản lý
- Thống kê doanh thu theo thời gian
- Hiệu quả sử dụng phòng khám
- Báo cáo sử dụng thuốc
- Phân tích chi phí vận hành

### Báo cáo cho bệnh nhân
- Lịch sử khám bệnh
- Chi tiết hóa đơn
- Thông tin đơn thuốc
- Lịch hẹn sắp tới

## 🔒 Bảo mật và quyền riêng tư

### Xác thực và phân quyền
- Đăng nhập an toàn với mật khẩu mã hóa
- Phân quyền truy cập theo vai trò
- Kiểm soát quyền truy cập dữ liệu
- Log hoạt động người dùng

### Bảo vệ dữ liệu
- Mã hóa thông tin nhạy cảm
- Sao lưu dữ liệu định kỳ
- Kiểm soát truy cập database
- Tuân thủ quy định bảo mật y tế

## 🎨 Giao diện người dùng

### Thiết kế responsive
- Tương thích với mọi thiết bị
- Giao diện thân thiện với người dùng
- Tối ưu hóa cho mobile
- Tùy chỉnh theme theo vai trò

### Trải nghiệm người dùng
- Navigation trực quan
- Loading states và feedback
- Error handling thân thiện
- Toast notifications

## 🔧 Tính năng kỹ thuật

### Performance
- Lazy loading components
- Optimized API calls với JSONBin.io
- Caching dữ liệu
- Image compression
- Cloud database để tăng tốc độ truy cập

### Scalability
- Modular architecture
- Reusable components
- Configurable settings
- Extensible API

### Maintenance
- Code documentation
- Error logging
- Performance monitoring
- Regular updates

## 📈 Roadmap phát triển

### Phiên bản hiện tại (v1.0.0)
- ✅ Hệ thống quản lý cơ bản
- ✅ Dashboard cho tất cả vai trò
- ✅ Quy trình khám chữa bệnh
- ✅ Quản lý thuốc và đơn thuốc
- ✅ Báo cáo và thống kê
- ✅ Tích hợp thanh toán online

### Phiên bản tương lai

- 🔄 Ứng dụng mobile
- 🔄 AI hỗ trợ chẩn đoán
- 🔄 Telemedicine (khám từ xa)
- 🔄 Tích hợp với hệ thống bảo hiểm
- 🔄 Quản lý vaccine và tiêm chủng
- 🔄 Hệ thống cảnh báo y tế

## 🤝 Đóng góp

Dự án này được phát triển bởi Group 2 - ASM FER202. Mọi đóng góp và đề xuất cải tiến đều được chào đón.
Team Lead : Nguyen Khac TrangTrang
Dự án này được phát triển cho mục đích học tập và nghiên cứu.

## 📞 Liên hệ

---

*Cập nhật lần cuối: Tháng 77, 20255*
