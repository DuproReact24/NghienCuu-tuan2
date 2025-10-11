##🧠 Giải thích ngắn gọn

##useForm() → tạo instance form.

##register("fieldName", rules) → liên kết input với form.

##handleSubmit(callback) → xử lý khi submit hợp lệ.

##formState.errors → chứa thông tin lỗi của các field.



✅ Không cần onChange hoặc useState cho từng input
✅ Hiệu năng cao (ít re-render)
✅ Dễ mở rộng với resolver (Yup, Zod, Joi, v.v.)
✅ Hỗ trợ tốt cho TypeScrip