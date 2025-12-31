export const envLoader = (key)=>{
    if(!key){
        throw Error(`${key} environment variable not found `)
    }
    const value = process.env[key] ?? undefined
    if(!value){
        throw Error(`${key} environment variable its value is empty `)
    }
    return value;
}