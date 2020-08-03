// Роспорядок дня 
// open eyes 
// stretch
// stand up 
// go

// let sleep = 0;

// function wakeUp(OpenEyes,cb){
//     setTimeout(()=>{
//         if(OpenEyes){
//             sleep += 100;
//             cb(null,sleep);
//         }else{
            
//             cb('err',null)
//         }
//     },1000)
// }

// function stretch(sleep ,cb){
//     setTimeout(()=>{
//         if(sleep > 50){
//             console.log('u r stretching' + sleep);
//             console.log(sleep);
//             sleep -= 50;
//             cb(null,sleep)
//         }else{
//             console.log('u dont wake up yet');
//             cb('none',null);
//         }
//     },1000)    
// }



// wakeUp(true,(err,result)=>{
//     if(err){
//         console.log('u dont open eyes');
//     }else{
//         console.log('u wake up ' + result);
//         console.log(result);
//         stretch(result,(e,rest)=>{
//             if(e){
//                 console.log('no money');
//             }else{
//                 console.log('u wake up');
//             }
//         })
//     }
// });
// console.log(sleep);

// let energy = 0;

function standUp(ready){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(ready){
                energy = 1000;
                resolve(energy);
            }else{
                reject('error')
            }
        },1000)
    })
}



function jump(energy){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(energy > 100){
                energy -= 100;
                resolve(energy)
                console.log('u jump hight af');
            }else{
                console.log('no power for jump');
                reject('error')
            }
        },1000)
    }) 
}


// standUp(true)
//     .then(value =>{
//         console.log(value);
//         return jump(value)
//     })
//     .then(rest =>{
//         console.log(rest);
        
//     })


async function go(){
    try{
    let power = await standUp(true);
    console.log(power);

    let rest  = await jump(120);

    console.log(rest);
    } catch(e){
        console.error('no power');
    }
    
}

go();
