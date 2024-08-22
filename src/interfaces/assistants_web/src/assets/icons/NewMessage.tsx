import * as React from 'react';
import { SVGProps } from 'react';

import { cn } from '@/utils';

export const NewMessage: React.FC<SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className={cn('h-full w-full fill-inherit', className)}
    {...props}
  >
    <path
      d="M10.3686 14.7681H4.43859C2.56859 14.7681 1.05859 13.2481 1.05859 11.3881V5.46813C1.05859 3.59813 2.57859 2.07812 4.43859 2.07812H9.60859C9.88859 2.07812 10.1086 2.29812 10.1086 2.57812C10.1086 2.85812 9.88859 3.07812 9.60859 3.07812H4.43859C3.12859 3.07812 2.05859 4.14812 2.05859 5.45812V11.3781C2.05859 12.6881 3.12859 13.7581 4.43859 13.7581H10.3586C11.6686 13.7581 12.7386 12.6881 12.7386 11.3781V7.84813C12.7386 7.56813 12.9586 7.34813 13.2386 7.34813C13.5186 7.34813 13.7386 7.56813 13.7386 7.84813V11.3781C13.7386 13.2481 12.2186 14.7581 10.3586 14.7581L10.3686 14.7681Z"
      fill="inherit"
    />
    <path
      d="M13.9175 1.62734C13.8675 1.57734 13.7775 1.57734 13.7175 1.62734L11.3475 3.99734C11.2875 4.05734 11.2575 4.14734 11.2675 4.22734L11.4675 5.61734C11.4975 5.84734 11.7775 5.93734 11.9375 5.77734L14.8975 2.81734C14.9475 2.76734 14.9475 2.67734 14.8975 2.61734L13.9175 1.62734Z"
      fill="inherit"
    />
    <path
      d="M4.71831 10.6467V10.6667L4.22831 11.9567C4.14831 12.1767 4.35831 12.3867 4.57831 12.3067L5.87831 11.8167L5.89831 11.7967L4.73831 10.6367L4.71831 10.6467Z"
      fill="inherit"
    />
    <path
      d="M10.7176 7.00733L10.7976 6.77733L10.5976 5.38733C10.5676 5.15733 10.2876 5.06733 10.1276 5.22733L5.49758 9.85733C5.35758 9.99733 5.35758 10.2273 5.49758 10.3673L6.16758 11.0373C6.30758 11.1773 6.53758 11.1773 6.67758 11.0373L10.7076 7.00733H10.7176Z"
      fill="inherit"
    />
  </svg>
);