import Container from '@/components/Container'
import QuantitySelector from '@/components/QuantitySelector'
import { GetParams } from '@/models/paramsModel'
import productsItem from '@/services/products'
import { formatPrice } from '@/utils/formatPrice'

async function ProductItem({params} : GetParams) {
    const {id} = await params
    const data = await productsItem.getProductsItems(id) 
    
    
  return (
    <Container>
        <div className='grid grid-cols-12 shadow-md mt-4'>
            <div className='col-span-4'>
                <img src={data.image} alt={data.title} />
            </div>
            <div className='col-span-8 p-4 flex gap-3.5 flex-col'>
                <h2 className='font-bold text-2xl'>{data.title}</h2>
                <p className='text-gray-500'>{data.description}</p>
                <p className='font-bold '>قیمت  <span className='text-red-500'>{formatPrice(data.price) }</span></p>
                <QuantitySelector id={id} />
            </div>
        </div>
    </Container>
  )
}

export default ProductItem