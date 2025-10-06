# ⚛️ React + TypeScript

## 💡 Lợi ích khi sử dụng TypeScript

1. 🐞 **Bắt lỗi sớm** – giúp phát hiện lỗi ngay khi code, tránh lỗi khi lên production.  
2. 🤖 **Tự động gợi ý thông minh** – IDE hiển thị autocomplete khi dùng thư viện.  
3. 🧱 **Code vững chắc hơn** – khi refactor hay thay đổi cấu trúc vẫn an toàn.

---

## 🧩 Kiểu dữ liệu (Types) trong TypeScript

### 1️⃣ Kiểu cơ bản (Primitive Types)

| Kiểu | Mô tả | Ví dụ |
|------|-------|--------|
| `string` | Chuỗi ký tự | `"Hello"` |
| `number` | Số (nguyên, thập phân, NaN) | `42`, `3.14` |
| `boolean` | Đúng / sai | `true`, `false` |
| `null` | Không có giá trị | `null` |
| `undefined` | Chưa được gán giá trị | `undefined` |
| `symbol` | Dùng làm khóa duy nhất | `Symbol("id")` |
| `bigint` | Số nguyên rất lớn | `9007199254740991n` |

---

### 2️⃣ Kiểu tùy chỉnh (Custom Types)

#### ➤ `type` – tạo alias cho kiểu

```ts
type ID = string | number;
type User = { name: string; age: number };
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: "admin";
}
type Status = "active" | "inactive" | "pending"; // Union
type Admin = User & { role: string };             // Intersection
function wrap<T>(value: T): { value: T } {
  return { value };
}

---

Bạn có thể copy đoạn trên và dán vào file `README.md` của bạn — hiển thị rất đẹp trên GitHub, VSCode, hoặc npm.  

Nếu bạn muốn mình:
- 🪄 **thêm màu / badge (ví dụ shields.io)**  
- 📘 **thêm phần “Cấu trúc thư mục React + TS”**  
- hoặc 🎨 **tạo phiên bản có theme đen (dark mode preview)**  

thì mình có thể chỉnh tiếp cho bạn — bạn muốn theo hướng nào?
