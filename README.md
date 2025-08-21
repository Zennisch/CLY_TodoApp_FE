# CLY TodoApp Front-end

Giao diện người dùng cho ứng dụng quản lý công việc (Todo App) được xây dựng bằng React + TypeScript + Vite.

## 🚀 Demo

- **Live Demo**: [https://cly-todo-app-fe.vercel.app/](https://cly-todo-app-fe.vercel.app/)

## ✨ Tính năng

- ✅ Thêm, sửa, xóa công việc
- ✅ Đánh dấu công việc hoàn thành
- ✅ Lọc công việc theo trạng thái
- ✅ Giao diện responsive, thân thiện với người dùng
- ✅ Tích hợp với Backend API
- ✅ Loading states và error handling

## 🛠️ Công nghệ sử dụng

- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **Vite** - Build tool và dev server
- **Axios** - HTTP client
- **CSS3** - Styling
- **ESLint** - Code linting

## 📦 Cài đặt và chạy locally

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd CLY_TodoApp_FE
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Cấu hình environment variables
Tạo file `.env` trong thư mục root và cấu hình:

```properties
VITE_BACKEND_URL=http://localhost:8000
VITE_FRONTEND_URL=http://localhost:3000
```

### Bước 4: Chạy ứng dụng
```bash
# Development mode
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

Ứng dụng sẽ chạy tại `http://localhost:5173` (Vite default port).

## 🌐 Triển khai lên Vercel

### Triển khai tự động (Recommended)

1. **Fork hoặc clone repository** về GitHub của bạn

2. **Truy cập Vercel Dashboard**
   - Đăng nhập vào [Vercel](https://vercel.com/)
   - Click "Add New" → "Project"

3. **Import Repository**
   - Chọn repository từ GitHub
   - Click "Import"

4. **Cấu hình Environment Variables**
   Trong phần "Environment Variables", thêm:
   ```
   VITE_BACKEND_URL=<your-backend-url>
   VITE_FRONTEND_URL=https://<your-vercel-app>.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Chờ quá trình build và deploy hoàn thành

### Triển khai thủ công

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🐳 Docker

### Build Docker image
```bash
docker build -t cly-todoapp-fe .
```

### Chạy container
```bash
docker run -p 3000:3000 \
  -e VITE_BACKEND_URL=http://localhost:8000 \
  cly-todoapp-fe
```

## 📝 Scripts

```bash
npm run dev          # Chạy development server
npm run build        # Build cho production
npm run preview      # Preview production build
npm run lint         # Chạy ESLint
npm run lint:fix     # Fix ESLint errors tự động
```

## 📁 Cấu trúc thư mục

```
src/
├── assets/          # Static assets (icons, images)
├── components/      # Reusable UI components
│   ├── Button.tsx
│   ├── Checkbox.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── TaskItem.tsx
│   ├── TaskList.tsx
│   └── ...
├── hooks/           # Custom React hooks
│   └── useTask.ts
├── models/          # TypeScript interfaces/types
│   └── Task.ts
├── pages/           # Page components
│   └── TodoAppPage.tsx
├── services/        # API services
│   ├── AxiosConfig.ts
│   └── TaskService.ts
├── types/           # Type definitions
│   └── environment.ts
├── App.tsx          # Main App component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🔧 Cấu hình

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | URL của Backend API | `http://localhost:8000` |
| `VITE_FRONTEND_URL` | URL của Frontend | `http://localhost:3000` |

### CORS Configuration

Đảm bảo Backend đã được cấu hình CORS để cho phép requests từ domain Frontend:

```go
// Backend CORS config
AllowOrigins: []string{
    "https://cly-todo-app-fe.vercel.app",
}
```

## 🐛 Troubleshooting

### Lỗi kết nối API
- Kiểm tra `VITE_BACKEND_URL` trong file `.env`
- Đảm bảo Backend đang chạy và accessible
- Kiểm tra CORS configuration ở Backend

### Build errors
- Xóa `node_modules` và chạy lại `npm install`
- Kiểm tra TypeScript errors: `npm run type-check`

### Deployment issues trên Vercel
- Kiểm tra environment variables đã được set đúng
- Xem build logs để identify lỗi cụ thể
- Đảm bảo `dist/` folder được generate sau build

## 📋 API Endpoints sử dụng

Frontend tích hợp với các API endpoints sau:

- `GET /api/tasks` - Lấy danh sách tasks
- `POST /api/tasks` - Tạo task mới  
- `PUT /api/tasks/:id` - Cập nhật task
- `DELETE /api/tasks/:id` - Xóa task

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Tạo Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

- **Zennisch** - [GitHub Profile](https://github.com/Zennisch)

## 🔗 Links

- **Frontend Demo**: [https://cly-todo-app-fe.vercel.app/](https://cly-todo-app-fe.vercel.app/)
- **Backend Repository**: [https://github.com/Zennisch/CLY_TodoApp_BE]
- **API Documentation**: [Link to API docs]
