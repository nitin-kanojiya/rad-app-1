export interface HandymanModel{
    // id: string,
    // isVerfied: boolean,
    // fullname: string,
    // mobilenumber: string,
    // aadharnumber: string,
    // servicename: string,
    // distance: string,
    // dob: string,
    // experience: string,
    // currCity: string,
    // currState: string
    id: string,

    name: string,
    dob: Date,

    img_url: string,
    
    contactNumber: string,
    aadharNumber: string,
    serviceName: string,
    serviceExperience: Number,
    city: string,
    state: string,

    isVerified: boolean,
    rating: Number,
    
}