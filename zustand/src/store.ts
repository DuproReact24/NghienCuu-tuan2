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