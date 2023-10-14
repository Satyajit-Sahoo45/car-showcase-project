"use client"

import React, { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { CarProps } from '@/types';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}
const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={() => closeModal?.()}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >

                    <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                        <button
                            type='button'
                            className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                            onClick={closeModal}
                        >
                            <Image
                                src='/close.svg'
                                alt='close'
                                width={20}
                                height={20}
                                className='object-contain'
                            />
                        </button>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    </>
)

export default CarDetails