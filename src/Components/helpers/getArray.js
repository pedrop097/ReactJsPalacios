export const getArray=(array)=>{
    return new Promise((resolve, rejetc) =>{
        setTimeout(() => {
         resolve(array)
        },2000)
    })
}