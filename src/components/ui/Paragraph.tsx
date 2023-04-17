import * as React from 'react'
import { cn } from ''
interface ParagraphProps {
    
}
const ParagraphProps = cva('max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center', 
    {
        variants: {
            size: {
                default: 'text-base sm:text-lg',
                sm: 'text-sm', sm: 'text-base',
            }
        },
        defaultVariants: {
            size: 'default',    
        },
    }
)
interface ParagraphProps 
extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ParagraphVariants> {}
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, size, children, ...props }, ref) => {
      return (
        <p
          ref = { ref }
          {...props}
          className = {cn(paragraphVariants({ size, className }))}>
          { children }
        </p>
      )
    }
  )
const Paragraph: FC<ParagraphProps> = ({}) => {
    return <div>Paragraph</div>
}
Paragraph.displayName = 'Paragraph'
export default Paragraph