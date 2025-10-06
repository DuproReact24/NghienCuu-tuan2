

React typescript 

Lợi ích khi sử dụng typescript 👍
1.Bắt lỗi khi lên production 
2.Tự động gợi ý khi dùng thư viện 
3.Làm cho code vững chắc hơn khi có thay đổi
__________________________________________________________________________________________________________________
Kiểu dữ liệu gốc do người định nghĩa 
=> 

🧩 Kiểu dữ liệu (Types) trong TypeScript
1. Kiểu cơ bản (Primitive types)
Kiểu	Mô tả	Ví dụ
string	Chuỗi ký tự	"Hello"
number	Số (nguyên, thập phân, NaN)	42, 3.14
boolean	Đúng / sai	true, false
null	Không có giá trị	null
undefined	Chưa được gán giá trị	undefined
symbol	Dùng làm khóa duy nhất	Symbol("id")
bigint	Số nguyên rất lớn	9007199254740991n



Kiểu tùy chỉnh 
=> 
🧩 ➤ type

Tạo alias cho kiểu:

type ID = string | number;
type User = { name: string; age: number };

➤ interface

Khai báo cấu trúc đối tượng (có thể mở rộng):

interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: "admin";
}


Union & intersection types 
=>
 🧩 type Status = "active" | "inactive" | "pending"; // Union
  	type Admin = User & { role: string };            // Intersection

Generics
=> 
🧩 function wrap<T>(value: T): { value: T } {
  return { value };
}


