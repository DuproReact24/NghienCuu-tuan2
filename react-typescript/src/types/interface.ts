// interface
export interface Person {
  name: string;
  age: number;
}

// Có thể khai báo trùng tên interface

interface User {
  name: string;
}

interface User {
  age: number;
}

export const u: User = { name: "Dư", age: 22 }; // OK
// ➡️ User bây giờ gồm cả name và age.
// Đây là đặc tính “declaration merging” — chỉ interface mới có.
// Lưu ý interface không dùng cho union vs tuple được 



// export ở đây để tool k báo lỗi chưa sử dụng biến


