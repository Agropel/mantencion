import {create} from 'zustand'
import { OrderItem } from './types'
import { Partes } from '@prisma/client'


interface Store {
    order: OrderItem[]
    addToOrder:(partes:Partes) => void
    increaseQuantity: (id: Partes['id']) => void
    decreaseQuantity: (id: Partes['id']) => void
    removeItem: (id: Partes['id']) => void
    clearOrder: () => void
}

export const useStore = create<Store>((set,get)=> ({
    order:[],
    addToOrder: (partes) => {
        const { ...data} = partes
        let order : OrderItem[] = []
        if(get().order.find( item => item.id === partes.id)) {
            order = get().order.map( item => item.id === partes.id ? {
                ...item,
                quantity: item.quantity + 1,
            } : item )
        } else {
            order = [...get().order, {
                ...data,
                quantity: 1
            }]
        }
        set(() => ({
            order
        }))
    },

   
    
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map( item => item.id === id ? {
                ...item,
                quantity: item.quantity + 1,
            } : item )
        }))
    },
    decreaseQuantity: (id) => {
        const order = get().order.map( item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
        } : item )

        set(() => ({
            order
        }))
    },
    removeItem: (id) => {
        set((state) => ({
            order: state.order.filter(item => item.id !== id)
        }))
    },
    clearOrder: () => {
        set(() => ({
            order: []
        }))
    },

    
}))


