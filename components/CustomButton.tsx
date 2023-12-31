"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }: CustomButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={(e) => handleClick?.(e)}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image src={rightIcon} alt="righticon" fill className='object-contain' />
                </div>
            )}
        </button>
    )
}

export default CustomButton