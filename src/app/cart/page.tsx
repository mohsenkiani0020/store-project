import CartItem from '@/components/CartItem'
import Container from '@/components/Container'
import React from 'react'

function Cart() {
  return (
    <Container>
        <h1 className='mt-4 font-bold'>سبد خرید</h1>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </Container>
  )
}

export default Cart