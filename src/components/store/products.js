const initialState={
    productsList:[

        { _id: '1', name: "1TB USB", category: "tvs", inStock: 1936, price: 100.99 ,image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/SanDisk-Cruzer-USB-4GB-ThumbDrive.jpg/1200px-SanDisk-Cruzer-USB-4GB-ThumbDrive.jpg' },
        { _id: '2', name: "Printer", category: "tvs", inStock: 1926, price: 100.99,image:'https://www.bhphotovideo.com/images/images2500x2500/canon_3771c002_pixma_ts3320_wireless_inkjet_1500489.jpg' },
        { _id: '3', name: "Mouse", category: "tvs", inStock: 886, price: 100.99 ,image:'https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-hero.png?v=1'},
        { _id: '4', name: "Keyboard", category: "tvs", inStock: 931, price: 100.99,image:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430231_sd.jpg' },
        { _id: '5', name: "TV", category: "tvs", inStock: 1825, price: 698 ,image:'https://www.lg.com/eg_en/images/tvs/md07526146/gallery/D-2.jpg'},

        { _id: '6', name: "rich dad poor dad", category: "books", inStock: 792, price: 100.1 ,image:'https://kbimages1-a.akamaihd.net/c81ea4de-cfb7-415d-8634-314aad041fdb/1200/1200/False/rich-dad-poor-dad-9.jpg'},
        { _id: '7', name: "E-myth", category: "books", inStock: 777, price: 100.1,image:'https://images-na.ssl-images-amazon.com/images/I/41Uz0NvjNPL.jpg'},
    
        
    ],
    activeProduct:'',
    products:[]
}

const ACTION={
    'ACTIVE':'active',
    "DECREASE_QUNTITY":'decrease',
    "INCREASE_QUNTITY":'increase'
}

export default function (state=initialState , action){

    const {type , payload}=action;
    let getItem;
    switch(type){
        case ACTION.ACTIVE:
            const products=getProducts(payload.category);
            return{...state , products:products , activeProduct:payload.active}
            default:
                return state;

       case ACTION.DECREASE_QUNTITY:
          
           state.productsList.map(item=>{
               if(item._id==payload)
              return getItem=item
           })
           if(getItem)
            getItem.inStock=getItem.inStock-1;  
            return state   
            
            case ACTION.INCREASE_QUNTITY:
                 getItem;
                state.productsList.map(item=>{
                    if(item._id==payload)
                   return getItem=item
                })
                if(getItem)
                 getItem.inStock=getItem.inStock+1;  
                 return state    
    }
}

export const getProducts=(active)=>{
    return {payload:{active}}
}

export const decreaseQuntity=(payload)=>{
      return{type:ACTION.DECREASE_QUNTITY,payload:payload}
}

export const increaseQuntity=(payload)=>{
    return{type:ACTION.INCREASE_QUNTITY,payload:payload}
}