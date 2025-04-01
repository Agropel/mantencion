import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string().min(1, "Tu Nombre es Obligatorio"),
    planificacion: z.coerce.date(),
    tipo: z.string().min(1, "El Tipo es Obligatorio"),
    image: z.string().optional().nullable(),
    trabajo: z.string().optional().nullable(),
    hrequeridas: z.string().optional().nullable(),
    taller: z.string().optional().nullable(),
    repuestos: z.string().optional().nullable(),
    personal: z.string().optional().nullable(),
    inicio: z.string().optional().nullable(),
    fin: z.string().optional().nullable(),
    order: z.array(
        z.object({
            id: z.number(),
            name: z.string(),
            quantity: z.number(),
        })
    ).optional() // Hacer que sea opcional si no siempre está presente
});


export const OrderIdSchema = z.object({
    orderId: z.string()
                .transform((value) => parseInt(value))
                .refine( value => value > 0, {message: 'Hay errores'} )
})

export const SearchSchema = z.object({
    search: z.string()
                .trim()
                .min(1, {message: 'La búsqueda no puede ir vacia'})
})

export const PartesSchema = z.object({
    name: z.string()
        .trim()
        .min(1, { message: 'El Nombre no puede ir vacio'}),
    maquinaId: z.string()
        .trim()
        .transform((value) => parseInt(value)) 
        .refine((value) => value > 0, { message: 'La Categoría es Obligatoria' })
        .or(z.number().min(1, {message: 'La Categoría es Obligatoria' })),
    image: z.string().optional().nullable(), // Permite undefined o null
})

// export const MaquinasSchema = z.object({
//     name: z.string()
//         .trim()
//         .min(1, { message: 'El Nombre no puede ir vacio' }),
//     slug: z.string()
//         .trim()
//         .min(1, { message: 'El Slug no puede ir vacio' }),
//     marca: z.string().optional(),
//     modelo: z.string().optional(),
// });


export const MaquinasSchema = z.object({
    name: z.string().trim().min(1, { message: 'El Nombre no puede ir vacío' }),
    marca: z.string().optional().nullable(), // Permite undefined o null
    modelo: z.string().optional().nullable(), // Permite undefined o null
});


export const TiposSchema = z.object({
    name: z.string().trim().min(1, { message: 'El Nombre no puede ir vacío' }),
});