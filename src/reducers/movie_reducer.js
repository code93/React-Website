



// state = {
//     name:'',
//     parent:[]
// }

// // 1_ ACTION returns an object

// const action = {
//     type: 'MOVIES_LIST',
//     payload:[
//         {id:"1",name:"Pulp Fiction"},
//         {id:"2",name:"True lies"}
//     ]
// }

// // 2_ Reducer finds a match




export default function(state = {} ,action){

    switch(action.type){
        case 'MOVIES_LIST':
            return {...state,movies:action.payload}
        default:
           return state;
    }

    
}