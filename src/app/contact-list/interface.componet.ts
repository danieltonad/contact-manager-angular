export interface iContact {
    id: number,
    name: string,
    email: string,
    phone: string,
    toggleShow: boolean
}

export interface iJson {
    id: number,
    name: string,
    username: string,
    email: string,
    address: iAddress
    phone: string,
    toggleShow: boolean
}

interface iAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: iGeo
}

interface iGeo {
    lat: string,
    lng: string
}