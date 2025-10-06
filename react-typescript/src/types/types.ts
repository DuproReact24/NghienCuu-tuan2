// type
export type PersonType = {
  name: string;
  age: number;
};


// type UserType = { name: string };
// type UserType = { age: number }; // ❌ Error: Duplicate identifier
// ==> type không thể gọp khai báo trùng tên


//type có thể tạo union, intersection, primitive, tuple

export type ID = string | number; // ✅ union
export type Point = [number, number]; // ✅ tuple
export type Person = { name: string } & { age: number }; // ✅ intersection



