# ⚛️ React + Zustand
## 💡 Lợi ích khi sử dụng Zustand

## Không cần Provider như Redux hay Context API.
##  Hiệu năng cao: chỉ component dùng state bị ảnh hưởng mới re-render.
##  Cú pháp đơn giản, dễ hiểu, dễ mở rộng.
##  Hỗ trợ middleware như persist (lưu localStorage), devtools, subscribe.
##  Dễ kết hợp với TypeScrip



```ts
import { create } from 'zustand'
interface BearsState{
    bears:number,
    increasePopulation:() => void,
    decreasePopulation:() => void

}
export const useBearStore = create<BearsState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({bears:state.bears-1})),
}))

---