import { Star } from "lucide-react";

export function EuStarDivider() {
  return (
    <div className="flex justify-center items-center gap-4 py-8 opacity-60">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold"></div>
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gold fill-gold" />
        ))}
      </div>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold"></div>
    </div>
  );
}
