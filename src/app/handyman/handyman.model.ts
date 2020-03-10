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
    _id: string,

    name: string,
    dob: string,

    img_url: string,
    
    contactNumber: string,
    aadharNumber: string,
    serviceName: string,
    serviceExperience: number,
    city: string,
    state: string,

    isVerified: boolean,
    rating: number,
    ratingNumber: number
    
}