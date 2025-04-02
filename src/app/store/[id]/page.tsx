import Container from '@/components/Container'
import { GetParams } from '@/models/paramsModel'
import productsItem from '@/services/productsItem'

async function ProductItem({params} : GetParams) {
    const {id} = await params
    const data = await productsItem.getProducts(id) 
    
    
  return (
    <Container>
        <div className='grid grid-cols-12 shadow-md mt-4'>
            <div className='col-span-4'>
                <img src={data.image} alt={data.title} />
            </div>
            <div className='col-span-8 p-4 flex gap-3.5 flex-col'>
                <h2 className='font-bold text-2xl'>{data.title}</h2>
                <p className='text-gray-500'>{data.description}</p>
                <p className='font-bold '>قیمت  <span className='text-red-500'>{data.price}</span></p>
                <div>
                    <button className='px-4 py-2 bg-sky-400 rounded-sm'>+</button>
                    <span className='p-4'>7</span>
                    <button className='px-4 py-2 bg-sky-400 rounded-sm'>-</button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ProductItem