import React from 'react';

const Button = React.memo(({ children, variant = 'default', className, ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none';
    const variantStyles = {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        ghost: 'bg-transparent hover:bg-gray-100',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    };

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
});

export default Button;

// import React, { forwardRef } from 'react';
// import { cva } from 'class-variance-authority';

// const buttonVariants = cva(
//     'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none',
//     {
//         variants: {
//             variant: {
//                 default: 'bg-blue-600 text-white hover:bg-blue-700',
//                 ghost: 'bg-transparent hover:bg-gray-100',
//                 outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
//             },
//             size: {
//                 default: 'h-10 px-4 py-2',
//                 sm: 'h-9 px-3',
//                 lg: 'h-11 px-8',
//             },
//         },
//         defaultVariants: {
//             variant: 'default',
//             size: 'default',
//         },
//     }
// );

// const Button = forwardRef(({ variant, size, className, children, ...props }, ref) => {
//     return (
//         <button
//             ref={ref}
//             className={buttonVariants({ variant, size, className })}
//             {...props}
//         >
//             {children}
//         </button>
//     );
// });

// Button.displayName = 'Button'; // Add display name for better debugging

// export default Button;