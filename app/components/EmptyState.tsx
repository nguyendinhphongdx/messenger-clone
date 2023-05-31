import React from 'react'

export const EmptyState = () => {
    return (
        <div
            className='px-4 py10 sm:px-6 lg:py-8 h-full flex justify-center items-center bg-gray-100'
        >
            <div className="text-center items-center flex flex-col">
                <h3>
                    Select a chat or start a new conversation
                </h3>
            </div>
        </div>
    )
}
export default EmptyState;
