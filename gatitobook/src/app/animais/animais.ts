export interface Animal {
    id: number
    postData: Date
    url: string
    description: string
    allowCOmmentts: boolean
    likes: number
    comments: number
    userId: number    
}

export type Animais =Array<Animal>
