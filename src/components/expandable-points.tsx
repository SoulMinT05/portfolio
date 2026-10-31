import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const VISIBLE_POINTS = 5

type ExpandablePointsProps = {
  points: readonly string[]
  visible?: number
}

// Shows the first `visible` bullets; the "See Details" toggle only appears when there are more.
export function ExpandablePoints({ points, visible = VISIBLE_POINTS }: ExpandablePointsProps) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const hasMore = points.length > visible
  const shown = expanded || !hasMore ? points : points.slice(0, visible)

  return (
    <div>
      <ul id={listId} className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
        {shown.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {hasMore && (
        <Button
          variant="ghost"
          size="sm"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
          className="text-primary mt-3 h-8 gap-1.5 px-2"
        >
          {expanded ? 'Hide Details' : 'See Details'}
          <ChevronDown className={cn('transition-transform', expanded && 'rotate-180')} />
        </Button>
      )}
    </div>
  )
}
