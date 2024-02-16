import { replaceCart } from "./cartSlice";
import { showNotificationHandler } from "./ui-slice";
import toast from 'react-hot-toast'


export const fetchItems = ()=>{
    return async (dispatch)=>{
        const fetchData = async () => {
            const response = await fetch(
              'https://foodlite-55be1-default-rtdb.firebaseio.com/product.json'
            );
      
            if (!response.ok) {
              throw new Error('Could not fetch cart data!');
            }
      
            const data = await response.json();
            
            return data;
          };

          try{
             const cartData = await fetchData()

             dispatch(replaceCart({
                 items : cartData.items || [],
                 totalQty : cartData.totalQty,
                 totalPrice : cartData.totalPrice,
             }))
          }catch(error){
             console.log(error);
          }
    }
}

export const sendData = (cart)=>{   
    return async (dispatch)=>{
         const sendReq = async ()=>{
            const response = await fetch( 'https://foodlite-55be1-default-rtdb.firebaseio.com/product.json',{
                method : 'PUT',
                body : JSON.stringify({
                    items : cart.item,
                    totalQty : cart.totalQty,
                    totalPrice : cart.totalPrice,
                })
            })
            if(!response.ok){
                throw new Error("something went wrong")
            }

         }
         try{
          dispatch(showNotificationHandler())
           sendReq() 
         }catch(error){
            toast.error("could not Send to cart!")
             console.log(error);
         }
    }
}

