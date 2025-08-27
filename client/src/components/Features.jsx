import { Clock, Lock, RotateCcw, Truck } from 'lucide-react'
import React from 'react'

const Features = () => {
    const features = [
        {icon: Truck, text:'free Shipping' , subtext:'On orders over : $100'},
        {icon: Lock, text:'Secure Payment' , subtext:'100% protected payment'},
        {icon: RotateCcw, text:'Easy Returns' , subtext:'7days return policy'},
        {icon: Clock, text:'24/7 Support' , subtext:'Dedicted customer service'},
    ]
  return (
    <div className='bg-gray-100 py-8 px-4 sm:px-6 lg:px-8' >
      <div className="max-w 7xl mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 gap-y-8 ">
            {
                features.map((item, index)=>{
                  return  <div className="flex items-center justify-center sm:text-left" key={index} >
                        <item.icon className='flex-shrink-0 h-10 w-10 text-gray-600' aria-hidden="true"/>
                        <div className="ml-4">
                            <p className="text-base font-medium text-gray-900 ">
                                {item.text}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 ">
                                {item.subtext}
                            </p>
                        </div>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Features
